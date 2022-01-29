<template>
  <div class="container m-auto">
    <div class="flex flex-col">
      <Button class="my-4 py-4" @click="isTypeModalVisible = true">
        Добавить тип
      </Button>
      <CreateType v-if="isTypeModalVisible" @close="closeModal" />

      <Button class="my-4 py-4" @click="isBrandModalVisible = true">
        Добавить бренд
      </Button>
      <CreateBrand v-if="isBrandModalVisible" @close="closeModal" />

      <Button class="my-4 py-4" @click="isProductModalVisible = true">
        Добавить товар
      </Button>
      <CreateProduct v-if="isProductModalVisible" @close="closeModal" />
    </div>
  </div>
</template>

<script>
import CreateType from "@/components/Modals/CreateType";
import CreateBrand from "@/components/Modals/CreateBrand";
import CreateProduct from "@/components/Modals/CreateProduct";
import Button from "@/components/UI/Button";
import { ref } from "vue";

export default {
  components: { Button, CreateType, CreateBrand, CreateProduct },
  setup() {
    const isTypeModalVisible = ref(false);
    const isBrandModalVisible = ref(false);
    const isProductModalVisible = ref(false);

    function closeModal() {
      isTypeModalVisible.value = false;
      isBrandModalVisible.value = false;
      isProductModalVisible.value = false;
    }

    return {
      isTypeModalVisible,
      isBrandModalVisible,
      isProductModalVisible,
      closeModal,
    };
  },
};
</script>

<style>
</style>