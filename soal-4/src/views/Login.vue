<template>
  <div class="body-login bg-light">
    <div class="grid-login">
      <TitleLogin />
      <FormLogin />
    </div>
  </div>
</template>
<script>
import TitleLogin from "../components/login/TitleLogin.vue";
import FormLogin from "../components/login/FormLogin.vue";
export default {
  name: "Login",
  components: {
    TitleLogin,
    FormLogin,
  },
};
</script>
<style>
@import "@/assets/login/login.css";
</style>
