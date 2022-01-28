export const productStore = {
  state: () => ({
    types: [
      { id: 1, name: "Компуктеры" },
      { id: 2, name: "Ноутбуки" },
      { id: 3, name: "Смартфоны" },
      { id: 4, name: "Планшеты" },
    ],
    brands: [
      { id: 1, name: "LG" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Samsung" },
    ],
    products: [
      {
        id: 0,
        name: "Samsung Galaxy A21",
        price: 299,
        rating: 3.2,
        img: "./server/static/a69a409f-e732-40aa-a111-eb8a15b54ef2.jpg",
      },
      {
        id: 1,
        name: "iPhone 13",
        price: 1999,
        rating: 2.5,
        img: "./server/static/a69a409f-e732-40aa-a111-eb8a15b54ef2.jpg",
      },
      {
        id: 2,
        name: "POCO x3 Pro",
        price: 359,
        rating: 4.7,
        img: "./server/static/a69a409f-e732-40aa-a111-eb8a15b54ef2.jpg",
      },
      {
        id: 3,
        name: "Samsung Galaxy S21",
        price: 1299,
        rating: 3.8,
        img: "./server/static/a69a409f-e732-40aa-a111-eb8a15b54ef2.jpg",
      },
      {
        id: 4,
        name: "Asus ROG Ultra",
        price: 2999,
        rating: 5,
        img: "./server/static/a69a409f-e732-40aa-a111-eb8a15b54ef2.jpg",
      },
      {
        id: 5,
        name: "Lenovo Yoga",
        price: 899,
        rating: 1.3,
        img: "./server/static/a69a409f-e732-40aa-a111-eb8a15b54ef2.jpg",
      },
    ],
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
