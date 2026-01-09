<script setup>
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <!-- 顶部标题和描述 -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
        <div class="md:w-1/2">
          <p class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">关于我们</p>
          <h2 class="text-4xl font-bold text-gray-900 leading-tight">
            我们用意义和势头
            <br />打造品牌
          </h2>
        </div>
        <div class="md:w-1/2 mt-6 md:mt-0 md:text-right">
          <p class="text-lg text-gray-600">
            大胆创意的合作伙伴——
            <br />融合战略、设计、代码和
            <br />视觉叙事。
          </p>
        </div>
      </div>

      <!-- 三个内容块 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- 80+ Brands Launched -->
        <div class="bg-gray-900 rounded-lg p-8 text-white flex flex-col justify-end min-h-[300px] bg-cover bg-center"
          :style="{ backgroundImage: 'url(/online.png)' }"
        >
          <h3 class="text-5xl font-bold mb-2">80+</h3>
          <p class="text-lg text-gray-300">跨行业品牌发布</p>
        </div>

        <!-- 10+ Years Experience -->
        <div class="bg-orange-500 rounded-lg p-8 text-white flex flex-col justify-end min-h-[300px]">
          <h3 class="text-xl font-semibold mb-4">CATCHUP<sup>®</sup></h3>
          <h3 class="text-5xl font-bold mb-2">10+</h3>
          <p class="text-lg text-white">年综合创意经验</p>
        </div>

        <!-- Core Values -->
        <div class="bg-gray-100 rounded-lg p-8 text-gray-900 flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 class="text-2xl font-bold mb-4">核心价值观</h3>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <div>
                  <p class="font-semibold">战略性创意</p>
                  <p class="text-sm">每个项目都以目标为导向——植根于战略并清晰执行。</p>
                </div>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <div>
                  <p class="font-semibold">端到端工艺</p>
                  <p class="text-sm">从概念到发布，我们涵盖每个接触点——品牌、网站和视觉。</p>
                
                </div>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <div>
                  <p class="font-semibold">协作流程</p>
                  <p class="text-sm">我们与客户紧密合作，确保想法在开放对话中发展。</p>
                </div>
              </li>
            </ul>
          </div>
          <router-link
            to="/about"
            class="btn btn-link mt-8 inline-flex items-center text-gray-900 font-semibold group"
          >
            更多关于我们
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
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 可以在这里添加组件特有的样式 */
</style>