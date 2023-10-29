import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {people.map((items) => {
        const { id, name, age, image } = items

        return (
          <article key={id}>
            <img src={image} alt={name} className="person img" />
            <h3 className="container button">{name}</h3>
            <p>{age}</p>
          </article>
        )
      })}
    </>
  )
}

export default List
