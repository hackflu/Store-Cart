import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
export default function Navbar() {
  const { openCart , cartQuantity} = useShoppingCart()
  return (
    <nav className="bg-white flex justify-between p-3.5 shadow-xl sticky top-0 z-50">
      <div className="flex gap-2">
        <Link to="/" className="text-2xl font-medium cursor-pointer">
          Home
        </Link>
        <Link to="/store" className="text-2xl font-medium cursor-pointer">
          Store
        </Link>
        <Link to="/about" className="text-2xl font-medium cursor-pointer">
          About
        </Link>
      </div>
      <div>
        <button onClick={()=> openCart()}>
          <ShoppingCart
            size={45}
            className="bg-blue-500 text-white p-2 rounded-full"
          />
        </button>
          <span className="absolute bg-red-800 w-6 text-center rounded-full top-12 right-4 text-white ">
            {cartQuantity}
          </span>

      </div>
    </nav>
  );
}
