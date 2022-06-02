

export default function NavLink({handleClick, title}) {
    
  return (
    <li onClick={handleClick}>{title}</li>
  )

}
