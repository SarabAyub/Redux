import React, { useState, useEffect } from 'react';
import { useLazyFetchDataQuery } from './features/api/dataApi';
import DataList from './components/DataList';
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [fetchData, { data = [], isFetching }] = useLazyFetchDataQuery(page);

  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);

  const handleScroll = (e) => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='main-heading'>
      <h1>Infinite Scroll Data Cards</h1>
      <DataList data={data} />
      {isFetching && <p>Loading more cards....</p>}
    </div>
  );
};

export default App;
