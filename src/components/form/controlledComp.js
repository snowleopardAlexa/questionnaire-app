// Another way to handle inputs in a form is to use a controlled component. 
// A controlled component means that you handle form inputs 
// using state variables. 
import React, { useState } from 'react';

function Form() {
    const [sound, setSound] = useState("");
    const [sound, setColor] = useState("000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${sound} sounds like ${color}`);
        setSound("");
        setColor("000000");
    };

    return (
     <div class="form">
       <h2>Write the sound in the form and assign to it the color</h2>
       <form onSubmit={submit}>
           <input
            value={sound} 
            type="text"
            placeholder="Sound..."
            onChange={(e) => setSound(e.target.value)}
            />
           <input 
            value={color}
            type="color" 
            onChange={(e) => setColor(e.target.value)}
           />
           <button>ADD</button>
       </form>
     </div>   
    );
}

export default Form;
