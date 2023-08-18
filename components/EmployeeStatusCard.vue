<template>
    <div style="min-width:400px;height:200px;">
            <!-- heading -->
            <div class="d-flex header" style="gap:15px;width:max-content">
                <div :style="`background-color:${color};width:4px;height:20px`" class="mt-1"></div>
                <div class="text-dark text-lg">
                    {{ heading }}
                </div>
            </div>
        <div class="main-content d-flex" v-if="!deskTime" style="justify-content: space-between;">
            <!-- total emploees -->
            <div class="main-content-left" v-if="!deskTime" style="height:92px">
                <div :style="`color:${color};`">{{ totalEMployees }}</div>
                <p>{{ eDescription }}</p>
            </div>
            <!-- employees img -->
            <div class="employees">
                    <img :src="props.employees[0].img" alt="" width="55" height="55" class="rounded-3" v-if="props.employees.length >= 1">
                <img :src="props.employees[1].img" alt="" width="55" height="55" class="rounded-3" v-if="props.employees.length >= 2">
                <img :src="props.employees[2]?.img" alt="" width="55" height="55" class="rounded-3" v-if="props.employees.length >= 3">
                <div :style="`background-color:${color}`" class="rounded-3" v-if="props.employees.length > 3">+{{ props.employees.length - 3 }}</div>
            </div>
        </div>
        <!-- desktime component -->
        <div v-if="deskTime" class="">
            <div class="d-flex justify-content-between mt-3 timings">
                <div>10:00 AM</div>
                <div>07:30 PM</div>
            </div>
            <div class="progress mt-1" style="width:270px;height:10px">
                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" :style="`width: ${progressPercent}%;background: linear-gradient(270.49deg, #A368BE -10.52%, rgba(163, 104, 190, 0.15) 91.88%);
                ;height:10px`" aria-valuemax="100"></div>
            </div>
            <div class="d-flex justify-content-between mt-3">
                <div class="count-time">{{ hour + ':' + minute + ":" + seconds}}</div>
                <el-button style="background-color:rgba(163, 104, 190, 1);margin-top: 5px;" class="text-white">Take a Break</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    heading: {
        type: String,
        default: "Working Remotely"
    },
    color: {
        type: String,
        default: "#FD7D55"
    },
    eDescription: {
        type: String,
    },
    employees: {
        type: Array,
        default: [],
        required: false
    },
    deskTime : {
        type: Boolean,
        default:false
    }
});
const time = reactive({
    hours:+"00",
    minutes:+"00",
    seconds:+"00"
});
const progressPercent = ref(45);
const totalEMployees = computed(() => {
    if (props.employees.length < 10) {
        return `0${props.employees.length}`
    };
    return props.employees.length
});
const hour = computed(()=>{
    if(time.hours < 10){
        return `0${time.hours}`
    }
    return time.hours
});
const minute = computed(()=>{
    if(time.minutes < 10){
        return `0${time.minutes}`
    }
    return time.minutes
})
const seconds = computed(()=>{
    if(time.seconds < 10) return `0${time.seconds}`
    return time.seconds
})
const timer = () =>{
    const totalTime = (9*60) + 30;
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    if(currentHour <= 10 || currentHour > 19 || (currentHour == 19 && currentMinute > 30)){
        time.hours = 0;
        time.minutes = 0;
        time.seconds = 0;
        return
    }
    if(currentHour == 10 || currentHour > 10){
        time.hours = date.getHours()-10;
        time.minutes = date.getMinutes();
        time.seconds = date.getSeconds();
        const timePassed = (time.hours*60) + time.minutes;
        progressPercent.value = (timePassed/totalTime)*100
    }
    window.requestAnimationFrame(timer);
};
onMounted(() => {
    timer()
})
</script>

<style scoped>
.header>div:nth-child(2) {
    font-weight: 600;
    size: 20px;
    line-height: 27.24px;
}

.main-content-left {
    position: relative;
    top: 10px;
}
.main-content-left>div:nth-child(1) {
    font-weight: 700;
    line-height: 60px;
    font-size: 60px;
    margin-left: 10px;
    padding-bottom: 5px;
}
.main-content-left>p {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    color: #2A3547
}
.employees {
    width: 135px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 25px;
    position: relative;
    top:-30px
}
.employees>img {
    margin: 5px
}
.employees>div {
    width: 55px;
    height: 55px;
    background-color: rgb(224, 224, 224);
    text-align: center;
    line-height: 3.5;
    font-weight: bold;
    color: white;
    margin: 5px;
}
.timings>div {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
}
.count-time {
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 2px;
    color: rgba(163, 104, 190, 1);
}
</style>