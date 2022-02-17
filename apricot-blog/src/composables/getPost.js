import { ref } from 'vue';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const getPost = (id) => {
  const post = ref({});
  const error = ref(null);

  const load = async () => {
    try {
      // Get a single post based on ID from firebase
      const postCol = doc(db, 'posts', id);
      const response = await getDoc(postCol);
      post.value = {
        id: response.id,
        ...response.data(),
      };

      if (!response.exists()) {
        throw Error('Sorry...The post with the id does not exist.');
      }
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
