<template>
    <OrganizationLayout>
        <div class="mx-3 py-4">
            <div class="d-flex" style="gap:10px">
                <a :href="!edit ? link.link_linkedin : null" :target="!edit ? '__blank' : null">
                    <button class="btn btn-primary d-flex">
                        <font-awesome-icon :icon="['fab', 'linkedin']" style="width:23px"/>
                        <el-input class="mx-2" v-if="edit" v-model="link.link_linkedin"/>
                        <div class="mx-4" style="font-size: 17px;width:100px" v-if="!edit">Linkedin</div>
                    </button>
                </a>
                <el-tooltip class="box-item" effect="dark" content="Copy" placement="top-start" v-if="!edit">
                    <button class="btn btn-primary px-3" id="linkedin_copy" @click="handleCopy('linkedin')">
                        <font-awesome-icon :icon="['fas', 'copy']" style="width:25px"/>
                    </button>
                </el-tooltip>
            </div>
            <div class="d-flex" style="gap:10px">
                <a :href="!edit ? link.link_facebook : null" :target="!edit ? '__blank' : null">
                    <button class="btn btn-primary d-flex">
                        <font-awesome-icon :icon="['fab', 'square-facebook']" style="width:23px"/>
                        <el-input class="mx-2" v-if="edit" v-model="link.link_facebook"/>
                        <div class="mx-4" style="font-size: 17px;width:100px" v-if="!edit">Facebook</div>
                    </button>
                </a>
                <el-tooltip class="box-item" effect="dark" content="Copy" placement="top-start" v-if="!edit">
                    <button class="btn btn-primary px-3" id="facebook_copy" @click="handleCopy('facebook')">
                        <font-awesome-icon :icon="['fas', 'copy']" style="width:25px"/>
                    </button>
                </el-tooltip>
            </div>
            <div class="d-flex" style="gap:10px">
                <a :href="!edit ? link.link_twitter : null" :target="!edit ? '__blank' : null">
                    <button class="btn btn-primary d-flex">
                        <font-awesome-icon :icon="['fab', 'square-twitter']" style="width:23px"/>
                        <el-input class="mx-2" v-if="edit" v-model="link.link_twitter"/>
                        <div class="mx-4" style="font-size: 17px;width:100px" v-if="!edit">twitter</div>
                    </button>
                </a>
                <el-tooltip class="box-item" effect="dark" content="Copy" placement="top-start" v-if="!edit">
                    <button class="btn btn-primary px-3" id="twitter_copy" @click="handleCopy('twitter')">
                        <font-awesome-icon :icon="['fas', 'copy']" style="width:25px"/>
                    </button>
                </el-tooltip>
            </div>
            <div>
                <el-button v-if="props.user" @click="handleEdit()" type="primary" class="mt-2 btn btn-primary">{{ edit ? 'Save' : 'Edit' }}</el-button>
            </div>
        </div>
    </OrganizationLayout>
</template>

<script setup>
import copy from "@/assets/svg/copy.svg";
import { ElNotification } from 'element-plus';

const edit = ref(false)


const link = reactive({
    link_linkedin: 'https://linkedin.com',
    link_facebook: 'https://facebook.com',
    link_twitter: 'https://twitter.com',
});


async function readCopyClipBoard() {
    const data = await navigator.clipboard.readText();
    return data;
}

function handleEdit(){
    if(edit.value){
        edit.value=false;
    }else{
        edit.value=true;
    }
}

async function handleCopy(text) {
    if (text === 'linkedin') {
        const cb = navigator.clipboard;
        cb.writeText(link.link_linkedin);
        ElNotification({
            title: 'Copied',
            message:  link.link_linkedin,
            type:'success'
        })
    }else if(text == 'facebook'){
        const cb = navigator.clipboard;
        cb.writeText(link.link_facebook);
        ElNotification({
            title: 'Copied',
            message:  link.link_facebook,
            type:'success'
        })
    }else if(text == 'twitter'){
        const cb = navigator.clipboard;
        cb.writeText(link.link_twitter);
        ElNotification({
            title: 'Copied',
            message:  link.link_twitter,
            type:'success'
        })
    }

    const data = await readCopyClipBoard();
    console.log(data)
}

const props = defineProps({
    user:{
        type:Boolean,
        default:false
    }
})
</script>

<style scoped>
.el-input{
    position: relative;
    top:-3px;
    width: 250px;
}
.el-button{
    width:150px;
    height:42px;
    margin-bottom: 20px;
}
</style>