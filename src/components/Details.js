import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
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
      <FaLongArrowAltLeft className="arrow" />
      <div className="crypto-detail">
        {
        crypto.map((cryptoData) => (
          <div key={cryptoData.id}>
            <img src={cryptoData.cryptoImage} alt={cryptoData.cryptoName} />
            <h2>{cryptoData.cryptoSymbol}</h2>
            <p>
              Price: $
              {cryptoData.cryptoPrice.toFixed(2)}
            </p>
            <p>
              Website:
              {cryptoData.cryptoUrl}
            </p>
            <p>
              Price Change (Hour):
              {cryptoData.cryptoChangeHour}
            </p>
            <p>
              Price Change (Day):
              {cryptoData.cryptoChangeDay}
            </p>
            <p>
              Price Change (Week):
              {cryptoData.cryptoChangeWeek}
            </p>
          </div>
        ))
      }
      </div>
    </>
  );
};

export default Details;