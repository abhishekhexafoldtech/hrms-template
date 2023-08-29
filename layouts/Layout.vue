<template>
  <section class="main_wrapper">
    <Sidenav />
    <div class="main_content">
      <div class="content_inner">
        <div class="fix_width_container">
          <!-- <Header /> -->
          <slot />
          <!-- <Footer /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from "./Header";
import Sidenav from "./Sidenav.vue";
import Footer from "./Footer";
</script>
