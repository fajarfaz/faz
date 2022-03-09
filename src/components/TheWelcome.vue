<script setup lang="ts">
  import WelcomeItem from './WelcomeItem.vue'
  import DocumentationIcon from './icons/IconDocumentation.vue'
  import ToolingIcon from './icons/IconTooling.vue'
  import EcosystemIcon from './icons/IconEcosystem.vue'
  import CommunityIcon from './icons/IconCommunity.vue'
  import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Interest </template>
    Have interest at Software Engineering, Philosophy of Religion, Wild Nature and Science

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Software Engineering</template>

    Build Full-Stack apps with Native Dev, Laravel Framework, Bootstrap, Tailwindcss, AlpineJs, VueJs, MySQL, Flutter and Javascript,  

    My Project are available in  <code><a href="https://github.com/fajarfaz"> Github</a></code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Doing some small personal and research projects as open source
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
     <SupportIcon />

   </template>
   <template #heading>Daily Activity</template>

   Currently work as Freelancer and likes to share about Science, Anime, and Technology
 </WelcomeItem>

 <WelcomeItem>
  <template #icon>
    <CommunityIcon />
  </template>
  <template #heading>Social Media</template>

  You can see me on <a href="https://dribbble.com/fajarfaz"> dribbble </a>, <a href="https://github.com/fajarfaz">github</a>, or <a href="mailto:fajarfaz@gmail.com">email</a>
  
</WelcomeItem>
</template>
