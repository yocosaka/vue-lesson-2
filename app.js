const app = Vue.createApp({
  data() {
    return {
      url: 'https://apricot-web.com',
      showBooks: true,
      books: [
        {
          title: 'Book1',
          author: 'Yoko',
          image: './assets/1.jpg',
          isFav: true,
        },
        {
          title: 'Book2',
          author: 'Vicky',
          image: './assets/2.jpg',
          isFav: false,
        },
        {
          title: 'Book3',
          author: 'Asahi',
          image: './assets/3.jpg',
          isFav: true,
        },
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
