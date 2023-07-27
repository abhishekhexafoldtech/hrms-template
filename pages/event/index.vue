<template>
    <div class="mt-8">
        event
        <el-button type="primary" @click="handleAddEditEvent">Add Event</el-button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()

function handleAddEditEvent() {
  let r = "add";
  router.push(`event/${r}`);
}

definePageMeta({
    layout: "layout"
});
</script>