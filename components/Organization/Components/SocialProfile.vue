<template>
    <OrganizationLayout>
        <div class="mx-3 py-4">
            <div class="d-flex" style="gap:10px">
                <a :href="!edit ? link.link_linkedin : null" :target="!edit ? '__blank' : null">
                    <button class="btn btn-primary d-flex">
                        <img :src="linkedin" alt="" />
                        <el-input class="mx-2" v-if="edit" v-model="link.link_linkedin"/>
                        <div class="mx-4" style="font-size: 17px;width:100px" v-if="!edit">Linkedin</div>
                    </button>
                </a>
                <el-tooltip class="box-item" effect="dark" content="Copy" placement="top-start" v-if="!edit">
                    <button class="btn btn-primary" id="linkedin_copy" @click="handleCopy('linkedin')">
                        <img :src="copy" alt="">
                    </button>
                </el-tooltip>
            </div>
            <div class="d-flex" style="gap:10px">
                <a :href="!edit ? link.link_facebook : null" :target="!edit ? '__blank' : null">
                    <button class="btn btn-primary d-flex">
                        <img :src="facebook" alt="" />
                        <el-input class="mx-2" v-if="edit" v-model="link.link_facebook"/>
                        <div class="mx-4" style="font-size: 17px;width:100px" v-if="!edit">Facebook</div>
                    </button>
                </a>
                <el-tooltip class="box-item" effect="dark" content="Copy" placement="top-start" v-if="!edit">
                    <button class="btn btn-primary" id="facebook_copy" @click="handleCopy('facebook')">
                        <img :src="copy" alt="">
                    </button>
                </el-tooltip>
            </div>
            <div class="d-flex" style="gap:10px">
                <a :href="!edit ? link.link_twitter : null" :target="!edit ? '__blank' : null">
                    <button class="btn btn-primary d-flex">
                        <img :src="twitter" alt="" />
                        <el-input class="mx-2" v-if="edit" v-model="link.link_twitter"/>
                        <div class="mx-4" style="font-size: 17px;width:100px" v-if="!edit">twitter</div>
                    </button>
                </a>
                <el-tooltip class="box-item" effect="dark" content="Copy" placement="top-start" v-if="!edit">
                    <button class="btn btn-primary" id="twitter_copy" @click="handleCopy('twitter')">
                        <img :src="copy" alt="">
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
import linkedin from "@/assets/svg/linkedin.svg";
import facebook from "@/assets/svg/facebook.svg";
import twitter from "@/assets/svg/twitter.svg";
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