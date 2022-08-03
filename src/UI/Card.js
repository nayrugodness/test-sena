import React from 'react';

function Card(imgsrc, text) {
    return (
        <div className="card">
            <div className="container-img">
                <img src={imgsrc}></img>
            </div>
            <div className="container-text">
                <h3 className="text">{text}</h3>
            </div>
            
        </div>
    );
  }
  
  export default Card;