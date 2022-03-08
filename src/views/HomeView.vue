<script setup lang="ts">
  import { ref } from 'vue'
  import TheWelcome from '@/components/TheWelcome.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import SunIcon from '@/components/icons/IconSun.vue'
  import MoonIcon from '@/components/icons/IconMoon.vue'
  import WhatsappIcon from '@/components/icons/IconWa.vue'
  const isDark = ref(false)
</script>

<template >
  <div class=" -mt-[10em] mb-20 md:mb-0" :class="isDark ? 'dark' : '' ">
    <div class="dark:bg-gray-700 fixed w-screen h-full inset-0"> </div>
  <div class="grid md:grid-cols-2 grid-cols-1 mt-10 duration-300 dark:text-white"  > 
  <div class="md:w-10/12 w-full flex xl:flex-row flex-col  my-auto xl:space-x-4 space-x-0">
    <div class="flex flex-col space-y-4 md:space-y-8 w-full items-center pr-0 md:pr-2 my-auto mb-10 xl:mb-0">
      <img alt="Vue logo" class=" drop-shadow-xl hover:drop-shadow-2xl duration-300 w-[125px] h-[125px]" src="@/assets/logo.svg"  />
      <div class="grid grid-cols-2 gap-4"> 
      <button @click="isDark = !isDark" class="bg-gray-100 rounded-full p-2  flex hover:bg-gray-700 hover:text-white dark:hover:bg-gray-500 hover:stroke-white  duration-300 w-min mx-auto">
        <SunIcon class="w-6 h-6"  v-if="isDark"/>
        <MoonIcon class="w-6 h-6" v-else />
      </button>
      <a href="https://api.whatsapp.com/send?phone=6288805455050" class="bg-gray-100 rounded-full p-2 flex hover:bg-gray-700 hover:text-white duration-300 w-min mx-auto dark:text-gray-700 dark:hover:bg-gray-500 dark:hover:text-white">
       <WhatsappIcon class="w-6 h-6" />
     </a>
     </div>
   </div>
   <div class="wrapper">
      <HelloWorld msg="Hi, Im Fajar Faz"/>

      <nav class="flex flex-row md:flex-col lg:flex-row md:text-center divide-x md:divide-none lg:divide-x justify-items-center text-lg md:mt-4 mt-10 text-base md:text-lg">
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300" to="/">Home</RouterLink>
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300" to="/portfolio">Portfolio</RouterLink>
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300" to="/blog">Blog</RouterLink>
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300" to="/about">About</RouterLink>    

      </nav>
    </div>
  </div>
  <main class=" w-full mt-10 md:mt-0">
    <TheWelcome />
  </main>
</div>
</div>

</template>
