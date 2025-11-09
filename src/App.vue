<template>
  <!-- // src/App.vue -->
  <div id="app">
    <NavigationBar />
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
// import NavigationBar from '@/components/NavigationBar.vue'
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';

html {
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1.4em;
  line-height: 1.5rem;
}

.link_no_underline {
  text-decoration: none;
}
</style>
