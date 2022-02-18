<template>
  <div>{{ fetchProducts }}</div>
  <ul class="inline-flex mt-5">
    <li>
      <a
        @click="changePage(product.page - 1)"
        class="
          block
          p-3
          px-3
          ml-0
          leading-tight
          text-gray-500
          bg-white
          rounded-l-lg
          border border-gray-300
          hover:bg-gray-100 hover:text-green-500
        "
      >
        <span class="sr-only">Prev</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </li>
    <li
      v-for="(page, i) in pages"
      :key="i"
      class="
        p-3
        px-4
        leading-tight
        text-gray-500
        bg-white
        border border-gray-300
        hover:bg-gray-100 hover:text-green-500
        cursor-pointer
      "
      :class="{
        active: product.page === page,
      }"
      @click="changePage(page)"
    >
      {{ page }}
    </li>
    <li>
      <a
        @click="changePage(product.page + 1)"
        class="
          block
          p-3
          px-3
          leading-tight
          text-gray-500
          bg-white
          rounded-r-lg
          border border-gray-300
          hover:bg-gray-100 hover:text-green-500
        "
      >
        <span class="sr-only">Next</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { getBrands, getTypes, getProducts } from "../../apis/productApi";

export default {
  setup() {
    const pages = ref([]);
    const store = useStore();
    const product = store.state.product;
    const pageCount = ref(0);

    const fetchProducts = computed(() => {
      getBrands().then((data) => store.commit("product/setBrands", data));
      getTypes().then((data) => store.commit("product/setTypes", data));
      getProducts(
        product.selectedType.id,
        product.selectedBrand.id,
        product.page,
        product.limit
      ).then((data) => {
        store.commit("product/setProducts", data.rows),
          store.commit("product/setTotalCount", data.count);
      });

      pageCount.value = Math.ceil(product.totalCount / product.limit);
      pages.value = [];
      for (let i = 0; i < pageCount.value; i++) {
        pages.value.push(i + 1);
      }
    });

    function changePage(page) {
      if (page < 1) page = 1;
      else if (page > pageCount.value) page = pageCount.value;
      product.page = page;

      getProducts(null, null, product.page, product.limit).then((data) => {
        store.commit("product/setProducts", data.rows),
          store.commit("product/setTotalCount", data.count);
      });
    }

    return { pages, product, changePage, fetchProducts };
  },
};
</script>

<style>
</style>