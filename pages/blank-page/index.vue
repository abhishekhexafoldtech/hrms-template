<template>
    <div>
    <div class="page-header align-items-start min-vh-100" style="background-image: url('https://images.unsplash.com/uploads/1413399939678471ea070/2c0343f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');" loading="lazy">
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-12 m-auto text-center">
          <h1 class="display-1 text-bolder text-white">Under Development</h1>
          <h2 class="text-white"></h2>
          <p class="lead text-white">We are working on it</p>
          <RouterLink to="dashboard"><button type="button" class="btn bg-gradient-warning mt-4">Go to Homepage</button></RouterLink>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script setup> 

definePageMeta({
  layout: "layout",
});

</script>