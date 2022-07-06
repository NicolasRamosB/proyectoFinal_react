import React from 'react'
import Item from '../Item/Item'


export const ItemList = ({items}) => {
  return (
    <>
    <div className="flex justify-around flex-wrap"  >
        {
            items.map((item) =>( 
            <Item key={item.id} {...item}/>
            ) )
            
        }
        
    </div>
    </>
  );
};
