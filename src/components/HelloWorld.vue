<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="text-gray-700 dark:text-white lg:text-4xl text-3xl font-semibold lg:mb-4 md:mb-8">{{ msg }}</h1>
    <h3 class="text-base md:text-xl leading-relaxed mt-2 md:mt-0">
     Specializes in front-end development and sometimes helps with back-end development or IT support as a team work.
    
    </h3>
  </div>
</template>

<style scoped>


h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
