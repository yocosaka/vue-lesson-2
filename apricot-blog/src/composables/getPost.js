import { ref } from 'vue';

const getPost = (id) => {
  const post = ref({});
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch('http://localhost:3000/posts/' + id);
      if (!data.ok) {
        throw Error('unable to fetch post data');
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
