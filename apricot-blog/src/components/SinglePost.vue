<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
</template>

<script>
export default {
  name: 'SinglePost',
  props: ['post'],
};
</script>

<style></style>
