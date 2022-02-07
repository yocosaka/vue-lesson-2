const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'Book1', author: 'Yoko' },
        { title: 'Book2', author: 'Vicky' },
        { title: 'Book3', author: 'Asahi' },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});
app.mount('#app');
