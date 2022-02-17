<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDeletePost">Delete post</button>
    <span v-for="tag in post.tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }"
        >#{{ tag }}
      </router-link>
    </span>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import { doc, deleteDoc } from 'firebase/firestore';
import { useRoute, useRouter } from 'vue-router';
import { db } from '../firebase/config';
import getPost from '../composables/getPost';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'SinglePost',
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    // console.log(route);
    // const { post, error, load } = getPost(props.id);
    const { post, error, load } = getPost(route.params.id);
    load();

    const handleDeletePost = async () => {
      try {
        await deleteDoc(doc(db, 'posts', route.params.id));
        router.push({ name: 'Home' });
      } catch (err) {
        error.value = err.message;
      }
    };

    return {
      post,
      error,
      handleDeletePost,
    };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}

button {
  background: grey;
}
</style>
