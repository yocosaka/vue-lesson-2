import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

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
        const docRef = await addDoc(collection(db, 'posts'), post);
        // console.log('Document written with ID: ', docRef.id);
        router.push({ name: 'SinglePost', params: { id: docRef.id } });
      } catch (err) {
        // console.log(err.message);
        errors.value.push(err.message);
      }
    }
  };

  return { title, body, errors, tag, tags, handleSubmit, addTag };
};

export default createPost;
