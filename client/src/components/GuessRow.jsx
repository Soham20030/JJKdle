import '../styles/GuessRow.css';

export default function GuessRow({ entry, winningCharacter, showHeader, isLatest }) {
  const compareAttr = (attr) => {
    return entry[attr] === winningCharacter[attr] ? 'green' : 'red';
  };

  const getClass = (attr, delay) => {
    return `guess-attribute ${compareAttr(attr)} delay-${delay} ${isLatest ? 'fadeIn' : ''}`;
  };

  return (
    <>
      {showHeader && (
        <div className="guess-row guess-header">
          <div className="guess-attribute">Character</div>
          <div className="guess-attribute">Gender</div>
          <div className="guess-attribute">Clan</div>
          <div className="guess-attribute">Affiliation</div>
          <div className="guess-attribute">Debut Arc</div>
        </div>
      )}

      <div className="guess-row">
        <div className="guess-attribute delay-0">
          <img
            src={entry.image_url}
            alt={entry.name}
            className="guess-image"
          />
        </div>

        <div className={getClass('gender', 1)}>
          {entry.gender}
        </div>

        <div className={getClass('clan', 2)}>
          {entry.clan}
        </div>

        <div className={getClass('affiliation', 3)}>
          {entry.affiliation}
        </div>

        <div className={getClass('debut_arc', 4)}>
          {entry.debut_arc}
        </div>
      </div>
    </>
  );
}
