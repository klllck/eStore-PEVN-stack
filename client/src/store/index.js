import { createStore } from "vuex";
import { userStore } from "./userStore";
import { productStore } from "./productStore";
import { loginStore } from "./loginStore";

export default createStore({
  modules: {
    user: userStore,
    product: productStore,
    login: loginStore
  },
});
