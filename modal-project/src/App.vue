<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal
      :header="header"
      :text="text"
      theme="sale"
      @closeModal="toggleModal"
    />
  </div>
  <p>Welcome...</p>
  <button v-if="!showModal" @click="toggleModal">Open Modal</button>
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
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.myInput.value);
      this.$refs.myInput.classList.add('oh-my-input');
      this.$refs.myInput.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
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
