<template>
    <div class="mt-8" style="margin: 15px;">
        <div class="p-2 w-100" style="text-align: right;">
            <el-button type="primary" @click="handleAddEditPolicy">+ Add Policy</el-button>
        </div>
        <Table tableHeading="Policies" 
              :tableConfig="policiesConfig" 
              :tableData="showRoleListData" 
              :tableQuery="listQuery"
              :tableSearchVisibility="false"
              :viewButtonVisibility="true"
              :downloadButtonVisibility="true"
              :editButtonVisibility="false"
              :deleteButtonVisibility="false"
              @pagination="handlePagination()" 
              @view="handleViewDetails($event)" 
              @dwonload="handleDownload($event)"
            />
    </div>
</template>

<script setup>
import Table from '@/components/Table.vue';
import { useRouter } from "vue-router"
const router = useRouter()

function handleAddEditPolicy() {
  let r = "add";
  router.push(`policies/${r}`);
}

function handleViewDetails(data){
  console.log('view', data)
}

function handleDownload(data){
  console.log('download', data)
}

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