import React from 'react';
import './App.css';
import FavoriteCuisine from './components/food/FavoriteCuisine';
import RatePhotos from './components/photos/RatePhotos';

function App() {
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <FavoriteCuisine />
      <RatePhotos  totalStars={5} />
    </div>
  );
}

export default App;
