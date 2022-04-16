<script setup>
defineEmits(["inputFilter", "update:inputSearch"]);
</script>
<template>
  <div class="column-filter row justify-content-end mb-3">
    <div class="col-4">
      <input
        class="form-control"
        type="search"
				:value="inputSearch"
        @input="$emit('inputSearch', $event.target.value)"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
    <div class="col-4">
      <select
        class="form-select w-100"
        aria-label="Default select example"
        :value="inputFilter"
        @input="$emit('inputFilter', $event.target.value)"
      >
        <option value="">All</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="8">8</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterAndSearch",
  data() {
    return {
      inputFilter: "",
			inputSearch: "",
    };
  },
};
</script>
<style>
@import "@/assets/character/filter-and-search.css";
</style>
