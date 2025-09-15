import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Home from "./pages/Home/home";
import ContactPage from "./pages/contact/Contact";
import AboutUs from "./pages/about/AboutUs";
import BlogPage from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/Blogdetails";
import CareerPage from "./pages/career/Career";
import ProductPage from "./pages/product/Product";
const Layout = () => {
  return (
    <>
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
        element: <CareerPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
