<template>
  <h1>Add Post</h1>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />

    <label>Body:</label>
    <textarea required v-model="body"></textarea>

    <label>Tags: (hit enter to add a new tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="addTag" />
    <div v-if="tags.length">
      <span v-for="singleTag in tags" :key="singleTag" class="pill"
        >#{{ singleTag }}</span
      >
    </div>

    <button>Add Post</button>
  </form>
  <ul v-if="errors.length">
    <li v-for="error in errors" :key="error">
      {{ error }}
    </li>
  </ul>
</template>

<script>
import createPost from '../composables/createPost';

export default {
  name: 'AddPost',
  setup() {
    const { title, body, errors, tag, tags, handleSubmit, addTag } =
      createPost();

    return { title, body, errors, tag, tags, handleSubmit, addTag };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
