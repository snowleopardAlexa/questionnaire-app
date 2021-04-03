import React, {useState} from 'react';
import './App.css';
import FavoriteCuisine from './components/food/FavoriteCuisine';
import RatePhotos from './components/photos/RatePhotos';
import UserAge from './components/age/UserAge';


function App() {
  const [name] = useState("Questionnaire");
  return (
    <div className="App">
      <h1>{name}</h1>
      <FavoriteCuisine />
      <RatePhotos  totalStars={5} />
      <UserAge />
    </div>
  );
}

export default App;
