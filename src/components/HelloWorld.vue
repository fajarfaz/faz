<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="text-gray-700 dark:text-white lg:text-4xl text-3xl font-semibold lg:mb-4 md:mb-8">{{ msg }}</h1>
    <h2 class="text-base md:text-lg leading-relaxed mt-2 md:mt-0">
     I am the web developer from indonesia, usually handle simple and complex projects individually or in team work, for more info you can see on this web page
    </h2>
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
