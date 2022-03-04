<script setup lang="ts">
  import TheWelcome from '@/components/TheWelcome.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import SunIcon from '@/components/icons/IconSun.vue'
</script>

<template >
  <div class="grid grid-cols-2 mt-10"> 
  <div class=" w-10/12 flex flex-row left-10 my-auto space-x-4">
    <div class="flex flex-col space-y-8 w-full items-center pr-2 my-auto">
      <img alt="Vue logo" class=" drop-shadow-xl hover:drop-shadow-2xl duration-300 w-[125px] h-[125px]" src="@/assets/logo.svg"  />
      <button class="bg-gray-100 rounded-full p-2 h-min flex hover:bg-gray-700 hover:stroke-white duration-300 w-min mx-auto">
        <SunIcon class="w-6 h-6" />
      </button>
    </div>
    <div class="wrapper">
      <HelloWorld msg="Hi, Im Fajar Faz" />

      <nav class="flex flex-row divide-x justify-items-center text-lg mt-4">
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300" to="/">Home</RouterLink>
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300" to="/portfolio">Portfolio</RouterLink>
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300" to="/blog">Blog</RouterLink>
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300" to="/about">About</RouterLink>    

      </nav>
    </div>
  </div>
  <main class="w-11/12">
    <TheWelcome />
  </main>
</div>

</template>
