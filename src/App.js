import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './components/Display';
import Details from './components/Details';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/info/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
