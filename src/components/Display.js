import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchData } from '../redux/data/dataSlice';

const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchCrypto = data.data.filter((cryptoData) => (
    cryptoData.cryptoName.toLowerCase().includes(search.toLowerCase())
  ));

  if (data.loading) {
    return (
      <div className="spinner">
        <div className="loader" />
      </div>
    );
  }

  return (
    <main className="content">
      <section className="search">
        <input
          type="text"
          value={search}
          placeholder="Search Crypto"
          onChange={handleSearch}
        />
      </section>
      <section className="crypto-info">
        {searchCrypto.length === 0 ? (
          <h1>No Results Found!</h1>
        ) : (
          searchCrypto.map((info) => (
            <div className="crypto-cards" key={info.id}>
              <h4>{info.cryptoName}</h4>
              <img src={info.cryptoImage} alt={info.cryptoImage} />
              <p>
                Price: $
                {info.cryptoPrice.toFixed(2)}
              </p>
              <NavLink to={`/info/${info.id}`}><button type="button" className="btn">View Details</button></NavLink>
            </div>
          )))}
      </section>
    </main>
  );
};

export default Display;
