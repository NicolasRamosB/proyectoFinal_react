
export default function CartWidget ({handleClick, children}) {
    
    return (
      <>
      <li onClick={handleClick}>
          {children}
        </li>
        </>
    )
  
  }
  