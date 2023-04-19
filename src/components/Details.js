import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { filterCrypto } from '../redux/data/dataSlice';

const Details = () => {
  const cryptoInfo = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(filterCrypto(id));
  }, [dispatch, id]);

  const crypto = cryptoInfo.data.filter((cryptoData) => cryptoData.show === true);

  return (
    <>
      <NavLink to="/">
        <button type="button" className="btn">Back</button>
      </NavLink>
      <div className="crypto-detail">
        {
        crypto.map((cryptoData) => (
          <div key={cryptoData.id}>
            <img src={cryptoData.cryptoImage} alt={cryptoData.cryptoName} />
            <h1>
              Rank:
              {' '}
              {cryptoData.cryptoRank}
            </h1>
            <h2>{cryptoData.cryptoSymbol}</h2>

            <div className="details-card">
              <h4>Price:</h4>
              {' '}
              $
              {cryptoData.cryptoPrice.toFixed(2)}
            </div>
            <div className="details-card">
              <h4>Website:</h4>
              {cryptoData.cryptoUrl}
            </div>
            <div className="details-card">
              <h4>Price Change (Hour):</h4>
              {cryptoData.cryptoChangeHour}
            </div>
            <div className="details-card">
              <h4>Price Change (Day):</h4>
              {cryptoData.cryptoChangeDay}
            </div>
            <div className="details-card">
              <h4>Price Change (Week):</h4>
              {cryptoData.cryptoChangeWeek}
            </div>
          </div>
        ))
      }
      </div>
    </>
  );
};

export default Details;
