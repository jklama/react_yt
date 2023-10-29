import React from 'react'

const Menu = ({ menus }) => {
  return (
    <>
      {menus.map((items) => {
        const { id, title, img, desc, price } = items
        return (
          <>
            <article key={id}>
              <img src={img} alt={title} className="photo" />
              <h2>{title}</h2>
              <p>{desc}</p>
              <p>{price}</p>
            </article>
          </>
        )
      })}
    </>
  )
}

export default Menu
