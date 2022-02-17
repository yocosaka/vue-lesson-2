import { ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase/config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // Get a list of posts from your database
      const postsCol = collection(db, 'posts');
      const response = await getDocs(postsCol);
      const postList = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(postList);

      posts.value = postList;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
