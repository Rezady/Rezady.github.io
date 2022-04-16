<template>
  <div class="title-login">
    <div v-if="$route.name === 'login'" class="box-title">
      <p class="title-swabio text-primary">SwaBio</p>
      <p class="title-description text-muted">
        Collect all components in star wars movies and remind you all the star
        wars memories
      </p>
    </div>
		<div v-else>
			<p class="title-description text-muted">
        Page Not Found || Error 404
      </p>
		</div>
  </div>
</template>
<script>
export default {
  name: "TitleLogin",
};
</script>
<style>
@import "@/assets/login/login.css";
</style>
