<script setup lang="ts">
import AppTopbar from './AppTopbar.vue';
import { ref } from 'vue'

const containerClass = ref()
</script>

<template>
  <div class="layout-wrapper" :class="containerClass">
    layout
    <app-topbar></app-topbar>
    <div class="layout-sidebar">
      <!-- <app-sidebar></app-sidebar> -->
    </div>
    <div class="layout-main-container">
      <div class="layout-main">
        <router-view></router-view>
      </div>
      <!-- <app-footer></app-footer> -->
    </div>
    <!-- <app-config></app-config> -->
    <div class="layout-mask"></div>
  </div>
</template>

<style lang="scss" scoped></style>
