import React from 'react';
import Img from '../UI/Img';

function Slogan({greetings, slogan, description}) {
    return (
      <div className='slogan'>
        <div className='imagen-slogan'>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmfPm5VB2CqcOgrUR7eoc9StNkB74kKmmFw&usqp=CAU" alt="computer" class="image"></Img>
        </div>
        <div className='text-slogan'>
            <h2>{greetings}</h2>
            <h4>{slogan}</h4>
            <p>{description}</p>
        </div>
       
      </div>
    );
  }
  
  export default Slogan;