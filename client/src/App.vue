<template>
  <Navbar />
  <div>
    <router-view />
  </div>
  <teleport to="body">
    <Auth />
  </teleport>
</template>

<script>
import Navbar from "@/components/UI/Navbar";
import Auth from "@/components/Modals/Auth";

export default {
  components: {
    Navbar,
    Auth,
  },
};
</script>

<style>
</style>
