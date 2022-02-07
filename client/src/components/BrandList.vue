<template>
  <div class="flex flex-wrap text-lg">
    <div
      class="
        cursor-pointer
        mx-2
        my-2
        px-4
        border
        rounded-full
        hover:bg-gray-100 hover:text-green-500
      "
      v-for="brand in $store.state.product.brands"
      :key="brand.id"
      @click="$store.commit('product/setSelectedBrand', brand)"
      :class="{
        active: brand.id === $store.state.product.selectedBrand.id,
      }"
    >
      {{ brand.name }}
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { getBrands } from "../apis/productApi";

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      getBrands().then((data) => store.commit("product/setBrands", data));
    });
  },
};
</script>

<style>
</style>