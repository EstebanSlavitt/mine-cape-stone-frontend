import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-800 text-gray-200 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link to="/">Elevate your practice</Link>
        </div>
        <nav className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/products/new" className="hover:text-white">
            New Product
          </Link>
          <Link to="/products" className="hover:text-white">
            All Products
          </Link>
          {localStorage.jwt === undefined ? (
            <>
              <Link to="/signup" className="hover:text-white">
                Signup
              </Link>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
            </>
          ) : (
            <LogoutLink />
          )}
          <form className="flex items-center ml-4" role="search">
            <input
              className="form-input bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 rounded"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn bg-green-500 text-white ml-2 px-3 py-1 rounded" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
