<template>
  <div class="home">Home</div>
  <p ref="p">{{ name }} is {{ age }}.</p>
  <button @click="handleClick">Click me</button>
  <button @click="age++">Increase Age</button>
  <input type="text" v-model="name" />
</template>

<script>
// import ref from vue to use Ref for reactivity
import { ref } from 'vue';

export default {
  name: 'Home',
  setup() {
    // Make variables reactive using ref
    const name = ref('vicky');
    const age = ref(20);

    const handleClick = () => {
      // update name and age that use ref for reactivity
      name.value = 'Yoko';
      age.value = 37;
    };

    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>
