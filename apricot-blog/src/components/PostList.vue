<template>
  <div class="post-list">
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </div>
    </div>
    <div v-else>
      <p>No posts</p>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
  name: 'PostList',
  props: ['posts'],
  components: { Post },
  setup(props) {
    console.log(props.posts);
  },
};
</script>

<style></style>
