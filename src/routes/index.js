import Home from "../pages/User/Home";
import Contact from "../pages/User/Contact";
import About from "../pages/User/About";
import Signup from "../pages/User/Signup";
import Product from "../pages/User/Product";
import Cart from "../pages/User/Cart";
import CartPayment from "../pages/User/CartPayment";
import Signin from "../pages/User/Signin";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
  { path: "/product", component: Product },
  { path: "/cart", component: Cart },
  { path: "/cart/payment", component: CartPayment },
];
export const secretRouters = [
  { path: "/signin", component: Signin },
  { path: "/signup", component: Signup }
];
