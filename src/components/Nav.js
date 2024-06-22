import { Link, NavLink } from "react-router-dom";

export function Nav() {
   return (
      <nav>
         <h1>Nav</h1>
         <ul className="main-menu">
            <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/articles" className={({isActive}) => isActive ? "active" : ""}>Articles</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
            <li><Link to="https://github.com/dmytrokorobko/Blog-Platform" target="_blank">GitHub</Link></li>
         </ul>
      </nav>
      
   )
}