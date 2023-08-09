<template>
  <!-- element dialog for overview of the holiday -->
    <el-dialog
      v-model="visible"
      :title="data.occation"
      width="50%"
      align-top
    >
      <div>
        <div>
            <div>
                <span class="text-bold text-lg" style="min-width:100px">From : </span> {{ data.start  }}
            </div>
            <div >
                <span class="text-bold text-lg"> To : </span>  {{ data.end }}
            </div>
            </div> 
        <div class="mt-3 " v-if="data.description">
            <h5>Description</h5>
            <div>
                <p>{{ data.description }}</p>
            </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleClose">
            OK
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  <script  setup>
  // visibility contoller for element dialog 
  const visible = ref(true);
  let emit = defineEmits();
  // props data object contaions all the holiday information
  const props = defineProps({
    data:Object
  })
  // closing dialog controller function
  function handleClose(){
    emit("close")
  }
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>