<template>
  <nav class="bg-gradient-to-tr from-green-500 to-green-300">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="
            flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <router-link class="flex-shrink-0 flex items-center mr-6" to="/">
            <img
              class="block h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            />
          </router-link>
          <div class="flex space-x">
            <router-link
              v-for="item in links"
              :key="item.url"
              :to="item.url"
              class="
                hover:bg-green-600 hover:text-white
                px-3
                py-2
                rounded-full
                text-lg
              "
            >
              {{ item.title }}
            </router-link>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <router-link
            v-if="isAuth"
            :to="'/admin'"
            class="
              bg-white
              hover:bg-green-600 hover:text-white
              px-3
              py-2
              rounded-lg
              text-lg
              mx-4
            "
          >
            Админка
          </router-link>
          <button
            v-if="isAuth"
            @click="logout"
            class="
              bg-white
              hover:bg-green-600 hover:text-white
              px-3
              py-2
              rounded-full
              text-lg
            "
          >
            Выйти
          </button>
          <button
            v-else
            @click="openLogin"
            class="
              bg-white
              hover:bg-green-600 hover:text-white
              px-3
              py-2
              rounded-full
              text-lg
            "
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const links = ref([
      { title: "Товары", url: "/products" },
      { title: "Услуги", url: "/" },
      { title: "О нас", url: "/" },
    ]);
    const isAuth = computed(() => {
      return store.state.user.isAuth;
    });

    function logout() {
      store.state.user.user = {};
      store.state.user.isAuth = false;
    }

    function openLogin() {
      store.commit("login/setLoginModal", true);
    }

    return { links, isAuth, openLogin, logout };
  },
};
</script>

<style>
</style>