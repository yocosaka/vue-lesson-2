<template>
  <h1>{{ title }}</h1>
  <Modal :header="header" :text="text" theme="sale" />
</template>

<script>
import Modal from './components/Modal';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue app',
      header: 'Sign up for the Giveaway!',
      text: 'Grab the discount!',
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.myInput.value);
      this.$refs.myInput.classList.add('oh-my-input');
      this.$refs.myInput.focus();
    },
  },
};
</script>

<style>
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
