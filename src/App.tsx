import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import ScorePage from './Pages/ScorePage';
import ErrorPage from './Pages/ErrorPage';

const App = () => {
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState('easy');
  const [category, setCategory] = useState(9);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Home
            setAmount={setAmount}
            setDifficulty={setDifficulty}
            setCategory={setCategory}
          />
        } />
        <Route path="/quiz" element={
          <Quiz amount={amount} difficulty={difficulty} category={category} />
        } />

        <Route path="/score" element={<ScorePage />} />

        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
