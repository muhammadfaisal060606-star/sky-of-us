import React, { useState } from 'react';

const starsData = [
  { id: 1, x: 20, y: 30, message: "First memory: Our first chat" },
  { id: 2, x: 50, y: 50, message: "First memory: Laughing together" },
  { id: 3, x: 80, y: 20, message: "First memory: Evening walk" },
];

function ConstellationGame({ setScreen }) {
  const [selected, setSelected] = useState([]);
  const [completed, setCompleted] = useState(false);

  const handleClick = (id) => {
    const nextId = selected.length + 1;
    if (id === nextId) {
      setSelected([...selected, id]);
      if (id === starsData.length) {
        setCompleted(true);
      }
    } else {
      setSelected([]); // reset sequence if wrong
    }
  };

  return (
    <div className="constellation">
      <h2>Memory Constellations</h2>
      <svg width="100%" height="60vh">
        {starsData.map((star) => (
          <circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r="8"
            fill={selected.includes(star.id) ? 'yellow' : 'white'}
            onClick={() => handleClick(star.id)}
            style={{ cursor: 'pointer', transition: 'fill 0.3s' }}
          />
        ))}
        {selected.length > 1 &&
          selected.slice(0, -1).map((id, i) => {
            const starA = starsData[i];
            const starB = starsData[i + 1];
            return (
              <line
                key={i}
                x1={`${starA.x}%`}
                y1={`${starA.y}%`}
                x2={`${starB.x}%`}
                y2={`${starB.y}%`}
                stroke="yellow"
                strokeWidth="2"
              />
            );
          })}
      </svg>
      {completed && (
        <div className="memory-card">
          <p>All constellations complete! Yeshi, my Jaanu, this is our special sky 🌟</p>
          <button onClick={() => setScreen('letters')}>Go to Letters</button>
        </div>
      )}
    </div>
  );
}

export default ConstellationGame;