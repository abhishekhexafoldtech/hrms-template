<template>
    <div class="mt-8" style="margin: 15px;">
        <div class="p-2 w-100" style="text-align: right;">
            <el-button type="primary" @click="handleDialogFormVisible">+ Add Expence</el-button>
        </div>
          
        <Table tableHeading="Expenses" 
              :tableConfig="tableRowHeading" 
              :tableData="showRoleListData" 
              :tableQuery="listQuery"
              :tableSearchVisibility="false"
              :viewButtonVisibility="false"
              :downloadButtonVisibility="false"
              :editButtonVisibility="true"
              :deleteButtonVisibility="true"
              @pagination="handlePagination()" 
              @view="handleViewDetails($event)" 
              @dwonload="handleDownload($event)"
            />	
          <expenseForm ref="dialogFormVisibleRef"/>
    </div>
</template>



<script setup>
import Table from '@/components/Table.vue';
import { ref } from 'vue'; // Import the 'ref' and 'computed' functions from Vue
// import { useRouter } from 'vue-router';
import expenseForm from './expenseForm.vue';

// const router = useRouter();

//called Child component function
const dialogFormVisibleRef = ref(null);
const handleDialogFormVisible = () => {
  dialogFormVisibleRef.value.dialogFormVisibleFun();
};



let roleListData = ref([
  {
    serial_number: 1,
    itemName: "Redmi note 9 pro max",
    price: `500$`,
    purchaseDate: `29-07-2023`
  },
  {
    serial_number: 2,
    itemName: "Poco m2 pro ",
    price: `500$`,
    purchaseDate: `29-07-2023`
  },
  {
    serial_number: 3,
    itemName: "Iphone 14 pro max",
    price: `500$`,
    purchaseDate: `29-07-2023`
  },
]);


const showRoleListData = ref(roleListData);
let tableRowHeading = reactive([
  {
    label: "Item Name",
    prop: "itemName",
    width: "400",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Price",
    prop: "price",
    width: "400",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Purchase Date",
    prop: "purchaseDate",
    width: "400",
    sortable: true,
    className: "redFont"
  },
  

]);
let listQuery = {
  page: 1,
  limit: 2,
  search: "",
  searchJoin: "or",
  orderBy: "created_at",
  sortedBy: "desc",
};

const handleEdit = (index, row) => {
  console.log(index, row);
};
const handleDelete = (index, row) => {
  console.log(index, row);
};

function handleAddExpense() {
  let a = "add";
  router.push(`expense/${a}`);
}

definePageMeta({
  layout: "layout"
});
</script>


