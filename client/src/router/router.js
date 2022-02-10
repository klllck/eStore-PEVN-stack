import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/components/Modals/Auth";
import Products from "@/pages/Products";
import ProductPage from "@/pages/ProductPage";
import Admin from "@/pages/Admin";
import ShoppingCart from "@/pages/ShoppingCart";

const routes = [
  {
    path: "/",
    component: Products,
  },
  {
    path: "/auth",
    component: Auth,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/product/:id",
    component: ProductPage,
  },
  {
    path: "/shopping-cart",
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
