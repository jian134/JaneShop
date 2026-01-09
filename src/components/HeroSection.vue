<script setup>
</script>

<template>
  <section
    class="relative h-[800px] bg-cover bg-center text-white flex items-center justify-center p-4 md:p-8"
    :style="{ backgroundImage: 'url(/JaneShop/index.png)' }"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent opacity-80"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between w-full">
      <!-- 左侧内容 -->
      <div class="text-left md:w-1/2 lg:w-2/5 mb-10 md:mb-0">
        <p class="text-lg mb-4 opacity-75">视觉冲击与战略工艺的结合</p>
        <h1 class="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          我们创造品牌
          <br />& 数字故事
        </h1>
        <p class="text-xl mb-8 opacity-85">
          品牌建设、网站设计和摄影——旨在连接、启发和发展您的业务。
        </p>
        <div class="flex space-x-4">
          <router-link
            to="/collaborate"
            class="btn btn-primary shadow-lg flex items-center group"
          >
            立即合作
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </router-link>
          <router-link
            to="/services"
            class="btn btn-success shadow-lg"
          >
            我们的服务
          </router-link>
        </div>
      </div>

      <!-- 右侧信息面板 -->
      <div class="md:w-1/2 lg:w-2/5 flex justify-end">
        <div class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 text-white">
          <p class="font-semibold mb-2">品牌 • 摄影</p>
          <p class="text-sm mb-4 opacity-80">
            提升他们的视觉形象
            <br />并推出了一项产品
            <br />翻倍的营销活动
          </p>
          <ul class="text-sm space-y-2 opacity-90">
            <li>丽娃 — 美容护肤</li>
            <li>克朗 — 建筑工作室</li>
            <li>维尔托 — 街头服饰品牌</li>
            <li>声纳 — SaaS平台</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 可以在这里添加组件特有的样式 */
</style>