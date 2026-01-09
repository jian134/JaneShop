<script setup>
const clientAvatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/12.jpg',
  'https://randomuser.me/api/portraits/women/3.jpg',
  'https://randomuser.me/api/portraits/men/88.jpg',
  'https://randomuser.me/api/portraits/women/55.jpg',
  'https://randomuser.me/api/portraits/men/21.jpg',
  'https://randomuser.me/api/portraits/women/76.jpg',
  'https://randomuser.me/api/portraits/men/66.jpg',
  'https://randomuser.me/api/portraits/women/11.jpg',
  // 更多头像...
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 左侧：Engagement Growth -->
        <div class="bg-gray-900 rounded-lg p-8 text-white flex flex-col justify-end min-h-[400px] relative overflow-hidden bg-cover bg-center"
          :style="{ backgroundImage: 'url(/online(1).png)' }"
        >
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
          <div class="relative z-10">
            <h3 class="text-6xl font-extrabold mb-4">120%</h3>
            <p class="text-xl text-gray-300 mb-6">平均参与度增长</p>
            <p class="text-sm text-gray-400 leading-relaxed">
              客户通常会看到受众参与度显著提升——包括更高的转化率、更长的会话时间以及改进的品牌认知度。这是精心设计、有针对性的故事讲述和以用户体验为主导的开发成果。
            </p>
            <div class="absolute top-8 right-8 bg-white text-gray-900 rounded-full p-3 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
            </div>
          </div>
        </div>

        <!-- 右侧：Projects Delivered -->
        <div class="bg-gray-900 rounded-lg p-8 text-white flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 class="text-5xl font-extrabold mb-4">150+</h3>
            <p class="text-xl text-gray-300 mb-6">精准交付项目</p>
            <p class="text-sm text-gray-400 leading-relaxed">
              成功完成了跨行业的网站、营销活动和品牌推广。
            </p>
          </div>
          <div class="avatar-group -space-x-4 mt-8">
            <div class="avatar ring ring-primary ring-offset-base-100 ring-offset-2"
              v-for="(avatar, index) in clientAvatars"
              :key="index"
            >
              <div class="w-10 rounded-full">
                <img :src="avatar" alt="客户头像" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 可以在这里添加组件特有的样式 */
</style>