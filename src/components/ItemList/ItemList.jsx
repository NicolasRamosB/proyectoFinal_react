import React from 'react'
import Item from '../Item/Item'


export const ItemList = ({items}) => {
  return (
    <>
    <div className="d-flex flex-row "  >
        {
            items.map((item) =>( 
            <Item key={item.id} {...item}/>
            ) )
            
        };
        
    </div>
    </>
  );
};
