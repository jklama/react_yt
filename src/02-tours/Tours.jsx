import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTours }) => {
  return (
    <>
      <h1>Our Tour</h1>
      <hr />
      {tours.map((tour) =>{
        return <Tour key={tour.id} {...tour} removeTours= {removeTours} />
      })}
    </>
  )
}

export default Tours
