<template>
    <div>
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a date"
            :default-value="date || new Date()"
            value-format="DD-MM-YYYY"
            :disabled-date="disabledDate"
        >
        <template #default="cell" v-if="holidays.length">
            <div class="cell" :class="{ current: cell.isCurrent }">
            <span class="text">{{ cell.text }}</span>
            <span v-if="isHoliday(cell)" class="holiday" />
            </div>
        </template>
    </el-date-picker>
    </div>
</template>

<script setup >
const emit = defineEmits();
// props
const props = defineProps({
    disablePast:{
        type: Boolean
    },
    disableFuture:{
        type : Boolean
    },
    disableFrom:{
        type:String,
        default:''
    },
    disableTo:{
        type:String,
        default:''
    },
    today:{
        type:Boolean
    },
    holidays:{
        type:Array,
        default:[]
    },
    showDate:{
        type:Number,
        default:0
    },
    disableYears:{
        type:Number
    }
});
// model reference value for el-ui component
let value1 = ref("");
    watch(value1,()=>{
        emit("handleDate",value1)
});
// date for intial date showing in el-ui component
let date = ref(null)
onMounted(()=>{
    // set the initial date to how many number of years to the past we want
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - props.showDate);
    date.value = currentDate;
})
// sets the holdays formate to template
const isHoliday = ({ dayjs }) => {
    if(props.holidays){
        return props.holidays.includes(dayjs.format('DD-MM-YYYY'))
    }
}
// disable dates feature
const disabledDate = (time) => {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    // disables the events which are already over
    if(props.disablePast){
        return time.getTime() < new Date(year, month, date);
    }
    // disable the events which not completed
    if(props.disableFuture){
        return time.getTime() > new Date(year, month, date);
    }
    // enble only the current event
    if(props.today){
        return (time.getTime() < new Date(year, month, date)) || (time.getTime() > new Date(year, month, date))
    }
    // disable event based number years passed
    if(props.disableYears){
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - props.disableYears);
        return !(time.getTime() < currentDate) && !(time.getTime() > new Date())
    }
    if(props.disableFrom.length || props.disableTo.length){
        // disble the events from a specic date to specific date
        if(props.disableFrom.length && props.disableTo.length){
            const disableFrom = props.disableFrom.split("-");
            const disableTo = props.disableTo.split("-");
            return !(time.getTime() < new Date(+disableFrom[2], +disableFrom[1]-1, +disableFrom[0])) && !(time.getTime() > new Date(+disableTo[0], +disableTo[1]-1, +disableTo[2]))
        }
        // disbale the events which are not over starts with the specified date
        else if(props.disableFrom.length){
            const disableFrom = props.disableFrom.split("-");
          return time.getTime() >= new Date(+disableFrom[2], +disableFrom[1]-1, +disableFrom[0]);
        }
        // disables the events which are over upto the specified date
        else if(props.disableTo.length){
            const disableTo = props.disableTo.split("-");
          return time.getTime() <= new Date(+disableTo[2], +disableTo[1]-1, +disableTo[0]);
        }
    }
    return false
}
</script>


<style scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: #626aef;
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--el-color-danger);
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
</style>