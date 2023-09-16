import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('Welcome');
  const [text2, setText2] = useState('');
  const [meme, setMeme] = useState('doge');

  const url = `https://api.memegen.link/images/${meme}/${text}/${text2}.jpg`;

  console.log({ url });

  //const  = () => (    )

  return (
    <div>
      <img src={url} alt="Meme picture" data-test-id="meme-image"></img>
      <div>
        <label htmlFor="topText">Top text:</label>
        <h3>{text}</h3>

        <input
          id="topText"
          onChange={(event) => setText(event.currentTarget.value)}
          value={text}
        />
        <label htmlFor="bottomText">Bottom text:</label>
        <h3>{text2}</h3>
        <input
          id="bottomText"
          onChange={(event) => setText2(event.currentTarget.value)}
          value={text2}
        />
      </div>
      <div>
        <span
          role="button"
          tabIndex={0}
          onKeyPress={() => {}}
          onClick={() => setMeme('')}
        >
          Meme template:
        </span>
        <input
          id="memeTemplate"
          placeholder="Enter meme name"
          onChange={(event) => setMeme(event.currentTarget.value)}
          value={meme}
        />
      </div>
      <a
        href={url}
        title="Download meme"
        download="meme.jpg"
        style={{
          backgroundColor: 'black',
          color: 'pink',
          borderRadius: '12px',
        }}
      >
        Download
      </a>
    </div>
  );
}
