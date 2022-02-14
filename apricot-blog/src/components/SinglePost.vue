<template>
  <h1>{{ post.title }}</h1>
  <p>{{ snippet }}</p>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  name: 'SinglePost',
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
