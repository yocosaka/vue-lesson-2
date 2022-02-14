<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>Search Term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

export default {
  name: 'Home',
  setup() {
    const search = ref('');
    const names = ref([
      'mario',
      'yoshi',
      'luigi',
      'toad',
      'bowser',
      'koopa',
      'peach',
    ]);

    //Everytime 'search' changes, do something
    watch(search, () => {
      console.log('Watch function run for search');
    });

    //=> Everytime any variable or dependencies inside watchEffect changes, run code here
    watchEffect(() => {
      console.log('watch effect function ran', search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) =>
        name.includes(search.value.toLowerCase()),
      );
    });

    return { names, search, matchingNames };
  },
};
</script>
