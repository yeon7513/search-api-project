import React from 'react';
import Footer from './Components/Footer';
import SearchEncyc from './Components/SearchEncyc/SearchEncyc';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import SearchBook from './Components/SearchBook/SearchBook';
import SearchLocation from './Components/SearchLocation/SearchLocation';
import SearchImage from './Components/SearchImage/SearchImage';
import './scss/main.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SearchEncyc' element={<SearchEncyc />} />
          <Route path='/SearchBook' element={<SearchBook /> }/>
          <Route path='/SearchImage' element={<SearchImage /> }/>
          <Route path='/SearchLocation' element={<SearchLocation /> }/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
