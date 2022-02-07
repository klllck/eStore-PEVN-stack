export const productStore = {
  state: () => ({
    types: [],
    brands: [],
    products: [],
    selectedType: {},
    selectedBrand: {},
  }),
  getters: {
    getTypes(state) {
      return state.types;
    },
    getSelectedType(state) {
      return state.selectedType;
    },
    getBrands(state) {
      return state.brands;
    },
    getSelectedBrand(state) {
      return state.selectedBrand;
    },
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    setTypes(state, types) {
      state.types = types;
    },
    setSelectedType(state, type) {
      state.selectedType = type;
    },
    setBrands(state, brands) {
      state.brands = brands;
    },
    setSelectedBrand(state, brand) {
      state.selectedBrand = brand;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {},
  namespaced: true,
};
