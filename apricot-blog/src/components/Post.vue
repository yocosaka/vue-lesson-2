<template>
  <router-link :to="{ name: 'SinglePost', params: { id: post.id } }">
    <h1>{{ post.title }}</h1>
  </router-link>
  <p>{{ snippet }}</p>
  <span v-for="tag in post.tags" :key="tag">#{{ tag }} </span>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  name: 'Post',
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...';
    });
    return { snippet };
  },
};
</script>

<style></style>
