<script setup>
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'
  import Logos from '@/components/Logos.vue'
  import SunIcon from '@/components/icons/IconSun.vue'
    const navClick = ref(true)
     const isActive = ref(false)
</script>


<template>

  <header class="fixed top-0  z-10 h-20" v-show="$route.path!=='/'"> 

    <nav class="fixed flex flex-row bg-white top-0  px-24 py-10 w-full">
      <div class="md:flex hidden flex-row justify-between w-full items-center">
        <RouterLink to="/">
          <img src="@/assets/logo.svg" class="h-14">
        </RouterLink>
        <div class="flex flex-row space-x-8 items-center"  >

          <RouterLink :class="{ isActive:$route.path==='/portfolio' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/portfolio">Portfolio</RouterLink>
          <RouterLink :class="{ isActive:$route.path==='/blog' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/blog">Blog</RouterLink>
          <RouterLink :class="{ isActive:$route.path==='/about' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/about">About</RouterLink>       
          <button class="bg-gray-100 rounded-full p-2 h-min flex hover:bg-gray-700 hover:stroke-white duration-300 w-min m-auto">
            <SunIcon class="w-6 h-6" />
          </button>
        </div>
      </div>

      <div  class="flex md:hidden">   

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
    <ul 
    v-else
    class="
    flex-col
    mt-8
    space-y-4 bg-gray-700
    md:hidden flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
    "
    >
    <li class="text-gray-100 hover:text-indigo-400">Home</li>
    <li class="text-gray-100 hover:text-indigo-400">About</li>
    <li class="text-gray-100 hover:text-indigo-400">Blogs</li>
    <li class="text-gray-100 hover:text-indigo-400">Contact Us</li>
  </ul>

</nav>   

</header>

<RouterView class="px-24 mt-[10em]" v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component :is="Component" ></component>
  </transition>
</RouterView>

<Logos msg="Copyright 2022"/>
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
