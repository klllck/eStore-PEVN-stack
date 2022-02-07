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
          <div v-if="isLogin" class="text-center text-3xl mt-6">
            Авторизация
          </div>
          <div v-else class="text-center text-3xl mt-6">Регистрация</div>
          <form class="p-6" @submit.prevent="submit">
            <div class="my-4">
              <input
                class="border rounded-full shadow-md p-3 w-full"
                ref="emailRef"
                placeholder="Введите имя или email..."
                v-model="email"
              />
            </div>
            <div class="my-4">
              <input
                class="border rounded-full shadow-md p-3 w-full"
                type="password"
                placeholder="Введите пароль..."
                v-model="password"
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
                <!-- <span v-if="!isLoading" class="text-xl">Войти</span>
                <span v-else>⌛</span> -->
                <span v-if="isLogin" class="text-xl">Войти</span>
                <span v-else class="text-xl">Подтвердить</span>
              </button>
            </div>
            <div
              v-if="isLogin"
              @click="isLogin = false"
              class="text-center mt-3 cursor-pointer"
            >
              Нет аккаунта?
              <div class="text-blue-500">Зарегистрируйтесь!</div>
            </div>
            <div v-else></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { login, registration } from "../../apis/userApi";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const isLogin = ref(true);

    const store = useStore();
    const isLoginOpen = computed(() => {
      return store.state.login.isLoginOpen;
    });

    async function submit() {
      try {
        let data;
        if (isLogin.value) {
          data = await login(email.value, password.value);
        } else {s
          data = await registration(email.value, password.value);
        }
        store.state.user.user = data;
        store.state.user.isAuth = true;
        closeModal();
      } catch (e) {
        alert(e.response.data.message);
      }
    }

    function closeModal() {
      email.value = "";
      password.value = "";
      isLogin.value = true;
      store.commit("login/setLoginModal", false);
    }

    return { email, password, closeModal, isLoginOpen, isLogin, submit };
  },
};
</script>

<style>
</style> 