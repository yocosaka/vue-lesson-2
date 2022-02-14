<template>
  <div class="home">Home</div>

  <div v-if="projects.length">
    <div v-for="project in projects" :key="project.id">
      <SingleProject :project="project" />
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';
export default {
  name: 'Home',
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log('Error: ', err.message));
  },
};
</script>
