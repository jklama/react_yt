import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)
function App() {
  const [menus, setMenus] = useState(items)
  const [category, setCategory] = useState(allCategories)

  const filterItems = (categories) => {
    if (categories == 'all') {
      setMenus(items)
      return
    }
    const newItems = items.filter((item) => item.category === categories)
    setMenus(newItems)
  }
  return (
    <>
      <section>
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
          <Categories Category={category} filterItems={filterItems} />
          <Menu menus={menus} />
        </div>
      </section>
    </>
  )
}

export default App
