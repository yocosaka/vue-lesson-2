<template>
  <h1>{{ title }}</h1>
  <Modal header="Sign up for the Givenaway!" text="Grab the discount!" />
</template>

<script>
import Modal from './components/Modal';

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue app',
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
