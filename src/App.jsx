import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameStore from './GameStore';
import GameDetail from './GameDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameStore />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </Router>
  );
}

export default App;