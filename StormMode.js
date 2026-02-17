import React, { useState } from 'react';

function StormMode() {
  const [storm, setStorm] = useState(false);
  const [cleared, setCleared] = useState(0);
  const messages = [
    "It's okay, Jaanu. I'm here.",
    "We’ll get through this together.",
    "Even the storm will pass, my Jaanu."
  ];

  const handleClear = () => {
    setCleared(c => Math.min(c + 1, messages.length));
    if (cleared + 1 === messages.length) setStorm(false);
  };

  return (
    <div className="storm-mode">
      <button onClick={() => setStorm(true)}>It’s a Stormy Day</button>
      {storm && (
        <div className="storm-overlay" onClick={handleClear}>
          <p>{messages[cleared]}</p>
        </div>
      )}
    </div>
  );
}

export default StormMode;