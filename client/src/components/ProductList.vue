<template>
  <div class="flex flex-wrap justify-between mt-2">
    <router-link
      class="w-48 mt-4 cursor-pointer hover:bg-gray-100"
      v-for="product in $store.state.product.products"
      :key="product.id"
      :to="'/product/' + product.id"
    >
      <img class="w-48 h-48 border border-gray-50" :src="apiUrl + product.img" />
      <div class="flex items-center justify-between mt-1">
        <div class="text-lg text-gray-500">Type...</div>
        <div class="flex items-center">
          <div class="text-lg mr-1">{{ product.rating }}</div>
          <img class="w-4 h-4" src="../assets/icons/star.png" />
        </div>
      </div>
      <div class="text-xl">{{ product.name }}</div>
      <div>{{ product.price }}$</div>
    </router-link>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { getProducts, getProductById } from "../apis/productApi";

export default {
  setup() {
    const store = useStore();
    const apiUrl = ref(process.env.VUE_APP_API_URL);

    onMounted(() => {
      getProducts().then((data) => {
        store.commit("product/setProducts", data.rows);
      });
    });

    return { apiUrl }
  },
};
</script>

<style>
</style>