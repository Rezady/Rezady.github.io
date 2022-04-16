<template>
  <div class="row justify-content-center">
    <div class="col-4 pagination-character">
      <nav aria-label="Page navigation example">
        <ul class="pagination w-100">
          <li class="page-item" @click="$emit('previous', 1)">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item" @click="$emit('page', 1)">
            <a class="page-link">1</a>
          </li>
          <li class="page-item" @click="$emit('page', 2)">
            <a class="page-link">2</a>
          </li>
          <li class="page-item" @click="$emit('page', 3)">
            <a class="page-link">3</a>
          </li>
          <li class="page-item" @click="$emit('next', 1)">
            <a class="page-link">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagination",
};
</script>
<style>
@import "@/assets/character/pagination.css";
</style>
