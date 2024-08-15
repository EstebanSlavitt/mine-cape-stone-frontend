export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Stevens liitle book shop</h2>
          <p className="text-sm">Your favorite place for books</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            Shop
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
          <a href="#" className="hover:text-white">
            About Us
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <p>&copy; 2024 Stevens book shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
