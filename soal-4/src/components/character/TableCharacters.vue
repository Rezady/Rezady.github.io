<template>
  <table class="table table-striped">
    <tr class="w-100">
      <th>Name</th>
      <th>Classification</th>
      <th>Height</th>
    </tr>
    <tr class="w-100" v-if="allCharacters" v-for="data in filterCharacters">
      <td class="py-2">{{ data.name }}</td>
      <td class="py-2">{{ data.classification }}</td>
      <td class="py-2" v-if="data.average_height">{{ data.average_height }}</td>
    </tr>
    <tr v-else>
      <td colspan="3">data tidak ditemukan</td>
    </tr>
  </table>
</template>

<script>
import axios from "@/http";
export default {
  name: "TableCharacter",
  data() {
    return {
      allCharacters: [],
    };
  },
  props: ["inputFilter", "page", "search"],
  methods: {
    async fetchApi() {
      try {
        const { data } = await axios.get("species");
        this.allCharacters = data.results;
      } catch (error) {
        this.allCharacters = [];
      }
    },
  },
  computed: {
    filterCharacters() {
      if (!this.search) {
        if (!this.inputFilter) {
          return this.allCharacters;
        } else {
          return this.allCharacters.slice(
            this.inputFilter * (this.page - 1),
            this.inputFilter * this.page
          );
        }
      } else {
        return this.allCharacters.filter(
          (value) =>
            value.name.toUpperCase().includes(this.search.toUpperCase()) ||
            value.classification
              .toUpperCase()
              .includes(this.search.toUpperCase()) ||
            value.average_height
              .toUpperCase()
              .includes(this.search.toUpperCase())
        );
      }
    },
  },
  mounted() {
    this.fetchApi();
  },
};
</script>
