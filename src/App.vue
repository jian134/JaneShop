<script setup>
import { products } from './data.js';
import ProductCard from './components/ProductCard.vue';

// 简单的购物车占位逻辑
const cartCount = 0;
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 顶部导航栏 -->
    <header class="bg-[#0058a3] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <!-- 左侧标题 -->
        <h1 class="text-2xl font-bold tracking-tight">IKEA Demo</h1>
        
        <!-- 右侧购物车 -->
        <div class="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
          <span class="mr-2 text-sm font-medium">购物车</span>
          <div class="bg-[#ffdb00] text-[#0058a3] rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs">
            {{ cartCount }}
          </div>
        </div>
      </div>
    </header>

    <!-- 页面主体内容 -->
    <main class="max-w-7xl mx-auto p-6">
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-gray-800">热门商品</h2>
        <div class="h-1 w-20 bg-[#0058a3] mt-2"></div>
      </div>

      <!-- 商品展示网格 -->
      <!-- grid-cols-1: 手机端 1 列 -->
      <!-- lg:grid-cols-4: 宽屏端 4 列 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="bg-white border-t mt-12 py-8 text-center text-gray-500 text-sm">
      <p>© 2026 IKEA Demo 展示页</p>
    </footer>
  </div>
</template>

<style>
/* 使用全局样式确保页面字体美观 */
body {
  font-family: 'Noto Sans SC', sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
}
</style>