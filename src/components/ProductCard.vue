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
  <div class="product-card">
    <!-- 产品图片 -->
    <img :src="props.product.image" :alt="props.product.name" class="product-image" />
    
    <div class="product-info">
      <!-- 产品名称 -->
      <h3 class="product-name">{{ props.product.name }}</h3>
      <!-- 产品描述 -->
      <p class="product-description">{{ props.product.description }}</p>
      <!-- 产品价格 -->
      <p class="product-price">￥{{ props.product.price }}</p>
    </div>
  </div>
</template>

<style scoped>
/* 整体卡片简洁风格 */
.product-card {
  background-color: #ffffff;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}

/* 鼠标悬停时出现轻微阴影 */
.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 图片宽度 100% */
.product-image {
  width: 100%;
  height: auto;
  display: block;
}

.product-info {
  padding: 16px;
}

.product-name {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
}

.product-description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

/* 价格字体加粗加大 */
.product-price {
  font-weight: bold;
  font-size: 1.5rem;
  color: #e4393c;
  margin: 0;
}
</style>
