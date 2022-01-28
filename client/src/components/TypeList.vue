<template>
  <div class="list-none text-2xl">
    <li
      class="
        cursor-pointer
        py-4
        px-4
        w-full
        border-b-2
        hover:bg-gray-200 hover:text-green-500
      "
      v-for="type in $store.state.product.types"
      :key="type.id"
      @click="$store.commit('product/setSelectedType', type)"
      :class="{
        active: type.id === $store.state.product.selectedType.id,
      }"
    >
      {{ type.name }}
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>