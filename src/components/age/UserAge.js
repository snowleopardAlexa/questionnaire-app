import React, {useReducer} from 'react';


function UserAge() {
    const [number, setNumber] = useReducer (
        (number, newNumber) => number + newNumber, 0);
    return (
  <div class="user-age">
      <h2>How old are you? Click on the number to increase the value.</h2>
      <p onClick={() => setNumber(1)}>{number}</p>
  </div>
    );
}

export default UserAge;