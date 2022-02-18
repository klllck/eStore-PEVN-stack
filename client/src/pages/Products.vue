<template>
  <div class="m-auto">
    <div class="flex flex-wrap">
      <section class="w-1/6 bg-gray-100">
        <TypeList />
      </section>
      <section class="w-5/6 px-12 mt-4">
        <BrandList />
        <ProductList />
        <Pages />
      </section>
    </div>
  </div>
</template>

<script>
import TypeList from "@/components/TypeList";
import BrandList from "@/components/BrandList";
import ProductList from "@/components/ProductList";
import Pages from "@/components/UI/Pages";

export default {
  components: { TypeList, BrandList, ProductList, Pages },
};
</script>

<style>
.active {
  background: rgba(16, 185, 129);
  border-color: rgba(16, 185, 129);
  color: white;
}
</style>