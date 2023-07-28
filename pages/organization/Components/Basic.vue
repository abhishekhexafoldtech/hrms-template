<template>
    <OrganizationLayout>
        <div class="mx-3 py-3">
            <div class="w-90 mt-3">
                <el-form v-model="formData" class="form" :disabled="!edit">
                    <div>
                        <div>
                            Company Name :
                        </div> <el-input type="text" v-model="formData.name"  />
                    </div>
                    <div>
                        <div>
                            Email :
                        </div> <el-input type="text" v-model="formData.email" />
                    </div>
                    <div>
                        <div>
                            Contact :
                        </div> <el-input type="text" v-model="formData.phone_number" />
                    </div>
                    <div v-if="formData.domain_name != '' || edit">
                        <div>
                            Domain :
                        </div> <el-input type="text" v-model="formData.domain_name" />
                    </div>
                    <div v-if="edit">
                        <div>
                            Logo :
                        </div> <el-input type="text" v-model="formData.logo" />
                    </div>
                </el-form>
                    <div class="link-main">
                        <div>
                            Website :
                        </div> 
                        <a href="https://hexafoldtech.com/" v-if="!edit">https://hexafoldtech.com/</a>
                        <el-input v-if="edit" v-model="formData.website"/>
                    </div>
                <div v-if="props.user" class="mt-3">
                    <el-button @click="handleEdit()" type="primary" class="mt-2 btn btn-primary" style="min-width:100px" >{{ edit ?
                        'Save' :
                        'Edit' }}</el-button>
                </div>
            </div>
        </div>
    </OrganizationLayout>
</template>

<script setup>
const edit = ref(false)
const formData = reactive({
    name: 'Hexafold Technologies Private Limited (Mumbai).',
    email: 'hexafold.tech@gmail.com',
    phone_number: '960636464',
    website: 'https://hexafoldtech.com/',
    domain_name: 'Blue ray automations',
    logo: 'https://hexafoldtech.com/wp-content/uploads/2023/02/horizontal-2.png'
})
function handleEdit(){
    if(edit.value){
        edit.value=false;
    }else{
        edit.value=true;
    }
}
const props = defineProps({
    user:{
        type:Boolean,
        default:false
    }
})
</script>

<style scoped>
.el-input {
    width: 400px;
    height: 40px;
    font-size: 16px;
}
.form{
    display: flex;
    flex-wrap: wrap;
    gap:10px;
    justify-content: space-between;
}
.link-main{
    font-size: 18px;
    margin-top: 10px;
}
.form>div {
    font-size: 18px;
    margin-top: 10px;
}
@media screen and (max-width:420px) {
    .el-input{
        width:360px;
    }
}
@media screen and (max-width:420px) {
    .el-input{
        width:320px;
    }
}

.el-button{
    width:150px;
    height:42px;
    margin-bottom: 20px;
}
</style>