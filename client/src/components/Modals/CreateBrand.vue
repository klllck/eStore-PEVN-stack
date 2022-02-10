<template>
  <modal @click="close">
    <template #title>Добавить бренд</template>
    <template #body>
      <input
        class="border-2 border-gray-200 rounded-sm p-2 my-4"
        type="text"
        placeholder="Введите название бренда..."
        v-model="brand"
      />
      <div class="flex">
        <div class="ml-auto mr-0">
          <button
            class="
              text-red-500
              border border-red-500
              p-2
              rounded-sm
              hover:bg-red-500 hover:text-white
              mr-2
            "
            @click="close"
          >
            Закрыть
          </button>
          <button
            class="
              text-green-500
              border border-green-500
              p-2
              rounded-sm
              hover:bg-green-500 hover:text-white
            "
            @click="addBrand"
          >
            Добавить
          </button>
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
import { ref } from "vue";
import Modal from "@/components/Modals/Modal";
import { createBrand } from "../../apis/productApi";

export default {
  components: { Modal },
  setup(_, { emit }) {
    const brand = ref("");

    function close() {
      emit("close");
    }

    function addBrand() {
      createBrand({ name: brand.value });
      close();
    }

    return { close, addBrand, brand };
  },
};
</script>

<style>
</style>