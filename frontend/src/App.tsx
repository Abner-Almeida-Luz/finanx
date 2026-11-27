import WelcomeMessage from './components/WelcomeMessage';
import { getHealth } from './services/api';
import { useState, useEffect } from 'react';

function App() {
  const [status, setStatus] = useState('Carregando...');

  useEffect(() => {
    getHealth()
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('OFFLINE'));
  }, []);

  return (
    <main>
      <h1>FinanX</h1>
      <WelcomeMessage />
      <p>Backend: {status}</p>
    </main>
  );
}

export default App;
