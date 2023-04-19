import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../redux/data/dataSlice';
import Search from './Search';

const Display = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  console.log(data);

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  return (
    <>
      <Search />
      <div className="content">
        {
        data.map((covidData) => (
          <div key={covidData.country} className="country">
            <div style={{
              backgroundImage: `url(${covidData.countryInfo.flag})`, backgroundRepeat: 'no-repeat', padding: '3rem', height: '400px', backgroundSize: 'contain',
            }}
            />
            <div className="content-details">
              <h1>{covidData.country}</h1>
              <p>
                <span>Population: </span>
                {covidData.population}
              </p>
              <p>
                <span>Deaths: </span>
                {covidData.deaths}
              </p>
              <button type="button" className="btn">View Details</button>
            </div>
          </div>
        ))
      }
      </div>
    </>
  );
};

export default Display;
