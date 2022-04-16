<template>
  <FilterAndSearch
    @inputFilter="(value) => (filter = value)"
    @inputSearch="(value) => (search = value)"
  />
  <TableCharacters :inputFilter="filter" :page="page" :search="search" />
  <Pagination
    @page="(value) => (page = value)"
    @previous="(value) => (page <= 1 ? 1 : (page -= value))"
    @next="(value) => (page >= 3 ? 3 : (page += value))"
  />
</template>
<script>
import TableCharacters from "@/components/character/TableCharacters.vue";
import Pagination from "../components/character/Pagination.vue";
import FilterAndSearch from "../components/character/FilterAndSearch.vue";

export default {
  name: "Character",
  components: {
    TableCharacters,
    Pagination,
    FilterAndSearch,
  },
  data() {
    return {
      filter: "",
      page: 1,
      search: "",
    };
  },
};
</script>
