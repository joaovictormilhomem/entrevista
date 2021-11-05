
import { useEffect } from 'react';
import useCards from './hooks/useCards';
import usePagination from './hooks/usePagination'

import './App.css';

function App() {
  const { cards, fetchCards } = useCards(3);
  const { actualPage, setActualPage } = usePagination();

  useEffect(() => {
    fetchCards(actualPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage])

  return (<div>

    <h1>Cards</h1>

    <div className='cards'>
      {cards ? cards.map((card) => (
        <div className='card' key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.body}</p>
        </div>
      )) : <></>}
    </div>

    <div className='buttons'>
      {
        Array(5).fill('').map((_, index) => {
          return (
            <button className='button' key={index} onClick={() => {setActualPage(index + 1)} }>
              {index + 1}
            </button>
          )
        })
      }
    </div>

  </div>
  );
}

export default App;
