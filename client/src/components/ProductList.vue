<template>
  <div class="flex flex-wrap justify-around mt-2">
    <router-link
      class="w-48 mt-4 cursor-pointer hover:bg-gray-100"
      v-for="product in $store.state.product.products"
      :key="product.id"
      :to="'/product/' + product.id"
    >
      <img
        class="w-48 h-48 border border-gray-100 border-b-0"
        :src="apiUrl + product.img"
      />
      <div class="flex items-center justify-between mt-1">
        <div>
          <!-- <div class="text-md text-gray-500">
            {{ getType(product.typeId) }}
          </div> -->
          <!-- <div class="text-md text-gray-500">
            {{ getBrand(product.brandId) }}
          </div> -->
        </div>
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
import { ref } from "vue";
import { getTypeById, getBrandById } from "../apis/productApi";

export default {
  setup() {
    const apiUrl = ref(process.env.VUE_APP_API_URL);
    const brand = ref("");
    const type = ref("");

    function getBrand(brandId) {
      getBrandById(brandId).then((data) => {
        brand.value = data.name;
      });
      console.log(brand.value);
      return brand.value;
    }

    function getType(typeId) {
      getTypeById(typeId).then((data) => {
        type.value = data.name;
      });

      return type.value;
    }

    return { apiUrl, getBrand, getType };
  },
};
</script>

<style>
</style>