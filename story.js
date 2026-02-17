import React, { useState } from 'react';

const chapters = [
  { title: 'Before I Met You', text: 'Yeshi, I never knew life could feel this bright...' },
  { title: 'When We Started Talking', text: 'Every message with you, Jaanu, made me smile...' },
  { title: 'Our First Month', text: 'Faisal cherishes every moment we shared in this month...' },
  { title: 'What I Appreciate About You, Jaanu', text: 'Your laughter, your kindness, your presence...' },
];

function Story({ setScreen }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="story">
      <h2>{chapters[index].title}</h2>
      <p>{chapters[index].text}</p>
      {index < chapters.length - 1 ? (
        <button onClick={() => setIndex(index + 1)}>Next Chapter</button>
      ) : (
        <button onClick={() => setScreen('constellation')}>Unlock Our Sky</button>
      )}
    </div>
  );
}

export default Story;