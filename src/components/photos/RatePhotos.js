import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";
import ImageOne from './ImageOne';


// create the array of objects - stars icons
const starsArray = (length) => [
  ...Array(length)
];

// create functon that will return star icon and enable it to change color from red to gray
// upon user hovering on it to rate.
function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

// create function that shows stars in the array and displays text 0-5 number of stars.
// the text must change, write state here
function RatePhotos({ totalStars }) {
  const [selectedStars, setSelectedStars ] = useState(0);
  return (
    <>
      <ImageOne />
      {starsArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i+1)}
        />
      ))};
      <p>{selectedStars} of {totalStars}</p>
    </>
  )
}


export default RatePhotos;