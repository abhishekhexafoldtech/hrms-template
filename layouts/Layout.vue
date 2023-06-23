<template>
  <div>
    <Header />
    <slot />
    <Footer/>
  </div>
</template>
  
<script setup>
import Header from "./Header";
import Footer from "./Footer";
</script>