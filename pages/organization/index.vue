<template>
  <div class="container mt-10">
      <div style="width:340px">
        <el-tabs v-model="activeName" class="demo-tabs" >
          <el-tab-pane label="Basic" name="first">
          </el-tab-pane>
          <el-tab-pane label="Address" name="second"></el-tab-pane>
          <el-tab-pane label="Socila Profile" name="third"></el-tab-pane>
          <el-tab-pane label="Policies" name="fourth"></el-tab-pane>
        </el-tabs>
      </div>
      <div>

      <OrganizationComponentsBasic v-if="activeName=='first'" :user="user"/>
      <OrganizationComponentsAddress v-if="activeName=='second'" :user="user"/>
      <OrganizationComponentsSocialProfile v-if="activeName == 'third'" :user="user"/>
      <OrganizationComponentsPolicies v-if="activeName == 'fourth'" :user="user"/>
    </div>
  </div>
</template>


<script setup>
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