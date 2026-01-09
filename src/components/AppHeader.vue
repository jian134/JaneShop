<script setup>
import { ref, onMounted } from 'vue';

// 定义导航链接，方便管理
const navLinks = [
  { name: '首页', path: '/' },
  { name: '工作室', path: '/studio' },
  { name: '作品', path: '/works' },
  { name: '服务', path: '/services' },
  { name: '洞察', path: '/insights' },
];

// 主题切换逻辑
const currentTheme = ref('light');

const toggleTheme = () => {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  currentTheme.value = newTheme;
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  currentTheme.value = savedTheme;
});
</script>

<template>
  <header class="relative z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 px-4 md:px-8">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo with Icon -->
      <router-link to="/" class="flex items-center space-x-2 text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 21h22L12 2zm0 3.99L18.06 19H5.94L12 5.99zM11 10h2v4h-2V10zm0 5h2v2h-2v-2z"/>
        </svg>
        <span>CATCHUP<sup>®</sup></span>
      </router-link>

      <!-- 桌面导航 -->
      <nav class="hidden md:flex space-x-8">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="hover:text-gray-300 transition-colors duration-300"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <!-- 联系按钮和主题切换 -->
      <div class="hidden md:flex items-center space-x-4">
        <!-- 主题切换按钮 -->
        <button @click="toggleTheme" class="btn btn-ghost btn-circle">
          <svg v-if="currentTheme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h1M4 12H3m15.32 5.32l-.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>

        <!-- 联系按钮 -->
        <router-link
          to="/contact"
          class="btn btn-primary shadow-lg flex items-center group"
        >
          联系我们
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
      </div>

      <!-- 移动端菜单按钮 (稍后实现) -->
      <button class="md:hidden text-white focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
            
/>
          </svg>
      </button>
    </div>
  </header>
</template>