import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ProductPage } from "../pages/ProductPage";
import { MyCartPage } from "../pages/MyCartPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact_us",
        element: <ContactPage />,
      },
      {
        path: "/product-page/:productSlug",
        element: <ProductPage />,
      },
      {
        path: "/my-cart",
        element: <MyCartPage />,
      },
    ],
  },
]);

export default router;
