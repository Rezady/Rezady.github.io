<template>
  <div class="flex-card mb-4">
    <div
      v-if="bioFilm"
      v-for="(data, index) in bioFilmPerPage"
      :id="`${index}-bio-film`"
      class="card"
      :key="index"
      style="width: 18rem"
    >
      <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          release: {{ data.release_date }}
        </h6>
        <p class="card-text">{{ data.opening_crawl }}</p>
      </div>
    </div>
    <div v-else>
      <h4>data tidak ditemukan</h4>
    </div>
  </div>
  <!-- <Pagination
    @page="(value) => (page = value)"
    @previous="(value) => (page <= 1 ? 1 : (page -= value))"
    @next="(value) => (page >= bioFilm.length / 2 ? bioFilm.length / 2 : (page += value))"
  /> -->
</template>

<script>
import axios from "@/http";
// import Pagination from "../character/Pagination.vue";
export default {
  name: "CardFilm",
  data() {
    return {
      bioFilm: [],
    };
  },
  props: ['page'],
  methods: {
    async fetchApiFilms() {
      try {
        const { data } = await axios.get("films");
        this.bioFilm = data.results;
      } catch (err) {
        this.bioFilm = [];
      }
    },
  },
  computed: {
    bioFilmPerPage() {
      return this.bioFilm.slice(2 * (this.page - 1), 2 * this.page);
    },
  },
  mounted() {
    this.fetchApiFilms();
  },
};
</script>
<style>
@import "@/assets/film/card-film";
</style>
