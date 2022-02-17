import { ref } from 'vue';
// to use redirection instead of this.$router
import { useRouter } from 'vue-router';

const createPost = () => {
  const title = ref('');
  const body = ref('');
  const tag = ref('');
  const tags = ref([]);
  const errors = ref([]);
  // create router
  const router = useRouter();

  const addTag = () => {
    errors.value = [];
    let tagValue = tag.value.replace(/\s/, '');
    let lengthMatch = tagValue.length > 2;
    let regexMatch = tagValue.match(/^[a-z\d]{3,20}$/);

    if (!lengthMatch || !regexMatch) {
      errors.value.push(
        'Tag must be more than 3 characters long and must contain only 0 - 9, a to z',
      );
    } else if (tags.value.includes(tagValue)) {
      errors.value.push(`'${tagValue}' was already added.`);
      tag.value = '';
    } else {
      tags.value.push(tagValue);
      tag.value = '';
    }
  };

  const handleSubmit = async () => {
    errors.value = [];
    // validations
    if (title.value.length < 3) {
      errors.value.push('Title must be more than 4 characters long');
    }
    if (body.value.length < 5) {
      errors.value.push('Body must be more than 6 characters long');
    }

    if (tags.value.length < 1) {
      errors.value.push('At least one tag must be added');
    }

    if (!errors.value.length) {
      // create a new post
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      try {
        const data = await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post),
        });

        if (!data.ok) {
          throw Error('unable to create a new post');
        }
        // console.log('Success', data);

        // You cannot use this.$router.push('/') with setup() function in composition api
        // Instead, you can use useRouter after importing it from vue-router to redirect
        // router.push('/');
        router.push({ name: 'Home' });
      } catch (err) {
        console.log(err.message);
        errors.value.push(err.message);
      }
    }
  };

  return { title, body, errors, tag, tags, handleSubmit, addTag };
};

export default createPost;
