<script setup>
// 定义接收的 props
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="card card-compact bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300">
    <!-- 产品图片 -->
    <figure><img :src="props.product.image" :alt="props.product.name" class="w-full h-48 object-cover" /></figure>
    
    <div class="card-body">
      <!-- 产品名称 -->
      <h2 class="card-title text-xl font-semibold">{{ props.product.name }}</h2>
      <!-- 产品描述 -->
      <p class="text-gray-600 text-sm">{{ props.product.description }}</p>
      <!-- 产品价格 -->
      <p class="text-2xl font-bold text-red-500">￥{{ props.product.price }}</p>
    </div>
  </div>
</template>
