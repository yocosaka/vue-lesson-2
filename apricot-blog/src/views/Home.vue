<template>
  <div class="home">Home</div>
  <p>{{ name }} is {{ age }}.</p>
  <button @click="handleClick">Click me</button>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    let name = 'vicky';
    let age = 20;

    const handleClick = () => {
      console.log('you clicked me');
    };
    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>
