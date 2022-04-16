<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand text-primary" href="#">SwaBio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :class="`nav-link ${$route.name === 'home' ? 'active' : ''}`"
              aria-current="page"
              to="/"
              >Films</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :class="`nav-link ${$route.name === 'character' ? 'active' : ''}`"
              aria-current="page"
              to="/character"
              >Character</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0 px-3 float-right">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-display="static"
            >
              {{ username }}
            </a>
            <ul class="logout dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" @click="logout()">Logout</a></li>
            </ul>
          </li>
        </ul>
        <span class="navbar-text"> </span>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
  },
  mounted() {
    this.username = localStorage["username"];
  },
};
</script>
<style>
@import "@/assets/navbar.css";
</style>
