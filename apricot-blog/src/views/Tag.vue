<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <h1>{{ route.params.tag }}</h1>
    <div v-if="postsWithTag.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
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
import TagCloud from '../components/TagCloud.vue';

export default {
  name: 'Tag',
  components: { PostList, Spinner, TagCloud },
  setup() {
    const route = useRoute();

    const { posts, error, load } = getPosts();
    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { error, posts, postsWithTag, route };
  },
};
</script>

<style></style>
