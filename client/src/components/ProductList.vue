<template>
  <div class="flex flex-wrap justify-between mt-2">
    <a
      class="w-48 mt-4 cursor-pointer hover:bg-gray-100"
      v-for="product in $store.state.product.products"
      :key="product.id"
      :href="'/product/' + product.id"
    >
      <img class="w-48 h-48 border border-gray-50" :src="product.img" />
      <div class="flex items-center justify-between mt-1">
        <div class="text-lg text-gray-500">Type...</div>
        <div class="flex items-center">
          <div class="text-lg mr-1">{{ product.rating }}</div>
          <img class="w-4 h-4" src="../assets/icons/star.png" />
        </div>
      </div>
      <div class="text-xl">{{ product.name }}</div>
      <div>{{ product.price }}$</div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>