<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="startGame" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @endGame="endGame" />
  <!-- <p>Reaction time: {{ score }} ms</p> -->
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from './components/Block';
import Results from './components/Results';

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    startGame() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
