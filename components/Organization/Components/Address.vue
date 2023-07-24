<template>

    <OrganizationLayout>
        <div class="address-main w-70 py-3" >
            <div>
                <div style="font-size: 30px;font-weight: bold;" class="text-primary">Residential Address </div>
                <div>
                    <el-form class="form">
                        <div v-if="residentialForm.adddres || editResidentail">
                            <div>
                                Address : <span class="address-content" v-if="!editResidentail">
                                    {{ residentialForm.adddres }}
                                </span>
                            </div>
                            <div>
                                <el-input type="text" v-if="editResidentail" v-model="residentialForm.adddres"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                City : <span class="address-content" v-if="!editResidentail">
                                    {{ residentialForm.city }}
                                </span>
                            </div>
                            
                            <div>
                                <el-input type="text" v-if="editResidentail" v-model="residentialForm.city"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                State : <span class="address-content" v-if="!editResidentail">
                                   {{ residentialForm.state }}
                                </span>
                            </div>
                           
                            <div>
                                <el-input type="text" v-if="editResidentail" v-model="residentialForm.state"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                Pin : <span class="address-content" v-if="!editResidentail">
                                   {{ residentialForm.pin }}
                                </span>
                            </div>
                           
                            <div>
                                <el-input type="text" v-if="editResidentail" v-model="residentialForm.pin"/>
                            </div>
                        </div>
                        <div class="py-4" v-if="props.user">
                            <el-button type="primary" class="btn btn-primary" @click="handleEditResidential">{{!editResidentail ? 'Edit' : 'Save'}}</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
            <div>
                <div style="font-size: 30px;font-weight: bold;" class="text-primary">Corporate Office Address</div>
                <div>
                    <el-form class="form" :model="corporateForm">
                        <div>
                            <div>
                                Address : <span class="address-content" v-if="!editCorporate">
                                  {{ corporateForm.adddres }}
                                </span>
                            </div>
                            <div>
                                <el-input type="text" v-if="editCorporate" v-model="corporateForm.adddres"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                City : <span class="address-content" v-if="!editCorporate">
                                    {{corporateForm.city}}
                                </span>
                            </div>
                            
                            <div>
                                <el-input type="text" v-if="editCorporate" v-model="corporateForm.city"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                State : <span class="address-content" v-if="!editCorporate">
                                   {{corporateForm.state}}
                                </span>
                            </div>
                           
                            <div>
                                <el-input type="text" v-if="editCorporate" v-model="corporateForm.state"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                Pin : <span class="address-content" v-if="!editCorporate">
                                   {{corporateForm.pin}}
                                </span>
                            </div>
                           
                            <div>
                                <el-input type="text" v-if="editCorporate" v-model="corporateForm.pin"/>
                            </div>
                        </div>
                        <div class="py-4" v-if="props.user">
                            <el-button type="primary" class="btn btn-primary" @click="handleEditCorporate">{{!editCorporate ? 'Edit' : 'Save'}}</el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </OrganizationLayout>

</template>

<script setup>
const editResidentail = ref(false);
const editCorporate = ref(false);
const residentialForm = reactive(
    {
        adddres: " 1-46/B ,Perakalapadu, kanchikcherla ,Vijayawada.",
        city: "Vijayawada",
        state:'Andhra Pradesh',
        pin:'521180'
    }
);
const corporateForm = reactive(
    {
    adddres: " 1-46/B ,Perakalapadu, kanchikcherla ,Vijayawada.",
        city: "Vijayawada",
        state:'Andhra Pradesh',
        pin:'521180'
    }
)
function handleEditResidential(){
    if(editResidentail.value){
        console.log(residentialForm)
        editResidentail.value = false;
    }else{
        editResidentail.value = true;
    }
}
function handleEditCorporate(){
    if(editCorporate.value){
        console.log(corporateForm)
        editCorporate.value = false;
    }else{
        editCorporate.value = true;
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
.address-main{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 18px;
    padding: 50px;
}
.el-input{
    width:350px;
    height: 42px;
}
.address-content{
    font-size: 18px;
    color:black;
}
.el-button{
    width:150px;
    height: 42px;
}
.form{
    font-size: 19px;
    width:350px;
}
@media screen and (max-width:430px) {
    .address-main{
        padding: 10px;
    }
    .el-input{
        width: 320px;
    }
}
</style>