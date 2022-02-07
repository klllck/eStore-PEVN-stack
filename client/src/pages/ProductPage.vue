<template>
  <div class="container m-auto mt-4">
    <div class="flex flex-wrap justify-between">
      <img class="w-96 h-96" :src="apiUrl + product.img" />
      <div class="flex flex-col items-center">
        <div class="text-3xl mb-4">
          {{ product.name }}
        </div>
        <div
          class="
            flex
            items-center
            justify-center
            bg-cover bg-center bg-no-repeat
            w-80
            h-80
            text-7xl
          "
          style="background-image: url('/img/star.d88db0fb.png')"
        >
          {{ product.rating }}
        </div>
      </div>
      <div
        class="
          flex flex-col
          items-center
          justify-around
          border-2 border-green-500
          w-1/3
        "
      >
        <div class="text-3xl">{{ product.price }}$</div>
        <Button> Добавить в корзину </Button>
      </div>
    </div>
    <section class="flex flex-col mt-12">
      <div class="text-3xl mb-4">Характеристики</div>
      <div
        class="py-3"
        v-for="(info, index) in product"
        :key="info.id"
        :style="{
          background: index % 2 === 0 ? 'lightgray' : 'transperent',
          padding: '10px',
        }"
      >
        {{ info.title }} {{ info.description }}
      </div>
    </section>
  </div>
</template>

<script>
import Button from "@/components/UI/Button";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getProductById } from "../apis/productApi";

export default {
  components: { Button },
  setup() {
    const route = useRoute();
    const apiUrl = ref(process.env.VUE_APP_API_URL);
    const product = ref("");

    onMounted(() => {
      getProductById(route.params.id).then((data) => {
        product.value = data;
      });
    });

    return { product, apiUrl };
  },
};
</script>

<style>
</style>