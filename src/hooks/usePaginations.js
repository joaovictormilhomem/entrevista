import {useHistory, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import qs from 'query-string'

export default function usePagination() {
  const location = useLocation();
  const history = useHistory();

  const [actualPage, setActualPage] = useState(
    getAtualPage() || 1
  )

  function getAtualPage() {
    const queryParams = qs.parde(location.search);
    const page = queryParams.page;

    return page ? Number(page) : undefined;
  }

  useEffect(() => {
    const queryParams = qs.parde(location.search);
    history.push({
      search: qs.stringify({
        ...queryParams,
        page: actualPage
      })
    })
  }, [actualPage])

  return{
    setActualPage,
    actualPage
  }
}