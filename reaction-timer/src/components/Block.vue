<template>
  <div class="block">click me {{ dealy }}</div>
</template>

<script>
export default {
  name: 'Block',
  props: ['delay'],
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
