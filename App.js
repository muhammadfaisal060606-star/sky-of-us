import React, { useState } from 'react';
import Home from './components/Home';
import Story from './components/Story';
import ConstellationGame from './components/ConstellationGame';
import LettersVault from './components/LettersVault';
import StormMode from './components/StormMode';
import './styles.css';

function App() {
  const [screen, setScreen] = useState('home');

  return (
    <div className="App">
      {screen === 'home' && <Home setScreen={setScreen} />}
      {screen === 'story' && <Story setScreen={setScreen} />}
      {screen === 'constellation' && <ConstellationGame setScreen={setScreen} />}
      {screen === 'letters' && <LettersVault />}
      <StormMode />
    </div>
  );
}

export default App;