import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToDashboard = () => {
    setCurrentPage('dashboard');
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <LandingPage onNavigateToDashboard={navigateToDashboard} />
      ) : (
        <Dashboard onNavigateToLanding={navigateToLanding} />
      )}
    </div>
  );
}

export default App;