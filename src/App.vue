<template>
  <div>
    <router-view></router-view>
    <H1>{{ KEY }}</H1>
  </div>
</template>

<script setup>
const KEY = import.meta.env.VITE_MY_BASE_URL;  
</script>

<style lang="scss" scoped>

</style>