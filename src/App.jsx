import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import UserContextProvider from "./UserContext/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartContextProvider from "./CartContext/CartContext";

function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Home />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "products",
          element: (
            <ProtectedRoute>
              {" "}
              <Products />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              {" "}
              <Categories />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "productdetails/:id",
          element: (
            <ProtectedRoute>
              {" "}
              <ProductDetails />{" "}
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <CartContextProvider>
            <RouterProvider router={routers}></RouterProvider>
          </CartContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
