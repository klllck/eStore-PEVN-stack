<template>
  <div v-if="isLoginOpen">
    <section
      @click="closeModal"
      class="z-10 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div
          class="z-20 m-auto bg-white border rounded-xl"
          style="width: 600px"
        >
          <div class="text-center text-3xl mt-6">Авторизация</div>
          <form class="p-6" @submit.prevent="submit">
            <div class="my-4">
              <input
                ref="emailRef"
                v-model="email"
                class="border rounded-full shadow-md p-3 w-full"
                placeholder="Введите имя или email..."
              />
            </div>
            <div class="my-4">
              <input
                v-model="password"
                class="border rounded-full shadow-md p-3 w-full"
                type="password"
                placeholder="Введите пароль..."
              />
            </div>
            <div class="my-2">
              <button
                type="submit"
                class="
                  w-full
                  rounded-md
                  shadow-md
                  bg-gradient-to-r
                  from-green-500
                  to-green-300
                  text-white
                  hover:opacity-90
                  mt-4
                  p-3
                "
              >
                <span v-if="!isLoading" class="text-xl">Войти</span>
                <span v-else>⌛</span>
              </button>
            </div>
            <div class="text-center mt-3">
              Нет аккаунта?<a href="/" class="text-blue-500">
                Зарегистрируйтесь!</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const isLoginOpen = computed(() => {
      return store.state.login.isLoginOpen;
    });

    function closeModal() {
      store.commit("login/setLoginModal", false);
    }

    function submit() {
      store.state.user.isAuth = true;
      closeModal();
    }

    return { closeModal, isLoginOpen, submit };
  },
};
</script>

<style>
</style> 