<script >
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'
  import Logos from '@/components/Logos.vue'
  import SunIcon from '@/components/icons/IconSun.vue'
  import MoonIcon from '@/components/icons/IconMoon.vue'
 

  export default{
    name: 'app',
    data () {
      return {
        isDark: false,
        navClick: true,
        isActive:false
      }
    },
    components: {
      Logos,
      SunIcon,
      MoonIcon
    },
   created () {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress (e) {
      if (e.key === 'f' || e.key === 'F') {
        this.toggle()
      }
    },   
    toggle () {
      if (this.isDark === true) {
        this.isDark = false
      } else {
        this.isDark = true
      }
    }
  }
}
</script>


<template>
  <div :class="isDark ? 'dark' : '' " class="transition-colors ease-in ease-out duration-700 ">
    <header class="fixed top-0  z-10 h-20" v-show="$route.path!=='/'"> 

      <nav class="fixed flex md:flex-row flex-col bg-white top-0 md:px-24 px-8 md:py-10 py-6 w-full dark:bg-gray-700 border-b border-gray-200 dark:text-gray-100 app">
        <div class="md:flex hidden flex-row justify-between w-full items-center">
          <RouterLink to="/">
            <img src="@/assets/logo.svg" class="h-14">
          </RouterLink>
          <div class="flex flex-row space-x-8 items-center"  >
            <RouterLink :class="{ isActive:$route.path==='/portfolio' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/portfolio">Portfolio</RouterLink>
            <RouterLink :class="{ isActive:$route.path==='/blog' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/blog">Blog</RouterLink>
            <RouterLink :class="{ isActive:$route.path==='/about' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/about">About</RouterLink>       
            <button  @click="isDark = !isDark" class="bg-gray-100 rounded-full p-2 h-min flex hover:bg-gray-700 hover:stroke-white duration-300 w-min m-auto">
              <SunIcon v-if="isDark" class="w-6 h-6" />
              <MoonIcon v-else class="w-6 h-6 text-gray-600"/>
            </button>
          </div>
        </div>

        <div class="flex md:hidden justify-between w-full">   
         <RouterLink to="/">
          <img src="@/assets/logo.svg" class="h-14">
        </RouterLink>
        <button
        @click="navClick = !navClick"
        type="button"
        class="
        text-gray-600
        hover:text-gray-400
        focus:outline-none focus:text-gray-400
        "
        >
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current" v-if="navClick">
          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
        </svg>
        <svg v-else  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg stroke-1 stroke-gray-600" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
          <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
        </svg>

      </button>
    </div>
    <Transition>
      <label v-if="navClick"></label>    
      <div v-else class="md:hidden flex flex-col space-y-8 items-center ml-5 mt-10"  >
        <RouterLink :class="{ isActive:$route.path==='/portfolio' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/portfolio">Portfolio</RouterLink>
        <RouterLink :class="{ isActive:$route.path==='/blog' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/blog">Blog</RouterLink>
        <RouterLink :class="{ isActive:$route.path==='/about' }" class="text-lg hover:text-green-500 duration-300 tracking-wider" to="/about">About</RouterLink>       
        <button @click="isDark = !isDark" class="bg-gray-100 rounded-full p-2 h-min flex hover:bg-gray-700 hover:stroke-white duration-300 w-min m-auto">
         <SunIcon v-if="isDark" class="w-6 h-6" />
         <MoonIcon v-else class="w-6 h-6"/>
       </button>
     </div>
   </Transition>
 </nav>   

</header>

<RouterView class="md:px-24 px-8 pt-[10em] dark:bg-gray-700 dark:text-white app h-full min-h-screen" :isDark="isDark" @toggle="toggle" v-slot="{ Component }">
  <transition name="fade" mode="out-in">
    <component :is="Component" >

    </component>

  </transition>
</RouterView >
</div>
</template>

<style>
  @import '@/assets/base.css';
  .app{
     transition: background 0.3s ease-in-out;
  }
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
