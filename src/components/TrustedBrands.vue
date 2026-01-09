<script setup>
// 定义品牌 Logo 的数据
const brandLogos = [
  { name: 'Brand A', svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-12 h-12 text-gray-400"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3z"/></svg>' },
  { name: 'Brand B', svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-12 h-12 text-gray-400"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .8.4L11 7a.5.5 0 0 0-.8-.9L8 6z"/></svg>' },
  { name: 'Brand C', svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-12 h-12 text-gray-400"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M7.5 4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.8.4L5 7a.5.5 0 0 1 .8-.9L7.5 6z"/></svg>' },
  { name: 'Brand D', svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-12 h-12 text-gray-400"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7 7.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V8a.5.5 0 0 0-.5-.5"/></svg>' },
  { name: 'Brand E', svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-12 h-12 text-gray-400"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6 8a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 8"/></svg>' },
  { name: 'Brand F', svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" class="w-12 h-12 text-gray-400"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.5 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/></svg>' },
];
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 md:px-8 text-center">
      <h2 class="text-xl font-semibold text-gray-600 mb-12">受前瞻性品牌信赖</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        <div v-for="brand in brandLogos" :key="brand.name" class="flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity duration-300" v-html="brand.svg">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 可以在这里添加组件特有的样式 */
</style>