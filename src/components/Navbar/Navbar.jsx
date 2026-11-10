import { Link, NavLink } from 'react-router'
import './navbar.css'

const links = [
    {title: 'Users', url: '/users'},
    {title: 'Posts', url: '/posts'},
    {title: 'Todos', url: '/todos'},
]

const Navbar = () => {
  return (
    <div className="header">
        <nav className="container">
            <Link to="/" className="logo">My App</Link>
            <ul className="menu">
                {
                    links.map((elem, index)=>(
                        <li key={index}>
                            <NavLink to={elem.url} className="menu__link">
                                {elem.title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar