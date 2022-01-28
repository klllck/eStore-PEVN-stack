export const loginStore = {
  state: () => ({
    isLoginOpen: false
  }),
  getters: {
    isLoginOpen(state) {
      return state.isLoginOpen;
    },
  },
  mutations: {
    setLoginModal(state, boolValue) {
      state.isLoginOpen = boolValue;
    },
  },
  actions: {},
  namespaced: true,
};
