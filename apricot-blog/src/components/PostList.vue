<template>
  <div class="post-list">
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
      </div>
    </div>
    <div v-else>
      <p>No posts</p>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import SinglePost from '../components/SinglePost.vue';
export default {
  name: 'PostList',
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    console.log(props.posts);

    onMounted(() => {
      console.log('component mounted');
    });
    onUnmounted(() => {
      console.log('component unmounted');
    });
    onUpdated(() => {
      console.log('component updated');
    });
  },
};
</script>

<style></style>
