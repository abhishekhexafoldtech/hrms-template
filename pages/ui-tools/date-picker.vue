<template>
    <DatePicker @handleDate="handleDate" :disableYears="3" />
</template>

<script setup>
const holidays = ref([
    "01-08-2023"
])
function handleDate(date){
    console.log("selected date",date)
}
</script>

