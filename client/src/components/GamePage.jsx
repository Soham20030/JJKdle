import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import GuessRow from './GuessRow';
import { getTodayCharacter, setTodayCharacter } from '../utils/dailyCharacters';
import logo from '../assets/logo.svg';
import hint from '../assets/Hint.svg';
import '../styles/GamePage.css'; // Add this if you want to move styles out of inline

export default function GamePage() {
  const [characters, setCharacters] = useState([]);
  const [guess, setGuess] = useState('');
  const [guessHistory, setGuessHistory] = useState([]);
  const [winningCharacter, setWinningCharacter] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState('');
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiVisible, setConfettiVisible] = useState(false);

  const HINT_THRESHOLD = 4;

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_BASE_URL}/api/characters`)      
  .then(res => res.json())
      .then(data => {
        setCharacters(data);

        const existingId = getTodayCharacter();
        let winning = existingId ? data.find(c => c.id === existingId) : null;

        if (!winning) {
          const randomChar = data[Math.floor(Math.random() * data.length)];
          winning = randomChar;
          setTodayCharacter(randomChar.id);
          localStorage.setItem("todayDate", new Date().toDateString());
        }

        setWinningCharacter(winning);

        const storedWinningId = localStorage.getItem('winningCharacterId');
        const storedGuesses = JSON.parse(localStorage.getItem("guessHistory"));

        if (
          storedWinningId &&
          parseInt(storedWinningId) === winning.id &&
          Array.isArray(storedGuesses)
        ) {
          setGuessHistory(storedGuesses);
        } else {
          localStorage.removeItem("guessHistory");
          localStorage.setItem("winningCharacterId", winning.id);
          setGuessHistory([]);
        }
      });
  }, []);

  useEffect(() => {
    if (!guessHistory.length) return;

    const isCorrect = guessHistory[0].isCorrect;
    if (!isCorrect) return;

    setShowConfetti(true);
    setConfettiVisible(true);

    const fadeOutTimer = setTimeout(() => {
      setConfettiVisible(false);
    }, 5000);

    const unmountTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 6000);

    const updateCountdown = () => {
      const now = new Date();
      const nextMidnight = new Date(now);
      nextMidnight.setHours(0, 0, 0, 0);
      nextMidnight.setDate(nextMidnight.getDate() + 1);
      const diff = nextMidnight - now;

      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${hrs.toString().padStart(2, '0')}:` +
        `${mins.toString().padStart(2, '0')}:` +
        `${secs.toString().padStart(2, '0')}`
      );
    };

    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(unmountTimer);
      clearInterval(countdownTimer);
    };
  }, [guessHistory]);

  const handleGuess = () => {
    const guessedChar = characters.find(c => c.name.toLowerCase() === guess.toLowerCase());

    if (!guessedChar || guessHistory.find(g => g.name === guessedChar.name)) {
      setGuess('');
      return;
    }

    const isCorrect = guessedChar.name === winningCharacter.name;
    const newHistory = [{ ...guessedChar, isCorrect }, ...guessHistory];

    setGuessHistory(newHistory);
    localStorage.setItem("guessHistory", JSON.stringify(newHistory));
    localStorage.setItem("winningCharacterId", winningCharacter.id);
    setGuess('');
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setGuess(value);

    if (value === '') {
      setSuggestions([]);
    } else {
      const filtered = characters
        .filter(c => c.name.toLowerCase().includes(value.toLowerCase()))
        .map(c => c.name);
      setSuggestions(filtered);
    }
  };

  const handleSuggestionClick = (name) => {
    setGuess(name);
    setSuggestions([]);
  };

  const hasWon = guessHistory.length > 0 && guessHistory[0].isCorrect;

  return (
    <div className="game-wrapper">
      <div className="game-container">
        <img src={logo} alt="Logo" />
        <h3 className='Title outlined-text'>Guess JJK Characters</h3>
        {showConfetti && (
          <div
            style={{
              transition: 'opacity 1s ease',
              opacity: confettiVisible ? 1 : 0,
              pointerEvents: 'none',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 9999
            }}
          >
            <Confetti width={windowSize.width} height={windowSize.height} />
          </div>
        )}

{/* Hint */}
<div className="hintbox">
  {hasWon ? (
    <>
      <img src={winningCharacter?.image_url} alt={winningCharacter?.name} className="hint-ico" />
      <p><strong>Congratulations!</strong> You’ve guessed today’s character: <strong>{winningCharacter?.name}</strong> 🎉</p>
      <p>Come back tomorrow for a new challenge.</p>
    </>
  ) : guessHistory.length >= HINT_THRESHOLD ? (
    <>
      <img src={hint} alt="hint-icon" className="hint-ico" />
      <p><strong>Hint:</strong> {winningCharacter?.item_hint}</p>
    </>
  ) : (
    <>
      <img src={hint} alt="hint-icon" className="hint-ico" />
      <p>
        Item Hint unlocks after {HINT_THRESHOLD - guessHistory.length} more {HINT_THRESHOLD - guessHistory.length === 1 ? 'guess' : 'guesses'}.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
        <div
          style={{
            height: '8px',
            width: '250px',
            backgroundColor: '#ddd',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${(guessHistory.length / HINT_THRESHOLD) * 100}%`,
              backgroundColor: '#4caf50',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>
    </>
  )}
</div>

        {/* Input */}
        <div className="search-container" style={{ position: 'relative', marginTop: '20px' }}>
          <input
            type="text"
            placeholder="Enter character name"
            value={guess}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleGuess();
            }}
            disabled={hasWon}
          />
          {suggestions.length > 0 && (
            <ul
              className="autocomplete-dropdown"
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'white',
                border: '1px solid #ccc',
                zIndex: 1000,
                listStyle: 'none',
                margin: 0,
                padding: '0.5rem 0'
              }}
            >
              {suggestions.map((name, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSuggestionClick(name)}
                  style={{ padding: '0.5rem', cursor: 'pointer' }}
                >
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button onClick={handleGuess} style={{ marginTop: '10px' }} disabled={hasWon} className='guess-btn'>Guess</button>

        {/* Result and Countdown */}
        {hasWon && (
          <div style={{ marginTop: '20px' }} className='congrats'>
            <h3>🎉 You guessed it right!</h3>
            <p>⏳ New character in: <strong>{timeLeft}</strong></p>
          </div>
        )}

        {/* Guess History Table */}
        <div className="guess-history" style={{ marginTop: '30px' }}>
{guessHistory.map((entry, index) => (
  <GuessRow
    key={`${entry.name}-${entry.gender}`}
    entry={entry}
    winningCharacter={winningCharacter}
    showHeader={index === 0}
    isLatest={index === 0} // ✅ only animate the latest
  />
))}
        </div>
      </div>
    </div>
  );
}
