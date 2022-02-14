<template>
  <FilterNav @filter="filter = $event" :filter="filter" />
  <div v-if="projects.length">
    <div v-for="project in filteredProjects" :key="project.id">
      <SingleProject
        :project="project"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';
import FilterNav from '../components/FilterNav.vue';

export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      filter: 'all',
    };
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log('Error: ', err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    handleComplete(id) {
      let project = this.projects.find((pr) => pr.id === id);
      project.complete = !project.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.filter === 'completed') {
        return this.projects.filter((pro) => pro.complete);
      } else if (this.filter === 'ongoing') {
        return this.projects.filter((pro) => !pro.complete);
      } else {
        return this.projects;
      }
    },
  },
};
</script>
