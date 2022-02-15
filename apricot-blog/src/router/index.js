import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import SinglePost from '../views/SinglePost.vue';
import AddPost from '../views/AddPost.vue';

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
  {
    path: '/new',
    name: 'AddPost',
    component: AddPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
