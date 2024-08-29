<script setup>
import virtualList from './components/virtualList.vue';

// 创建一个包含10万条数据的大数组
const data = []
for (let i = 0; i < 100000; i++) {
  data.push({ id: i, value: i })
}
</script>

<template>
  <div class="app">
    <virtualList :listData="data"></virtualList>
  </div>
</template>

<style scoped>
.app {
  height: 400px; /* 设置可视区域的高度 */
  width: 300px; /* 设置可视区域的宽度 */
  border: 1px solid #000; /* 边框，便于看到边界 */
}
</style>
