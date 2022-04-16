<template>
  <CardFilm :page="page"/>
  <Pagination
    @page="(value) => (page = value)"
    @previous="(value) => (page <= 1 ? 1 : (page -= value))"
    @next="(value) => (page >= 3 ? 3 : (page += value))"
  />
</template>

<script>
import CardFilm from "../components/films/CardFilm.vue";
import Pagination from "@/components/character/Pagination.vue";
export default {
  name: "HomeView",
  data() {
    return {
      page: 1,
    }
  },
  components: {
    CardFilm,
    Pagination
  },
};
</script>
