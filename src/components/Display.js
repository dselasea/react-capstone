import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/data/dataSlice';

const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [search, setSearch] = useState('');

  console.log(data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const searchCrypto = data.data.filter((cryptoData) => (
    cryptoData.cryptoName.toLowerCase().includes(search.toLowerCase())
  ));

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="content">
      <div className="search">
        <input
          type="text"
          value={search}
          placeholder="Search Crypto"
          onChange={handleSearch}
        />
      </div>
      <div>
        {searchCrypto.length === 0 ? (
          <h1>No Results Found!</h1>
        ) : (
          searchCrypto.map((info) => (
            <div key={info.id}>
              <h1>{info.cryptoName}</h1>
            </div>
          )))}
      </div>
    </div>
  );
};

export default Display;
