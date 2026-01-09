<script setup>
const clientAvatars = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/4.jpg',
  'https://randomuser.me/api/portraits/men/5.jpg',
  'https://randomuser.me/api/portraits/women/6.jpg',
  'https://randomuser.me/api/portraits/men/7.jpg',
  'https://randomuser.me/api/portraits/women/8.jpg',
  'https://randomuser.me/api/portraits/men/9.jpg',
  'https://randomuser.me/api/portraits/women/10.jpg',
  // 更多头像...
];
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- 左侧：Client Satisfaction -->
        <div class="bg-gray-900 rounded-lg p-8 text-white flex flex-col justify-end min-h-[300px]">
          <div>
            <h3 class="text-5xl font-extrabold mb-4">4.9<span class="text-yellow-400">⭐</span></h3>
            <p class="text-xl text-gray-300 mb-6">平均客户满意度</p>
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

        <!-- 右侧图片 (占位符) -->
        <div class="bg-gray-200 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
          <p class="text-gray-500 text-lg">图片占位符</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 可以在这里添加组件特有的样式 */
</style>