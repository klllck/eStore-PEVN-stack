export const userStore = {
  state: () => ({
    isAuth: false,
    user: {},
  }),
  getters: {
    isAuth(state) {
      return state.isAuth;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    setIsAuth(state, boolValue) {
      state.isAuth = boolValue;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  namespaced: true,
};
