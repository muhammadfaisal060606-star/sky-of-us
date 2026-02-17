import React from 'react';

function Home({ setScreen }) {
  return (
    <div className="home">
      <h1>Sky of Us</h1>
      <h2>For Yeshi, from Faisal</h2>
      <div className="buttons">
        <button onClick={() => setScreen('story')}>Read My Birthday Story</button>
        <button onClick={() => setScreen('constellation')}>Unlock the Sky</button>
        <button onClick={() => setScreen('letters')}>Letters to Future Us</button>
      </div>
    </div>
  );
}

export default Home;