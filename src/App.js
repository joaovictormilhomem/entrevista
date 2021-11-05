
import { useEffect } from 'react';
import useCards from './hooks/useCards';
import usePagination from './hooks/usePagination'

import './App.css';

function App() {
  const { cards, fetchCards } = useCards(3);
  const { actualPage, setActualPage } = usePagination();

  useEffect(() => {
    fetchCards(actualPage);
  })

  return (<div>

    <div className='cards'>
      {cards ? cards.map((card) => (
        <div className='card' key={cards.id}>
          <h1>{card.title}</h1>
          <p>{card.body}</p>
        </div>
      )) : <></>}
    </div>

    <div className='buttons'>
      {
        Array(5).fill('').map((_, index) => {
          return (
            <button key={index} onClick={() => {setActualPage(index + 1)} }>
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
