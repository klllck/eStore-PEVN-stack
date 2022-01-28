<template>
  <div class="m-auto">
    <div class="flex flex-wrap">
      <section class="w-1/4 bg-gray-100">
        <TypeList />
      </section>
      <section class="w-3/4 px-12 mt-4">
        <BrandList />
        <ProductList />
      </section>
    </div>
  </div>
</template>

<script>
import TypeList from "@/components/TypeList";
import BrandList from "@/components/BrandList";
import ProductList from "@/components/ProductList";

export default {
  components: { TypeList, BrandList, ProductList },
};
</script>

<style>
.active {
  background: rgba(16, 185, 129);
  color: white;
}
</style>