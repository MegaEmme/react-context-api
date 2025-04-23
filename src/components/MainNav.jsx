import { NavLink } from "react-router-dom";

const MainNav = () => <nav>
    <ul>
        <li><NavLink to='/'>Home Page</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/posts'>Posts</NavLink></li>
    </ul>
</nav>

export default MainNav;