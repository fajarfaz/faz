<template>
  <div class="item dark:border-white dark:text-gray-300 duration-300 dark:border-white ">
    <i class="dark:border-white duration-300 bg-white dark:bg-white/20 shadow-md dark:hover:border-orange-300 dark:hover:text-orange-500 dark:backdrop-blur-md dark:text-white">
      <slot name="icon" ></slot>
    </i>
    <div class="details">
      <h3 class="dark:text-white duration-300">
        <slot name="heading" ></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
   
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    @apply border-gray-200 border-l dark:border-gray-100;  

    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
        @apply border-gray-200 border-l dark:border-gray-100;  
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
