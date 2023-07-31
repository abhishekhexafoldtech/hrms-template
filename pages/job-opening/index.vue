<template>
    <div class="container mt-8">
       <el-row>
        <jobOpening/>
       </el-row>
       <el-row>
        <AddressInformation/>
       </el-row>
       <el-row>
        <ForecastDetails/>
       </el-row>
    </div>
</template>

<script setup>
import ForecastDetails from './components/ForecastDetails.vue';
import AddressInformation from './components/addressInformation.vue';
import jobOpening from './components/jobOpening.vue';

definePageMeta({
  layout: "layout",
});

</script>