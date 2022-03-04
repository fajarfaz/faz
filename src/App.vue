<script setup>
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'
  import Logos from '@/components/Logos.vue'
  import SunIcon from '@/components/icons/IconSun.vue'
  const navClick = ref(true)
  const isActive = ref(false)
  const isDark = ref(false)
</script>


<template>
  <div :class="isDark ? 'dark' : '' " class="transition-colors ease-in duration-700">
  <header class="fixed top-0  z-10 h-20" v-show="$route.path!=='/'"> 

    <nav class="fixed flex flex-row bg-white top-0 md:px-24 px-8 md:py-10 py-6 w-full dark:bg-gray-700 border-b border-gray-200 dark:text-gray-100">
      <div class="md:flex hidden flex-row justify-between w-full items-center">
        <RouterLink to="/">
          <img src="@/assets/logo.svg" class="h-14">
        </RouterLink>
        <div class="flex flex-row space-x-8 items-center"  >

          <RouterLink :class="{ isActive:$route.path==='/portfolio' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/portfolio">Portfolio</RouterLink>
          <RouterLink :class="{ isActive:$route.path==='/blog' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/blog">Blog</RouterLink>
          <RouterLink :class="{ isActive:$route.path==='/about' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/about">About</RouterLink>       
          <button @click="isDark = !isDark" class="bg-gray-100 rounded-full p-2 h-min flex hover:bg-gray-700 hover:stroke-white duration-300 w-min m-auto">
            <SunIcon v-if="isDark" class="w-6 h-6" />
            <SunIcon v-else class="w-6 h-6 text-red-600"/>
          </button>
        </div>
      </div>

      <div  class="flex md:hidden ">   

        <button
        @click="navClick = !navClick"
        type="button"
        class="
        text-gray-600
        hover:text-gray-400
        focus:outline-none focus:text-gray-400
        "
        >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          ></path>
        </svg>
      </button>
    </div>
    <label v-if="navClick"></label>
  
    <div v-else class="md:hidden flex  flex-row space-x-8 items-center ml-5"  >
      <RouterLink :class="{ isActive:$route.path==='/portfolio' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/portfolio">Portfolio</RouterLink>
      <RouterLink :class="{ isActive:$route.path==='/blog' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/blog">Blog</RouterLink>
      <RouterLink :class="{ isActive:$route.path==='/about' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/about">About</RouterLink>       
      <button class="bg-gray-100 rounded-full p-2 h-min flex hover:bg-gray-700 hover:stroke-white duration-300 w-min m-auto">
        <SunIcon class="w-6 h-6" />
      </button>
    </div>

</nav>   

</header>

<RouterView class="md:px-24 px-8 pt-[10em] dark:bg-gray-700 dark:text-white" v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component :is="Component" ></component>
  </transition>
</RouterView>
</div>
</template>

<style>
  @import '@/assets/base.css';
  .isActive{
   @apply border-green-300 border-b-2;
  }
  /*route transition*/

  .fade-enter-from{
   opacity: 0;
   transition: translateX(100px);
  }

  .fade-enter-active{
    transition: all 0.3s ease-out;
  }
  .fade-leave-to{
     opacity: 0 ;
   transition: translateX(-100px);
  }
  .fade-leave-active{
    transition: all 0.3s ease-in;

  }
</style>
