import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SmartHomeAutomation from "./pages/SmartHomeAutomation";
import SaaSAIServices from "./pages/SaaSAIServices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminEnquiriesRoute from "./pages/AdminEnquiriesRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "smart-home-automation", Component: SmartHomeAutomation },
      { path: "products/:productId", Component: ProductDetail },
      { path: "saas-ai-services", Component: SaaSAIServices },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
  {
    path: "/admin-login",
    Component: AdminLogin,
  },
  {
    path: "/admin/enquiries",
    Component: AdminEnquiriesRoute,
  },
]);
