<template>
  <div class="mt-8" style="margin: 15px">
    <div class="p-2 w-100" style="text-align: right">
      <el-button type="primary" @click="handleAddEditHoliday"
        >+ Add Employee</el-button
      >
    </div>
    <Table
      tableHeading="Employee"
      :tableConfig="employeeConfig"
      :tableData="showHolidaysData"
      :tableQuery="listQuery"
      :tableSearchVisibility="false"
      :viewButtonVisibility="true"
      :downloadButtonVisibility="true"
      :editButtonVisibility="true"
      :deleteButtonVisibility="true"
      @pagination="handlePagination()"
      @view="handleViewDetails($event)"
      @dwonload="handleDownload($event)"
      @edit="handleAddEditHoliday($event)"
    />
    <!-- <Overview v-if="overview" @close="handleOverviewClose" :data="overviewData" /> -->
  </div>
</template>

<script setup>
// import Overview from '@/components/';
import Table from "@/components/Table.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const overview = ref(false);
const overviewData = ref(null);

function handleOverviewClose() {
  overview.value = false;
}

function handleAddEditHoliday(data) {
  if (data) {
    router.employeeData = data;
  }
  let r = "create-employee";
  router.push(`employee/${r}`);
}

function handleViewDetails(data) {
  overview.value = true;
  overviewData.value = data;
  console.log("view", data);
}

function handleDownload(data) {
  console.log("download", data);
}

let employeeData = ref([
  {
    serial_number: 1,
    first_name: "Ganesh",
    gender: "Male",
    date_of_birth: "01/01/1999",
    phone: "9568425186",
    email:"test@gmail.com"
  },
  {
    serial_number: 1,
    first_name: "Ganesh",
    gender: "Male",
    date_of_birth: "01/01/1999",
    phone: "9568425186",
    email:"test@gmail.com"
  },
  {
    serial_number: 1,
    first_name: "Ganesh",
    gender: "Male",
    date_of_birth: "01/01/1999",
    phone: "9568425186",
    email:"test@gmail.com"
  },

]);
const showHolidaysData = ref(employeeData);


onMounted(() => {
 
  
});

let employeeConfig = reactive([
  {
    label: "First Name",
    prop: "first_name",
    width: "250",
    sortable: true,
    className: "redFont",
  },
  {
    label: "Gender",
    prop: "gender",
    width: "250",
    sortable: true,
    className: "redFont",
  },
  {
    label: "Date of Birth",
    prop: "date_of_birth",
    width: "250",
    sortable: true,
    className: "redFont",
  },
  {
    label: "Phone",
    prop: "phone",
    width: "250",
    sortable: true,
    className: "redFont",
  },
  {
    label: "Email",
    prop: "email",
    width: "250",
    sortable: true,
    className: "redFont",
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
