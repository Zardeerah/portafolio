<script setup>
import homeView from './components/header/homeView.vue'
// import HeroSection from './components/heroSection/HeroSection.vue'
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen">
    <!-- HomeView ocupa 1/5 de la pantalla -->
    <div class="md:h-full md:w-1/5">
      <homeView />
    </div>
    <div id="app" class="flex-1">
      <router-view />
    </div>
  </div>
</template>
