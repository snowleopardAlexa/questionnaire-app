import React from 'react';
import girl from '../../img/girl.jpg';

function ImageOne() {
    return (
   <div class="image-one">
       <h2>2. Rate the photo below.</h2>
       <img src={girl} width={200} height={300} />
   </div>
    );
}

export default ImageOne;
