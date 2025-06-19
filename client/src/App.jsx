import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import GamePage from './components/GamePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/game" element={<GamePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
