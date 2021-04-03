import React, {useState} from 'react';


function FavoriteCuisine() {

// state     
const [italianCuisine, setCheckedItalianCuisine] = useState(false);
const [indianCuisine, setCheckedIndianCuisine] = useState(false);
const [polishCuisine, setCheckedPolishCuisine] = useState(false);
const [frenchCuisine, setCheckedFrenchCuisine] = useState(false);


  return (
    <div className="food-type">
      <h2>1. What is your favorite cuisine?</h2>
      <div class="option-one">
      <p>Italian Cuisine</p>    
      <input 
        type="checkbox"
        value={italianCuisine}
        onChange={() => setCheckedItalianCuisine((italianCuisine) => !italianCuisine)}
      />
      <p>{italianCuisine ? "Pizza and Pasta! Mniam!" : ""}</p>
      </div>

      <div class="option-two">
      <p>Indian Cuisine</p>  
      <input 
        type="checkbox"
        value={indianCuisine}
        onChange={() => setCheckedIndianCuisine((indianCuisine) => !indianCuisine)}
      />
      <p>{indianCuisine ? "I love Chicken Masala too!" : ""}</p>
      </div>

      <div class="option-three">
      <p>Polish Food</p>  
      <input 
        type="checkbox"
        value={polishCuisine}
        onChange={() => setCheckedPolishCuisine((polishCuisine) => !polishCuisine)}
      />
      <p>{polishCuisine ? "Pierogies!" : ""}</p>
      </div>

      <div class="option-four">
      <p>French Food</p>  
      <input 
        type="checkbox"
        value={frenchCuisine}
        onChange={() => setCheckedFrenchCuisine((frenchCuisine) => !frenchCuisine)}
      />
      <p>{frenchCuisine ? "I am not a fan of it!" : ""}</p>
      </div>
    </div>
  );
}

export default FavoriteCuisine;
