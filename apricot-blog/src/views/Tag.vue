<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <h1>#{{ tag }}</h1>
    <div v-if="postsWithTag.length">
      <PostList :posts="postsWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import getPosts from '../composables/getPosts';
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'Tag',
  components: { PostList, Spinner },
  setup() {
    const route = useRoute();
    const tag = route.params.tag;

    const { posts, error, load } = getPosts();
    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tag));
    });

    return { tag, error, postsWithTag };
  },
};
</script>

<style></style>
