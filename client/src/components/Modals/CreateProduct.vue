<template>
  <modal @click="close">
    <template #title>Добавить товар</template>
    <template #body>
      <hr class="mt-4" />
      <section class="flex flex-row justify-evenly mt-4">
        <Dropdown
          title="Тип товара"
          :items="$store.state.product.types"
          @item="selectType"
        />
        <Dropdown
          title="Бренд товара"
          :items="$store.state.product.brands"
          @item="selectBrand"
        />
      </section>
      <section class="flex flex-col w-full">
        <input
          class="border-2 border-gray-200 rounded-sm p-2 mt-4"
          type="text"
          placeholder="Введите название товара..."
          v-model="name"
        />
        <input
          class="border-2 border-gray-200 rounded-sm p-2 mt-4"
          type="number"
          placeholder="Введите стоимость товара..."
          v-model="price"
        />
        <input
          class="border-0 border-gray-200 rounded-sm my-4"
          type="file"
          @change="selectFile"
        />
      </section>
      <hr />
      <section>
        <button
          @click="addInfo"
          class="
            p-2
            my-2
            rounded-sm
            border border-gray-500
            hover:bg-gray-500 hover:text-white
          "
        >
          Добавить новое свойство
        </button>
        <div
          class="flex flex-wrap justify-between mb-4"
          v-for="(item, index) in info"
          :key="index"
        >
          <input
            class="p-2 border"
            type="text"
            placeholder="Введите название свойства..."
            v-model="item.title"
          />
          <input
            class="p-2 border"
            type="text"
            placeholder="Введите описание свойства..."
            v-model="item.description"
          />
          <button
            class="
              p-2
              my-2
              rounded-sm
              border border-gray-500
              hover:bg-gray-500 hover:text-white
            "
            @click="removeInfo(index)"
          >
            Удалить
          </button>
        </div>
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
            @click="addProduct"
          >
            Добавить
          </button>
        </div>
      </section>
    </template>
  </modal>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Modal from "@/components/Modals/Modal";
import Dropdown from "@/components/UI/Dropdown";
import {
  getBrands,
  getTypes,
  getProducts,
  createProduct,
} from "../../apis/productApi";

export default {
  components: { Modal, Dropdown },
  setup(_, { emit }) {
    const store = useStore();
    const name = ref("");
    const price = ref(0);
    const file = ref("");
    const type = ref("");
    const brand = ref("");
    const info = ref([{ title: "", description: "" }]);

    function addInfo() {
      info.value.push({ title: "", description: "" });
    }

    function removeInfo(index) {
      info.value.splice(index, 1);
    }

    function addProduct() {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("price", `${price.value}`);
      formData.append("img", file.value);
      formData.append('info', JSON.stringify(info.value))
      // formData.append("typeId", store.getters.getSelectedType.id);
      // formData.append("brandId", store.getters.getSelectedBrand.id);
      console.log(store.state.product.selectedBrand);
      //console.log(formData);
    }

    function selectFile(e) {
      file.value = e.target.files[0];
      console.log(file.value);
    }

    function selectType(e) {
      type.value = e.value;
      store.commit('product/setSelectedType', type.value)
    }

    function selectBrand(e) {
      brand.value = e.value;
      store.commit('product/setSelectedBrand', brand.value)
    }

    function close() {
      emit("close");
    }

    onMounted(() => {
      getBrands().then((data) => store.commit("product/setBrands", data));
      getTypes().then((data) => store.commit("product/setTypes", data));
      getProducts().then((data) =>
        store.commit("product/setProducts", data.rows)
      );
    });

    return {
      close,
      name,
      price,
      file,
      type,
      brand,
      info,
      addInfo,
      removeInfo,
      selectFile,
      selectType,
      selectBrand,
      addProduct,
    };
  },
};
</script>

<style>
</style>