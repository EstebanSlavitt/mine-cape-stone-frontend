import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { Footer } from "./Footer";
import { LoginPage } from "./LoginPage";
import { SignupPage } from "./SignupPage";
import { ProductsNewPage } from "./ProductsNewPage";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "/", element: <ProductsIndexPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/products/new", element: <ProductsNewPage /> },
      {
        path: "/products",
        element: <ProductsIndexPage />,
        loader: () => axios.get("http://localhost:3000/products.json").then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
