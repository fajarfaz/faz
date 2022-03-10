<script setup lang="ts">
  import Logos from '@/components/Logos.vue'
</script>
<template>
  <div class=" flex flex-col space-y-20 px-8 md:px-0 md:my-20">
    <div class="flex flex-col space-y-10">
     <h1 class="text-4xl font-semibold tracking-wider text-center">
      About Me
    </h1>

    <p class="text-center text-lg">
      Hey, I'm Fajar Faz from Malang, Indonesia.
    </p>
  </div>

  <div class="mx-auto flex flex-col space-y-8">
    <label class="font-semibold text-2xl text-center">Playground</label>
    <div class="md:flex md:flex-row md:space-x-8 grid grid-cols-4 gap-10 md:gap-0">
      <img src="../assets/html.png" class="object-contain w-12">
      <img src="../assets/php.png" class="object-contain w-12">
      <img src="../assets/laravel.png" class="object-contain w-12">
      <img src="../assets/jetstream.png" class="object-contain w-12">
      <img src="../assets/tailwind.png" class="object-contain w-12">
      <img src="../assets/mysql.png" class="object-contain w-12">
      <img src="../assets/alpine.png" class="object-contain w-12">
      <img src="../assets/node.png" class="object-contain w-12">    
      <img src="../assets/gcp.png" class="object-contain w-12">  
      <img src="../assets/figma.png" class="object-contain w-12">  
      <img src="../assets/vue.png" class="object-contain w-12">  
      <img src="../assets/firebase.png" class="object-contain w-12">  
    </div>
  </div>

  <div class="mx-auto flex flex-col space-y-8">
    <label class="font-semibold text-2xl text-center">Timeline</label>
    <div class="flex flex-col space-y-2">

      <div class="flex flex-row space-x-2">
        <label class="font-semibold">2012</label>
        <div class="flex flex-col space-y-2">
          <label>Entered to study at SMKN 4 Malang majoring in software engineering</label>
          <label>My first coding using c and C++ for desktop app</label>
          <label>Continue learning coding using html, php, css and sql for web app</label>
          <label>Make the first project for final project as a graduation requirement</label>
          <label>Get first paid project from my uncle</label>
        </div>
      </div>

      <div class="flex flex-row space-x-2 pt-2">
        <label class="font-semibold">2015</label>
        <div class="flex flex-col space-y-2">
          <label>Studying at the Malang National Institute of Technology with a major in informatics engineering S1</label>
          <label>Learn delphi and Visual Basic for desktop app </label>
          <label>Learn network and computer hardware </label>
          <label>Learn digital imagery and implementation using matlab </label>
          <label>Learn IoT using arduino and C++ and java programming languages</label>
          <label>Learn UI/UX for app design and prototype</label>
        </div>
      </div>  

      <div class="flex flex-row space-x-2 pt-2">
        <label class="font-semibold">2019</label>
        <div class="flex flex-col space-y-2">
          <label>Freelance web developer</label>        
        </div>
      </div>  

    </div>
  </div>


   <div class="mx-auto flex flex-col space-y-4">
    <label class="font-semibold text-2xl text-center">Hobby</label>
    <div class="flex flex-col space-y-2">

      <div class="flex flex-col space-y-2 text-center">
        <label>Hiking & Camping</label>   
        <label>Cycling</label>        
        <label>Badminton</label>       
        <label>Running</label>    
      </div>  

    </div>
  </div>
    <div class="dark:bg-gray-700 fixed w-screen h-full inset-0 -z-10"> </div>
</div>
</template>

