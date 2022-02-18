<template>
  <div class="relative" @click="isOpen = !isOpen">
    <button
      class="
        text-white
        bg-green-500
        hover:bg-green-700
        focus:ring-4 focus:ring-green-600
        font-semibold
        rounded-lg
        text-sm
        px-4
        py-2.5
        text-center
        inline-flex
        items-center
      "
    >
      {{ selectedItem !== "" ? selectedItem.name : title }}
      <svg
        class="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <div
      v-if="isOpen"
      id="dropdown"
      class="
        w-full
        text-base
        list-none
        bg-white
        rounded
        divide-y divide-gray-100
        shadow
        cursor-pointer
        absolute
        top-12
      "
    >
      <ul class="py-1">
        <li v-for="(item, i) in items" :key="i">
          <div
            class="block py-2 px-4 text-md text-gray-700 hover:bg-gray-100"
            @click="selectItem(item.name, item.id)"
          >
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["title", "items"],
  setup(_, { emit }) {
    const isOpen = ref(false);
    const selectedItem = ref("");

    function selectItem(name, id) {
      selectedItem.value = { id, name };
      emit("item", selectedItem);
    }

    return { isOpen, selectedItem, selectItem };
  },
};
</script>

<style>
</style>