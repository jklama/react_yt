import React from 'react'

const Categories = ({ Category, filterItems }) => {
  return (
    <>
      {Category.map((categories, index) => {
        return (
          <article key={index}>
            <button onClick={() => filterItems(categories)}>
              {categories}
            </button>
          </article>
        )
      })}
    </>
  )
}

export default Categories
