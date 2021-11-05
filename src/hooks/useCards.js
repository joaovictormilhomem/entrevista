import { useState } from "react"

export default function usePhotos(pageLimit){
  const [cards, setCards] = useState();

  function fetchCards(page) {
    const virtualPage = ((page - 1) * pageLimit);
    const positiveVirtualPage = (virtualPage <= 0) ? 0 : virtualPage;

    fetch(`http://jsonplaceholder.typicode.com/posts?_start=${positiveVirtualPage}&_limit=${pageLimit}`)
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(error => console.log(error))
  }

  return{
    fetchCards,
    cards
  }
}