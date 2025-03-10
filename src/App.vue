<script setup>
import HomeView from './components/header/HomeView.vue'
// Si necesitas importar HeroSection más adelante, descomenta la siguiente línea:
// import HeroSection from './components/heroSection/HeroSection.vue'
</script>

<template>
  <div class="d-flex flex-column vh-100">
    <!-- HomeView ocupa toda la pantalla -->
    <div class="flex-grow-1">
      <HomeView />
    </div>
    <!-- El router-view ocupa el espacio restante debajo de HomeView -->
    <div class="flex-grow-1">
      <router-view />
    </div>
  </div>
</template>
