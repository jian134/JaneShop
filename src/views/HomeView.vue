<script setup>
import { products } from '../data.js';
import ProductCard from '../components/ProductCard.vue';
</script>

<template>
  <main class="min-h-screen p-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">欢迎来到 JaneShop</h1>
        <p class="text-lg text-gray-600">精选优质产品，打造美好生活。</p>
      </header>

      <!-- 产品网格布局 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </main>
</template>
