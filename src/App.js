import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from './components/Display';
import Details from './components/Details';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/info/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
