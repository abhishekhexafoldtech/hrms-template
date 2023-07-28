<template>
  <div class="mt-8" style="margin: 15px;">
        <el-tabs type="border-card" v-model="activeName" class="demo-tabs" >
          <el-tab-pane label="Basic" name="first">
            <Basic v-if="activeName=='first'" :user="user"/>
          </el-tab-pane>
          <el-tab-pane label="Address" name="second">
            <Address v-if="activeName=='second'" :user="user" />
          </el-tab-pane>
          <el-tab-pane label="Socila Profile" name="third">
            <SocialProfile v-if="activeName == 'third'" :user="user"/>
          </el-tab-pane>
        </el-tabs>
  </div>
</template>


<script setup>
import Address from '@/pages/organization/components/Address';
import Basic from '@/pages/organization/components/Basic';
import SocialProfile from '@/pages/organization/components/SocialProfile';

const activeName = ref("first");
const user = ref(true);
definePageMeta({
  layout: "layout",
});
</script>

<style scoped>

</style>