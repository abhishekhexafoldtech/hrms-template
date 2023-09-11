<template>
  <section class="leave_wrap mb-">
    <h3>Leaves</h3>
    <div class="leave_right">
      <button class="theme_black_btn" @click="handleDialogFormVisible">+ Apply Leave </button>
    </div>
  </section>
  <div class="mt-8" style="margin: 15px;">
    <!-- <div class="p-2 w-100" style="text-align: right;">
      <el-button type="primary" @click="handleDialogFormVisible">+ Apply Leave </el-button>
    </div> -->
    <Table tableHeading="" 
      :tableConfig="policiesConfig" 
      :tableData="showRoleListData" 
      :tableQuery="listQuery"
      :tableSearchVisibility="false"
      @pagination="handlePagination()" 
      @edit="handleEdit($event)" 
      @delete="handleDelete($event)"
    />

      <leaveForm ref="dialogFormVisibleRef" />
  </div>
</template>
<script setup>
import {ref} from "vue";
import Table from '@/components/Table.vue';
import leaveForm from "./leaveForm.vue";

//called Chil component function
const dialogFormVisibleRef = ref(null);
const handleDialogFormVisible = () => {
  dialogFormVisibleRef.value.dialogFormVisibleFun();
};


let roleListData = ref([
{
    type: "Leave 1",
    duration: "Full Day",
    start_date: "29-07-2023",
    end_date: "29-07-2023",
    status: "Pending"
  },
  {
    type: "Leave 2",
    duration: "Half Day",
    start_date: "29-07-2023",
    end_date: "30-07-2023",
    status: "Pending"

  },
 

]);
const showRoleListData = ref(roleListData);
let policiesConfig = reactive([
{
    label: "Type",
    prop: "type",
    width: "200",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Duration",
    prop: "duration",
    width: "200",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Start Date",
    prop: "start_date",
    width: "200",
    sortable: true,
    className: "redFont"
  },
  {
    label: "End Date",
    prop: "end_date",
    width: "200",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Status",
    prop: "status",
    width: "200",
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
<style scoped lang="scss">
.leave_wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px 0px;

  h3 {
    color: var(--text-primary);
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    margin: 0;
  }

  .leave_right {
    display: flex;
    align-items: center;
  }
}
</style>
