import React, {useState} from 'react';
import './App.css';
import FavoriteCuisine from './components/food/FavoriteCuisine';
import RatePhotos from './components/photos/RatePhotos';

function App() {
  const [name] = useState("Questionnaire");
  return (
    <div className="App">
      <h1>{name}</h1>
      <FavoriteCuisine />
      <RatePhotos  totalStars={5} />
    </div>
  );
}

export default App;
