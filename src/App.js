import useCards from './hooks/useCards';
import './App.css';
import { useEffect } from 'react';

function App() {
  const {cards, fetchCards} = useCards(3);

  useEffect(() => {
    fetchCards(1);
  })

  return (
    
    <div className='cards'>
      {cards ? cards.map((card) => (
        <div className='card' key={cards.id}>
          <h1>{card.title}</h1>
          <p>{card.body}</p>
        </div>
      )): <></>}
    </div>
  );
}

export default App;
