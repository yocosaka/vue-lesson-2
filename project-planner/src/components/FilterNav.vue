<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')">All</button>
    <button @click="updateFilter('completed')">Completed</button>
    <button @click="updateFilter('ongoing')">Ongoing</button>
  </nav>
</template>

<script>
export default {
  name: 'FilterNav',
  methods: {
    updateFilter(by) {
      this.$emit('filter', by);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>
