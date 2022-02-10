<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @closeModal="toggleModal">
      <!-- Slot start -->
      <!-- Name Slot: mylinks start -->
      <template v-slot:mylinks>
        <a href="#">Sign up now</a> <br />
        <a href="#">More info</a>
      </template>
      <!-- Name Slot: mylinks end -->
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <!-- Slot end -->
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
    <Modal @closeModal="toggleModalTwo">
      <!-- Slot start -->
      <!-- Name Slot: mylinks start -->
      <template v-slot:mylinks>
        <a href="#">Login</a> <br />
        <a href="#">Setup your Profile</a>
      </template>
    </Modal>
  </teleport>
  <p>Welcome...</p>
  <button v-if="!showModal" @click="toggleModal">Open Modal</button> <br />
  <button v-if="!showModalTwo" @click="toggleModalTwo">Open Modal Two</button>
  <!-- there are many event modifier like: @click.right, @click.shift, @click.alt etc -->
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
      showModalTwo: false,
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
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
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
