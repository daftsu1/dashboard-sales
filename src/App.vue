<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HomeViewVue from './views/HomeView.vue';
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
</script>

<template>
  <router-view :name="home" />
</template>