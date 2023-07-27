<template>
    <div class="container mt-8">
        <div class="p-2 w-100" style="text-align: right;">
            <NuxtLink to="/policies/form">
              <el-button>+ Add Policy</el-button>
            </NuxtLink>
        </div>
        <Table tableHeading="Policies" 
              :tableConfig="policiesConfig" 
              :tableData="showRoleListData" 
              :tableQuery="listQuery"
              :tableCheckBoxVisibility="true" 
              :tableSearchVisibility="false"
              :viewButtonVisibility="true"
              @pagination="handlePagination()" 
              @edit="handleEditRole($event)" 
              @delete="handleDelete($event)"
              @multipleSelection="handleMultipleSelection($event)"
              
            />
    </div>
</template>

<script setup>
import Table from '~/components/Table.vue';

let roleListData = ref([
  {
    serial_number: 1,
    policy: "Attendance Policies.",
  },
  {
    serial_number: 2,
    policy: "Code Of Conduct"
  },

]);
const showRoleListData = ref(roleListData);
let policiesConfig = reactive([
  {
    label: "Company Policies",
    prop: "policy",
    width: "900",
    sortable: true,
    className: "redFont"
  },

]);
let listQuery = {
  page: 1,
  limit: 10,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
};
definePageMeta({
    layout: "layout",
});
</script>