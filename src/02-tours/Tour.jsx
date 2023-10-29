import React, { useState } from 'react';

const Tour = ({id,name,price,image,info,removeTours}) => {
  const [readmore, setReadmore] = useState(false)
  return (
    <>
    <article className="single-tour">
     
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{info}</p>
      <button onClick={() => removeTours(id)}>Button to delete</button>
    </article>
    </>
  )
};

export default Tour;
