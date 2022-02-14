<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: 'Welcome to my blog',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        id: 1,
      },
      {
        title: 'My Second Title',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        id: 2,
      },
    ]);
    return { posts };
  },
};
</script>
