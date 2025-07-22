import { Link } from "react-router-dom";
function Navbar() {
    return ( 
        <nav>
            <div>
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
                <Link to="/about">About</Link>
            </div>
            <div></div>
        </nav>
     );
}

export default Navbar;