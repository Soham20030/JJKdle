import {useNavigate} from 'react-router-dom';
import Logo from "../assets/Logo.svg";
import Button from "../assets/Button.svg";
import "../styles/Home.css";

export default function Home() {
    const navigate = useNavigate();


    return (
        <>
        <div className='main-container'>
        <img src={Logo} alt="Logo" />
        <h3 className='Title outlined-text'>Guess JJK Characters</h3>
        <img
            src={Button}
            alt="Play Classic"
            onClick={() => navigate('/game')}
            style={{
                width: '320px',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      />
        </div>
        </>
    );
}