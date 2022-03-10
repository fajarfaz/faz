<script>
  import { ref } from 'vue'
  import TheWelcome from '@/components/TheWelcome.vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  import SunIcon from '@/components/icons/IconSun.vue'
  import MoonIcon from '@/components/icons/IconMoon.vue'
  import WhatsappIcon from '@/components/icons/IconWa.vue'
  import Toggle from '@/components/Toggle.vue'
  export default{

    props: ['isDark'],
    components:{
      Toggle,
      TheWelcome,
      HelloWorld,
      MoonIcon,
      WhatsappIcon,
      SunIcon
    }
   
  }
</script>

<template >
  <div class=" -mt-[10em] md:mb-0  flex flex-col" >
    <!-- <div class="dark:bg-gray-700 fixed w-screen h-full inset-0"> </div> -->
  <div class="grid md:grid-cols-2 grid-cols-1 duration-300 dark:text-white h-auto md:h-screen md:my-0 my-20"> 
  <div class="md:w-10/12 w-full flex xl:flex-row flex-col  my-auto xl:space-x-4 space-x-0">
    <div class="flex flex-col space-y-6 md:space-y-8 w-full items-center pr-0 md:pr-2 my-auto mb-10 xl:mb-0">
      <img alt="Vue logo" class=" drop-shadow-2xl hover:drop-shadow-5xl duration-500 w-[125px] h-[125px] dark:drop-shadow-3xl dark:hover:drop-shadow-4xl" src="@/assets/logo.svg"  />
      <div class="grid grid-cols-2 gap-4"> 
     <!--    emit untuk ngetrigger function di App.vue -->
        <button :isDark="isDark" @click="$emit('toggle')" class="bg-gray-100 rounded-full p-2 h-min flex hover:bg-gray-700 hover:stroke-white duration-300 w-min m-auto">
        <SunIcon class="w-6 h-6"  v-if="isDark"/>
        <MoonIcon class="w-6 h-6" v-else />
      </button>
      <a href="https://api.whatsapp.com/send?phone=6288805455050" class="bg-gray-100 rounded-full p-2 flex hover:bg-gray-700 hover:text-white duration-300 w-min mx-auto dark:text-gray-700 dark:hover:bg-gray-500 dark:hover:text-white">
       <WhatsappIcon class="w-6 h-6" />
     </a>
     </div>
     <code class="text-gray-600 dark:text-gray-200 duration-300 text-sm text-center"> Press F/f for change <span class="dark:hidden">Dark mode</span><span class="dark:inline hidden">Light mode</span></code>
   </div>
   <div class="wrapper">
      <HelloWorld msg="Hi, Im Fajar Faz"/>
  
      <nav class="flex flex-row md:flex-col lg:flex-row md:text-center space-x-4 md:justify-start justify-center text-lg md:mt-4 mt-10 text-base md:text-lg">
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300 border " to="/portfolio">Portfolio</RouterLink>
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300 border " to="/blog">Blog</RouterLink>
        <RouterLink class="px-4 hover:bg-green-300 hover:text-gray-900 duration-300 border " to="/about">About</RouterLink>    

      </nav>
    </div>
  </div>
  <main class=" w-full mt-10  h-min my-auto">
    <TheWelcome />
  </main>
</div>
</div>

</template>
