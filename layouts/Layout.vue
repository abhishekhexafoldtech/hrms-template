<template>
  <div>
    <Header />
    <Sidenav />
    <slot />
    <Footer/>
  </div>
</template>
  
<script setup>
import Header from "./Header";
import Sidenav from "./Sidenav.vue";
import Footer from "./Footer";
</script>