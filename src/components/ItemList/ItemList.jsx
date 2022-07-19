import React, { useState } from 'react'
import Item from '../Item/Item'


export const ItemList = ({ items }) => {


  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {

    setSearch(event.target.value)
  }

 const result = !search ? items : items.filter ((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <>
      <div>
        <input type="text"
          placeholder="Buscar"
          value={search}
          onChange={onSearchChange} />
        <div className="flex justify-around flex-wrap"  >
          
          { !search
            ?result.map((item) => (
              <Item key={item.id} {...item} />
            ))
            : <h1> No se encontro lo buscado</h1>

          }

        </div>

      </div>

    </>
  );
};
