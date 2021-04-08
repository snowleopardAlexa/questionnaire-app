import React, { useRef } from 'react';

function Form() {
    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();
        const soundValue = sound.current.value;
        const colorValue = color.current.value;
        alert(`${soundValue} sounds like ${colorValue}`);
        sound.current.value = "";
        color.current.value = "";
    };

    return (
     <div class="form">
       <h2>Write the sound in the form and assign to it the color</h2>
       <form onSubmit={submit}>
           <input
            ref={sound} 
            type="text"
            placeholder="Sound..."
            />
           <input 
            ref={color}
            type="color" 
           />
           <button>ADD</button>
       </form>
     </div>   
    );
}

export default Form;

