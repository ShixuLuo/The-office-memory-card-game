import { useState } from 'react';
import Card from './components/Card';
import { getCharacter } from './data/characters.ts';

function shuffleN(n: number): string[] {
  let res: string[] = getCharacter();
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res.slice(0, n);
}

function App() {
  const thisRound: string[] = shuffleN(5);
  const [clicked, setClicked] = useState<Set<string>>(new Set());
  const [bestScore, setBestScore] = useState<number>(0);

  if (clicked.size > bestScore) {
    setBestScore(clicked.size);
  }

  const handleClick = (name) => () => {
    if (clicked.has(name)) {
      setClicked(new Set());
    } else {
      setClicked(new Set(clicked).add(name));
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Memory Card</h1>
      <p>Now: {clicked.size}</p>
      <p>Best: {bestScore}</p>
      <div className="flex gap-3">
        {thisRound.map((name) => <Card key={name} name={name} onClick={handleClick(name)} />)}
      </div>
    </div>
  )
}

export default App
