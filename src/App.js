import React from 'react';
import MovieContetProvider from './contexts/moviecontext';
import NavBar from './components/navbar';
import MovieList from './components/movielist';

function App() {
  return (
    <div className="App">
      <MovieContetProvider>
        <NavBar />
        <MovieList />
      </MovieContetProvider>
    </div>
  );
}

export default App;
