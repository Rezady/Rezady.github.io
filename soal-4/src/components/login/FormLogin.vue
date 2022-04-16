<template>
  <!-- login form -->
  <div class="form-login">
    <div v-if="$route.name === 'login'" class="box-login p-4 bg-light">
      <!-- input username -->
      <div class="mb-3">
        <label for="input-username" class="form-label">Username</label>
        <input
          type="text"
          v-model="username"
          class="form-control"
          id="input-username"
          aria-describedby="emailHelp"
        />
        <small v-if="errorUsername" class="text-danger"
          >*username belum terisi</small
        >
        <small v-if="!canLogin" class="text-danger"
          >*username atau password terisi tidak sesuai</small
        >
      </div>
      <!-- input password -->
      <div class="mb-3">
        <label for="input-password" class="form-label">Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="input-password"
          aria-describedby="inputGroupPrepend"
          @keyup.enter="login()"
        />
        <small v-if="errorPassword" class="text-danger"
          >*password belum terisi</small
        >
      </div>
      <button type="button" @click="login()" class="btn btn-primary">
        Sign In
      </button>
    </div>
  </div>
</template>

<script>
import axios from '@/http';
export default {
  name: "FormLogin",
  data() {
    return {
      username: "",
      password: "",
      allUser: [],
      errorUsername: false,
      errorPassword: false,
      canLogin: true,
    };
  },
  methods: {
    validateInput() {
      let valid = true;
      if (!this.username) {
        this.errorUsername = true;
        valid = false;
      }
      if (!this.password) {
        this.errorPassword = true;
        valid = false;
      }
      return valid;
    },
    async login() {
      if (this.validateInput()) {
        try {
          const { data } = await axios.get("people");
          let person;
          for (person of data.results) {
            let username = person.name.split(" ")[0];
            if (username === this.username) {
              let password = person.birth_year;
              if (password === this.password) {
                this.$router.push({ name: "home" });
                localStorage["token"] = "12345";
                localStorage["username"] = username;
              } else {
                this.canLogin = false;
              }
            } else {
              this.canLogin = false;
            }
          }
        } catch (error) {
          this.allUser = [];
          this.canLogin = false;
        }
      }
    },
  },
};
</script>
<style>
@import "@/assets/login/login.css";
</style>
