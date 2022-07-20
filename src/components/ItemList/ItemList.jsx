import React, { useState } from 'react'
import Item from '../Item/Item'
import './ItemList.css'


export const ItemList = ({ items }) => {


  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {

    setSearch(event.target.value)
  }


  const result = !search
    ? items
    : items.filter((dato) =>
      dato.name.toLowerCase()
        .includes(search.toLocaleLowerCase()
        ))



  return (
    <>

      <div>
        <div className="search-container">
          <label htmlFor="search" className="search-label">¿Que desea comer?</label>
          <input type="search" className="search-input text-center"
            placeholder="Buscar"
            value={search}
            onChange={onSearchChange} />
        </div>

        <div className="flex justify-around flex-wrap"  >

          {

            result.map((item) => (
              <Item key={item.id} {...item} />
            ))

          }

        </div>

      </div>

    </>
  );
};
