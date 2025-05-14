import { useState, useEffect } from 'react';
import Home from './components/pages/Home';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Home theme={theme} setTheme={setTheme} />
  );
}

export default App;
