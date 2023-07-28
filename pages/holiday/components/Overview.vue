<template>
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
            </div>form 
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
  
  const visible = ref(true);
  let emit = defineEmits();
  const props = defineProps({
    data:Object
  })
  function handleClose(){
    emit("close")
  }
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>