<template>
  <h1>Job Detail Page</h1>
  <p>Job Id is {{ id }}</p>
</template>

<script>
export default {
  name: 'JobDetails',
  props: ['id'],
  data() {
    return {
      // id: this.$route.params.id,
    };
  },
};
</script>

<style>

</style>
