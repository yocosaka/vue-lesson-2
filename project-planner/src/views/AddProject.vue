<template>
  <div v-if="errors.length">
    <ul>
      <li v-for="error in errors" :key="error">
        {{ error }}
      </li>
    </ul>
  </div>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" required v-model="title" />
    <label>Details:</label>
    <textarea required v-model="details"></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  name: 'AddProject',
  data() {
    return {
      title: '',
      details: '',
      errors: [],
    };
  },
  methods: {
    handleSubmit() {
      // 0. reset errors
      this.errors = [];
      // 1. validate
      if (this.title.length < 3) {
        this.errors.push('Title must be more than 3 characters long');
      }
      if (this.details.length < 5) {
        this.errors.push('Details must be more than 5 characters long');
      }
      // 2. overwrite database
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };

      if (!this.errors.length) {
        fetch('http://localhost:3000/projects/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(project),
        })
          .then(() => this.$router.push('/'))
          .catch((error) => console.log(error.message));
      }
    },
  },
};
</script>

<style>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
