import ItemCount from "../ItemCount/ItemCount"


export default function ItemListContainer({title, description}) {

    const styleItemListContainer = {
        backgroundColor: 'red',
        fontSize: '40px',   
    }
  return (<>

    <h1 className="titleItem" style={styleItemListContainer}>{title}</h1>
    <p className="descriptionItem" style={styleItemListContainer}>{description}</p>
    <ItemCount stock={10} initial={1} />
    </>
  )
}
