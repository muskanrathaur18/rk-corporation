import React from "react";
import { createBrowserRouter,ScrollRestoration, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./pages/Home/home";
import ContactPage from "./pages/contact/Contact";
import AboutUs from "./pages/about/AboutUs";
import BlogPage from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/Blogdetails";
import Careers from "./pages/career/Career";
import ProductPage from "./pages/product/Productmain";
import ProductList from "./pages/product/Productmain";
import ProductDetail from "./pages/product/ProductDetail";
const Layout = () => {
  return (
    <>
    <ScrollRestoration/>
      <Navbar />
      <Outlet /> {/* This is where child routes will render */}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
      {
        path: "/career",
        element: <Careers />,
      },
      { path: "/productmain", element: <ProductList /> },

      { path: "/product/:id", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
