import React, { useState, useEffect } from 'react';

const lettersData = [
  { id: 1, title: 'Next Valentine\'s Day', date: '2027-02-14', text: 'Happy Valentine\'s Day, Jaanu!' },
  { id: 2, title: 'Faisal\'s Birthday', date: '2026-06-06', text: 'So happy to spend my birthday with you, Jaanu.' },
  { id: 3, title: 'A Surprise Letter', date: '2026-03-31', text: 'A small note for a sweet day.' },
];

function LettersVault() {
  const [today, setToday] = useState(new Date());
  const [unlocked, setUnlocked] = useState([]);

  useEffect(() => {
    const unlockedIds = lettersData.filter(l => new Date(l.date) <= today).map(l => l.id);
    setUnlocked(unlockedIds);
  }, [today]);

  return (
    <div className="letters">
      <h2>Letters from Faisal to Jaanu</h2>
      {lettersData.map((letter) => {
        const isUnlocked = unlocked.includes(letter.id);
        return (
          <div key={letter.id} className="letter-card">
            <h3>{letter.title}</h3>
            {isUnlocked ? (
              <p>{letter.text}</p>
            ) : (
              <p>Locked - Countdown: {Math.max(0, Math.floor((new Date(letter.date) - today)/86400000))} days</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LettersVault;