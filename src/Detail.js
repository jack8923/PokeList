import React from 'react';
import './Detail.css';

const Detail = ( {pokemon} ) => {
  const {id,name,type} = pokemon;
  return (
    <section className="detail-view">
      <div className='data-wrapper'>
        <h1 className='data-name'>ID : {id} </h1>
        <h1 className='data-name'> Name : {name} </h1>
        {/* <p className="data-char"> {type ? "type: "+{type} : "type: undefined"} </p> */}
      </div>
    </section>
  )
}

export default Detail;
