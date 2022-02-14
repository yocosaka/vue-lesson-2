import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SinglePost from '../views/SinglePost.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'SinglePost',
    component: SinglePost,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
