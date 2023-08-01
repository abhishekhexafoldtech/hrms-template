<template>
    <div class="mt-8" style="margin: 15px;">
          <el-tabs type="border-card" v-model="activeName" class="demo-tabs" >
            <el-tab-pane label="Basic" name="first">
              <BasicTab />
            </el-tab-pane>
            <el-tab-pane label="Address" name="second">
              <AddressTab />
            </el-tab-pane>
            <el-tab-pane label="Socila Profile" name="third">
              <SocialProfileTab />
            </el-tab-pane>
          </el-tabs>
    </div>
  </template>
  
  
  <script setup>
  import AddressTab from '@/pages/organization/components/Address.vue';
  import BasicTab from '@/pages/organization/components/Basic.vue';
  import SocialProfileTab from '@/pages/organization/components/SocialProfile.vue';
  
  const activeName = ref("first");
  

  definePageMeta({
    layout: "layout",
  });
  </script>
  
  <style scoped>
  
  </style>