import {useNavigate, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import qs from 'query-string'

export default function usePagination() {
  const location = useLocation();
  const navigate = useNavigate();

  const [actualPage, setActualPage] = useState(
    getAtualPage() || 1
  )

  function getAtualPage() {
    const queryParams = qs.parse(location.search);
    const page = queryParams.page;

    return page ? Number(page) : undefined;
  }

  useEffect(() => {
    const queryParams = qs.parse(location.search);
    navigate({
      search: qs.stringify({
        ...queryParams,
        page: actualPage
      })
    })
  }, [actualPage, location.search, navigate])

  return{
    setActualPage,
    actualPage
  }
}