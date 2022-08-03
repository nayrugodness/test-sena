import React from 'react';

function Img({src, alt, clase}) {
    return (
        <img src={src} alt={alt} className={clase}>
        </img>
    );
  }
  
  export default Img;