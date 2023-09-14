import { useState } from 'react';

export default function App() {
  const [button, setButton] = useState('');
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [meme, setMeme] = useState('');

  return (
    <div>
      <div>
        <h2>Top text:</h2>
        <h3>{text}</h3>
        <input
          onChange={(event) => setText(event.currentTarget.value)}
          value={text}
        />
        <h2>Bottom text:</h2>
        <h3>{text2}</h3>
        <input
          onChange={(event) => setText2(event.currentTarget.value)}
          value={text2}
        />
      </div>
      <img src="" alt="Meme picture" data-test-id="meme-image"></img>

      <div>
        <label htmlFor="memeTemplate">Meme template: </label>
        <input type="text" id="memeTemplate" placeholder="Enter meme name" />
      </div>

      {meme}
      <button
        onClick={() => setMeme('https://api.memegen.link/images')}
        style={{
          backgroundColor: 'black',
          color: 'pink',
          borderRadius: '12px',
        }}
      >
        Download
      </button>
    </div>
  );
}
