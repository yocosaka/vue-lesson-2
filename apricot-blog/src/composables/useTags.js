import { ref } from 'vue';

const useTags = (posts) => {
  console.log('afsgdhjhklk');
  const tags = ref([]);
  const tagSet = new Set();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  tags.value = [...tagSet];

  return { tags };
};

export default useTags;
