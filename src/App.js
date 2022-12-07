import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Detailspage from './pages/detailspage/Detailspage';
import Home from './pages/home/Home';
import SearchResults from './pages/searchresults/SearchResults';
import ErrorPage from './pages/errorpage/ErrorPage';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
// handleSearchValue={(e) => e.target.value}
// 
  return (
    <div className='mainDiv'>
      <BrowserRouter>
      <Navigation /> 
        <Routes>
         <Route exact path="/" element={<Home />} />
          <Route path="/detailspage/:movieid" element={<Detailspage />} /> 
          <Route path="*" element={<ErrorPage />} /> 
          <Route path="/searchresults/:moviename" element={<SearchResults />} />
        </Routes> 
        <Footer></Footer> 
       
      </BrowserRouter>
     
    </div>
  );

}

export default App;
