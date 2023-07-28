<template>
  <div class="mt-8" style="margin: 15px;">
    <div class="p-2 w-100" style="text-align: right;">
      <el-button type="primary" @click="handleAddEditHoliday">+ Add Holiday</el-button>
    </div>
    <Table tableHeading="Holidays" :tableConfig="holidaysConfig" :tableData="showHolidaysData" :tableQuery="listQuery"
      :tableSearchVisibility="false" :viewButtonVisibility="true" :downloadButtonVisibility="true"
      :editButtonVisibility="true" :deleteButtonVisibility="true" @pagination="handlePagination()"
      @view="handleViewDetails($event)" @dwonload="handleDownload($event)" @edit="handleAddEditHoliday($event)" />
    <HolidaysOverview v-if="overview" @close="handleOverviewClose" :data="overviewData" />
  </div>
</template>

<script setup>
import Table from '@/components/Table.vue';
import { useRouter } from "vue-router"
const router = useRouter();
const overview = ref(false);
const overviewData = ref(null)

function handleOverviewClose() {
  overview.value = false;
}

function handleAddEditHoliday(data) {
  if (data) {
    router.holidayData = data;
  }
  let r = "add";
  router.push(`holiday/${r}`);
}

function handleViewDetails(data) {
  overview.value = true;
  overviewData.value = data
  console.log('view', data)
}

function handleDownload(data) {
  console.log('download', data)
}

let holidayData = ref([
  {
    serial_number: 1,
    occation: "Republic Day",
    start:"Thu Jul 13 2023",
    start_date: "Thu Jul 13 2023 00:00:00 GMT+0530 (India Standard Time)",
    end:"Thu Jul 13 2023",
    end_date: "Thu Jul 13 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque provident perferendis facere tenetur, nam voluptatum dolorem dolores. Iusto eligendi dicta esse expedita libero ipsam atque voluptatibus maiores laudantium, quasi non!Deserunt ut maxime explicabo. Suscipit assumenda modi sint mollitia reiciendis libero soluta dignissimos distinctio culpa fugiat officia hic quasi, aliquam quos quidem illo expedita. Dolorem reiciendis eaque inventore voluptatum excepturi.Omnis dolores eaque nihil vitae consequuntur consequatur reprehenderit corrupti expedita officia explicabo quibusdam asperiores recusandae quaerat praesentium officiis id sapiente optio, voluptatum nesciunt voluptates dignissimos assumenda libero. Officiis, expedita ab Libero alias iste aliquam cupiditate reiciendis officia illum minus qui dolore fuga et ratione recusandae dicta perspiciatis sint at ipsam eveniet temporibus, vero suscipit natus assumenda eos fugiat! Magnam, quas! Odit odio laudantium atque ea ex suscipit perspiciatis quod labore deserunt. Totam unde ipsam et animi natus? Iure eaque dicta, doloremque enim sit vero odit expedita dignissimos sequi ipsa? Soluta? Autem aliquam quo ex consequatur reprehenderit facilis deleniti possimus dolor accusantium eveniet similique cum consequuntur debitis suscipit placeat libero laborum voluptatum distinctio assumenda vel, incidunt unde excepturi veritatis! Velit, fugiat. Eaque ducimus facilis illo perferendis nostrum, et non in omnis illum architecto iste porro aspernatur. Ullam, consectetur explicabo fugiat laborum adipisci tempore perspiciatis maiores perferendis, aliquid esse aut veniam voluptatibus? Aut, magnam. At saepe maiores necessitatibus tempore sunt adipisci recusandae facere fugit beatae officiis inventore libero provident ullam eveniet possimus, illo soluta tenetur error? Vel, voluptate odio? Possimus, laboriosam minus? Cum facere nemo nihil, neque reiciendis inventore porro id similique sapiente possimus. Dicta fugit animi commodi aut earum in. Maxime delectus quis ipsam deleniti reprehenderit et quos assumenda necessitatibus veniam.Pariatur voluptatum eum alias iusto natus porro quasi, ipsum incidunt reiciendis rem cum recusandae, voluptates saepe! Aut tenetur, est excepturi libero delectus reiciendis voluptatem fugit rerum, debitis deserunt soluta iure."
  },
  {
    serial_number: 2,
    occation: "Independence Day",
    start:"Thu Jun 13 2023",
    start_date: "Thu Jun 13 2023 00:00:00 GMT+0530 (India Standard Time)",
    end:"Thu Jun 13 2023",
    end_date: "Thu Jun 13 2023 00:00:00 GMT+0530 (India Standard Time)",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque provident perferendis facere tenetur, nam voluptatum dolorem dolores. Iusto eligendi dicta esse expedita libero ipsam atque voluptatibus maiores laudantium, quasi non!Deserunt ut maxime explicabo. Suscipit assumenda modi sint mollitia reiciendis libero soluta dignissimos distinctio culpa fugiat officia hic quasi, aliquam quos quidem illo expedita. Dolorem reiciendis eaque inventore voluptatum excepturi.Omnis dolores eaque nihil vitae consequuntur consequatur reprehenderit corrupti expedita officia explicabo quibusdam asperiores recusandae quaerat praesentium officiis id sapiente optio, voluptatum nesciunt voluptates dignissimos assumenda libero. Officiis, expedita ab Libero alias iste aliquam cupiditate reiciendis officia illum minus qui dolore fuga et ratione recusandae dicta perspiciatis sint at ipsam eveniet temporibus, vero suscipit natus assumenda eos fugiat! Magnam, quas! Odit odio laudantium atque ea ex suscipit perspiciatis quod labore deserunt. Totam unde ipsam et animi natus? Iure eaque dicta, doloremque enim sit vero odit expedita dignissimos sequi ipsa? Soluta? Autem aliquam quo ex consequatur reprehenderit facilis deleniti possimus dolor accusantium eveniet similique cum consequuntur debitis suscipit placeat libero laborum voluptatum distinctio assumenda vel"
  },

]);
const showHolidaysData = ref(holidayData);

// change date formate to show;
function setDate(date){
  const year = ['Jan',"Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jun"];
  const month = year.indexOf(date[1])+1;
  const day = date[2];
  const year_num = date[3];
  return `${day}-${month}-${year_num}`
}

onMounted(()=>{
  for(let i=0;i<holidayData.value.length;i++){
    const start_date = holidayData.value[i].start_date.split(" ");
    const new_start_date = setDate(start_date);
    holidayData.value[i].start = new_start_date;
    const end_date = holidayData.value[i].end_date.split(" ");
    const new_end_date = setDate(end_date);
    holidayData.value[i].end = new_end_date;
  }
})

let holidaysConfig = reactive([
  {
    label: "Occation",
    prop: "occation",
    width: "300",
    sortable: true,
    className: "redFont"
  },
  {
    label: "Start Date",
    prop: "start",
    width: "300",
    sortable: true,
    className: "redFont"
  },
  {
    label: "End Date",
    prop: "end",
    width: "300",
    sortable: true,
    className: "redFont"
  }
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