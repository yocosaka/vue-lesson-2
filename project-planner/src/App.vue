<template>
  <NavBar />
  <FilterNav />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';
import FilterNav from './components/FilterNav.vue';
export default {
  components: { NavBar, FilterNav },
};
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
