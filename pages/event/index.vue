<template>
    <div class="mt-8" style="margin: 15px;">
        <div class="p-2 w-100" style="text-align: right;">
            <el-button type="primary" @click="handleAddEditEvent">+ Add Event</el-button>
        </div>
        <Table tableHeading="Events" 
              :tableConfig="policiesConfig" 
              :tableData="showRoleListData" 
              :tableQuery="listQuery"
              :tableSearchVisibility="false"
              @pagination="handlePagination()" 
              @edit="handleEdit($event)" 
              @delete="handleDelete($event)"
            />
    </div>
</template>

<script setup>
import Table from '@/components/Table.vue';
import { useRouter } from "vue-router"
const router = useRouter()

function handleAddEditEvent() {
  let r = "add";
  router.push(`event/${r}`);
}

let roleListData = ref([
  {
    title: "Title 1",
    start_date: "29-07-2023",
    end_date: "29-07-2023",
  },
  {
    title: "Title 2",
    start_date: "29-07-2023",
    end_date: "30-07-2023",
  },
 

]);
const showRoleListData = ref(roleListData);
let policiesConfig = reactive([
  {
    label: "Event Title",
    prop: "title",
    width: "400",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Start Date",
    prop: "start_date",
    width: "400",
    sortable: true,
    className: "redFont"
  },
  {
    label: "End Date",
    prop: "end_date",
    width: "400",
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

function handleEdit(data) {
    console.log('edit',data)
}

function handleDelete(data) {
    console.log('delete', data)
}


definePageMeta({
    layout: "layout"
});
</script>