import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-800 text-gray-200 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/">Come for the books. Stay for the adventure</Link>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/products/new" className="hover:text-white">
            New Product
          </Link>
          <Link to="/signup" className="hover:text-white">
            Signup
          </Link>
          <Link to="/login" className="hover:text-white">
            Login
          </Link>
          <a href="/products" className="hover:text-white">
            All Products
          </a>
          <LogoutLink />
        </nav>
      </div>
    </header>
  );
}
