<template>
    <div class="main-container mx-5 mt-5" style="padding-top:10px">
        <!-- Header -->
        <div class="d-flex justify-content-between w-95 ">
            <div class="d-flex">
                <div class="head-status"></div>
                <div class="text-bold text-lg mx-3">{{ header }}</div>
            </div>
            <div><i class="fa fa-ellipsis-v"></i></div>
        </div>
        <!-- clients component -->
        <div v-if="!props.leave">
            <div class="d-flex flex-wrap user-container mt-4 mx-4">
                <div>
                    <img :src="props.users[0].img || defaultImg" width="50" height="50" />
                </div>
                <div>
                    <img :src="props.users[1].img || defaultImg" width="50" height="50" />
                </div>
                <div>
                    <img :src="props.users[2].img || defaultImg" width="50" height="50" />
                </div>
                <div>+ {{ users.length - 3 }}</div>
            </div>
            <div class="mt-2 mx-3 text-bold text-md py-3">{{ users.length }} {{ props.description }}</div>
        </div>
        <!-- client leaves component -->
        <div class="mx-3 py-2 mt-3 d-flex flex-wrap justify-content-around" v-if="props.leave">
            <el-progress type="dashboard" :percentage="percentage" :color="colors" />
            <div class="mx-2 mt-4">
                <p>used : <span class="text-danger text-bold">{{ 100 - percentage }}%</span></p>
                <p>available : <span class="text-success text-bold">{{ percentage }}%</span></p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    header: {
        type: String,
        required: true,
        default: "Statistics Chart"
    },
    leavesAvailablePercentage: {
        type: Number,
        default: 90
    },
    leave: {
        type: Boolean,
        default: false
    },
    users: {
        type: Array,
    },
    description: {
        type: String
    }
});
// default image
const defaultImg = ref("https://imgs.search.brave.com/DchBKQGDRoiMeLm2o77FsZZFxFggTvCqK5b9Oon2Wdk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tbGxq/Mmo4eHZmbDAuaS5v/cHRpbW9sZS5jb20v/Y2I6akM3ZS4zNzEw/OS93OmF1dG8vaDph/dXRvL3E6ZWNvL2Y6/YXZpZi9odHRwczov/L3RoZW1laXNsZS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMi9w/cm9maWxlLXByZXNz/LXNob3J0Y29kZXMu/anBn");
// leaves percentage setup
const percentage = ref(props.leavesAvailablePercentage);
const colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
]
// leaves percentage animation 
setInterval(() => {
    percentage.value = 10;
    setTimeout(() => {
        percentage.value = props.leavesAvailablePercentage;
    }, 500)
}, 5000)
</script>

<style scoped>
.main-container {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 13px;
}
.head-status {
    width: 7px;
    height: 25px;
    background-color: blue;
}
.user-container {
    gap: 10px;
}
.user-container>div {
    width: 50px;
    height: 50px;
    border-radius: 7px;
    overflow: hidden;
}
.user-container>div:nth-child(4) {
    padding: 12.5px;
    background-color: rgb(233, 233, 233);
}</style>
