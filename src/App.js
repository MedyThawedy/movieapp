import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Detailspage from './pages/detailspage/Detailspage';
import Home from './pages/home/Home';
import SearchResults from './pages/searchresults/SearchResults';
import ErrorPage from './pages/errorpage/ErrorPage';
import { useState } from 'react';

function App() {

  return (
    <div className='mainDiv'>
      <BrowserRouter>
        <Navigation handleSearchValue={(e) => e.target.value} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailspage/:movieid" element={<Detailspage />} />
          <Route path="/searchresults/:moviename" element={<SearchResults />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );

}

export default App;
