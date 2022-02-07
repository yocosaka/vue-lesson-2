const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The final empire',
      author: 'Brandon',
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, num = 0) {
      console.log(e.type, num);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});
app.mount('#app');
