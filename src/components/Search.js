import React, { useState } from 'react';

const Search = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const [search, setSearch] = useState('');

  console.log(data);

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <form>
      <input type="text" value={search} onChange={handleSearch} placeholder="Search Country" />
    </form>
  );
}

export default Search;
