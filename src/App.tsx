import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ApplyPage from './components/ApplyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/apply" element={<ApplyPage />} />
    </Routes>
  );
}

export default App;
