export const productStore = {
  state: () => ({
    types: [],
    brands: [],
    products: [],
    selectedType: {},
    selectedBrand: {},
    page: 1,
    totalCount: 0,
    limit: 3,
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
    getPage(state) {
      return state.page;
    },
    getTotalCount(state) {
      return state.totalCount;
    },
    getLimit(state) {
      return state.limit;
    },
  },
  mutations: {
    setTypes(state, types) {
      state.types = types;
    },
    setBrands(state, brands) {
      state.brands = brands;
    },
    setSelectedType(state, type) {
      state.selectedType = type;
    },
    setSelectedBrand(state, brand) {
      state.selectedBrand = brand;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalCount(state, count) {
      state.totalCount = count;
    },
  },
  actions: {
    selectType({ commit }, type) {
      commit("setSelectedType", type);
      commit("setPage", 1);
    },
    selectBrand({ commit }, brand) {
      commit("setSelectedType", brand);
      commit("setPage", 1);
    },
  },
  namespaced: true,
};
