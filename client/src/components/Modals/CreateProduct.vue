<template>
  <modal @click="close">
    <template #title>Добавить товар</template>
    <template #body>
      <hr class="mt-4"/>
      <section class="flex flex-row justify-evenly mt-4">
        <Dropdown title="Тип товара" :items="$store.state.product.types" />
        <Dropdown title="Бренд товара" :items="$store.state.product.brands" />
      </section>
      <section class="flex flex-col w-full">
        <input
          class="border-2 border-gray-200 rounded-sm p-2 mt-4"
          type="text"
          placeholder="Введите название товара..."
        />
        <input
          class="border-2 border-gray-200 rounded-sm p-2 mt-4"
          type="number"
          placeholder="Введите стоимость товара..."
        />
        <input
          class="border-0 border-gray-200 rounded-sm my-4"
          type="file"
          placeholder="Введите название типа..."
        />
      </section>
      <hr />
      <section class="flex mt-4">
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
          >
            Добавить
          </button>
        </div>
      </section>
    </template>
  </modal>
</template>

<script>
import Modal from "@/components/Modals/Modal";
import Dropdown from "@/components/UI/Dropdown";

export default {
  components: { Modal, Dropdown },
  setup(_, { emit }) {
    function close() {
      emit("close");
    }

    return { close };
  },
};
</script>

<style>
</style>