<template>
  <div class="container mt-10">
      <div>
        <el-tabs v-model="activeName" class="demo-tabs" >
          <el-tab-pane label="Basic" name="first">
            <Basic v-if="activeName=='first'" :user="user"/>
          </el-tab-pane>
          <el-tab-pane label="Address" name="second">
            <Address v-if="activeName=='second'" :user="user"/>
          </el-tab-pane>
          <el-tab-pane label="Socila Profile" name="third">
            <SocialProfile v-if="activeName == 'third'" :user="user"/>
          </el-tab-pane>
          <el-tab-pane label="Policies" name="fourth">
            <Policies v-if="activeName == 'fourth'" :user="user"/>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div>

    </div>
  </div>
</template>


<script setup>
import Address from '~/pages/organization/Components/Address.vue';
import Basic from '~/pages/organization/Components/Basic.vue';
import Policies from '~/pages/organization/Components/Policies.vue';
import SocialProfile from '~/pages/organization/Components/SocialProfile.vue';

const activeName = ref("first");
const user = ref(true);
definePageMeta({
  layout: "layout",
});
</script>

<style scoped>
.container{
  font-family: sans-serif;
}
</style>