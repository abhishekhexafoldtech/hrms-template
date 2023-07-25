<template>
    <OrganizationLayout>
        <div class="policy-container">
            <div>
                <div v-for="policy in policiesForm" class="policy-main" :key="policy.id">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="d-flex w-100" v-if="policy.title">
                            <h4 v-if="policy.id != textCorrection.title.id">{{ policy.title }}</h4>
                            <div class="d-flex" v-if="props.user">
                                <el-input type="text" v-if="policy.id == textCorrection.title.id"
                                    v-model="textCorrection.title.text" style="width:250px" />
                                <i class="fa fa-check-square-o mx-2 mt-1 cursor-pointer" aria-hidden="true"
                                    style="color: #3a7939;margin-top: -3px;font-size: 27px;"
                                    v-if="policy.id == textCorrection.title.id" @click="handleCorrection('title')"></i>
                            </div>
                            <div v-if="props.user"
                                style="display: flex;gap:10px;margin-top: 8px;margin-left: 15px;width: 100%;justify-content: end;">
                                <i class="fa fa-pencil-square-o cursor-pointer" aria-hidden="true"
                                    @click="handleEdit(policy.id, 'title')" style="color: #b5b9bf;font-size:16px"
                                    v-if="policy.id != textCorrection.title.id"></i>
                                <i class="fa fa-trash-o cursor-pointer" aria-hidden="true"
                                    style="color: #bf4040;font-size:16px" @click="handleDelete(policy.id, 'title')"></i>
                            </div>
                        </div>
                    </div>
                    <div class="sub d-flex" v-if="policy.sub_title">
                        <div v-if="policy.id != textCorrection.sub.id">
                            {{ policy.sub_title }}
                        </div>
                        <div class="d-flex" v-if="props.user">
                            <el-input type="text" v-if="policy.id == textCorrection.sub.id"
                                v-model="textCorrection.sub.text" style="min-width:100%" />
                            <i class="fa fa-check-square-o mx-2 mt-1 cursor-pointer" aria-hidden="true"
                                style="color: #3a7939;font-size: 27px;" v-if="policy.id == textCorrection.sub.id"
                                @click="handleCorrection('sub')"></i>
                        </div>
                        <div v-if="props.user"
                            style="display: flex;gap:10px;margin-top: 6px;margin-left: 15px;justify-content: end;width: 100%;">
                            <i class="fa fa-pencil-square-o cursor-pointer" aria-hidden="true"
                                @click="handleEdit(policy.id, 'sub')" style="color: #b5b9bf;font-size:16px"
                                v-if="policy.id != textCorrection.sub.id"></i>
                            <i class="fa fa-trash-o cursor-pointer" aria-hidden="true" style="color: #bf4040;font-size:16px"
                                @click="handleDelete(policy.id, 'sub')"></i>
                        </div>
                    </div>
                    <div class="content" v-if="policy.content">
                        <p v-if="policy.id != textCorrection.content.id">{{ policy.content }}</p>
                        <div v-if="props.user">
                            <el-input type="textarea" :rows="4" v-if="policy.id == textCorrection.content.id"
                                v-model="textCorrection.content.text" style="height: fit-content;" />
                            <i class="fa fa-check-square-o mx-1 mt-1 cursor-pointer" aria-hidden="true"
                                style="color: #3a7939;margin-top: -3px;font-size: 27px;"
                                v-if="policy.id == textCorrection.content.id" @click="handleCorrection('content')"></i>
                        </div>
                        <div v-if="props.user" class="mt-2  w-100" style="display: flex;gap:10px;justify-content: end;">
                            <i class="fa fa-pencil-square-o cursor-pointer" aria-hidden="true"
                                @click="handleEdit(policy.id, 'content')" style="color: #b5b9bf;font-size:16px"
                                v-if="policy.id != textCorrection.content.id"></i>
                            <i class="fa fa-trash-o cursor-pointer" aria-hidden="true" style="color: #bf4040;font-size:16px"
                                @click="handleDelete(policy.id, 'content')"></i>
                        </div>
                    </div>
                </div>
                <div v-if="props.user" class="container form">
                    <el-form :form="policiesFillForm">
                        <p>
                            Title
                        </p>
                        <el-input type="text" v-model="policiesFillForm.title" />
                        <p>
                            Sub Title
                        </p>
                        <el-input type="text" v-model="policiesFillForm.sub_title" />
                        <p>
                            Content
                        </p>
                        <el-input type="textarea" :rows="5" placeholder="" v-model="policiesFillForm.content" />
                        <div class="w-100" style="text-align: right;" >
                            <el-button class="btn btn-primary mt-5" type="primary" :disabled="!formFilled" @click="handleSave">
                                Save
                            </el-button>
                        </div>
                    </el-form>
                </div>
            </div>
        </div>
    </OrganizationLayout>
</template>

<script setup>
const formFilled = ref(false);
let textCorrection = reactive({
    title: {},
    sub: {},
    content: {}
});
const policiesForm = ref([
    {
        title: 'Main1',
        sub_title: 'subtitle1',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur, sequi accusantium doloremque debitis cupiditate provident ab voluptates qui earum, reiciendis recusandae maxime ut tempora quibusdam? Sapiente blanditiis dolor fuga?",
        id: 1
    },
    {
        title: 'Main2',
        sub_title: 'subtitle2',
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur, sequi accusantium doloremque debitis cupiditate provident ab voluptates qui earum, reiciendis recusandae maxime ut tempora quibusdam? Sapiente blanditiis dolor fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur, sequi accusantium doloremque debitis cupiditate provident ab voluptates qui earum, reiciendis recusandae maxime ut tempora quibusdam? Sapiente blanditiis dolor fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur, sequi accusantium doloremque debitis cupiditate provident ab voluptates qui earum, reiciendis recusandae maxime ut tempora quibusdam? Sapiente blanditiis dolor fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur, sequi accusantium doloremque debitis cupiditate provident ab voluptates qui earum, reiciendis recusandae maxime ut tempora quibusdam? Sapiente blanditiis dolor fuga?",
        id: 2
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur, sequi accusantium doloremque debitis cupiditate provident ab voluptates qui earum, reiciendis recusandae maxime ut tempora quibusdam? Sapiente blanditiis dolor fuga?",
        id: 3
    }
]);
const policiesFillForm = reactive({
    title: '',
    sub_title: '',
    content: ''
});
// form save option view
watch(policiesFillForm, () => {
    if (policiesFillForm.title != '' || policiesFillForm.sub_title != '' || policiesFillForm.content) {
        formFilled.value = true;
    } else {
        formFilled.value = false;
    }
});
// passing the proper arguments to the variables
const handleEdit = (id, type) => {
    if (type == 'title') {
        textCorrection.title.id = id;
        const text = policiesForm.value.find((policy, index) => {
            if (policy.id == textCorrection.title.id) {
                return policy.title;
            }
        });
        textCorrection.title.text = text.title;
        textCorrection.title.type = type;
    } else if (type == 'sub') {
        textCorrection.sub.id = id;
        const text = policiesForm.value.find((policy, index) => {
            if (policy.id == textCorrection.sub.id) {
                return policy;
            }
        });
        textCorrection.sub.text = text.sub_title;
        textCorrection.sub.type = type;
    } else if (type == 'content') {
        textCorrection.content.id = id;
        const text = policiesForm.value.find((policy, index) => {
            if (policy.id == textCorrection.content.id) {
                return policy;
            }
        });
        textCorrection.content.text = text.content;
        textCorrection.content.type = type;
    }
};
//  resetting the variables
const resetCorrection = (text) => {
    if (text == 'title') {
        textCorrection.title = {};
    } else if (text == 'sub') {
        textCorrection.sub = {};
    } else {
        textCorrection.content = {};
    }
}
// assigning proper values to the editing variable
const handleCorrection = (text) => {

    policiesForm.value.map((e) => {
        if (e.id == textCorrection.title.id || e.id == textCorrection.sub.id || e.id === textCorrection.content.id) {
            if (textCorrection.title.type === 'title') {
                e.title = textCorrection.title.text;
            } else if (textCorrection.sub.type === 'sub') {
                e.sub_title = textCorrection.sub.text;
            } else if (textCorrection.content.type === 'content') {
                e.content = textCorrection.content.text
            }
        }
    });
    resetCorrection(text);
};
//  checking the array os objects and removing the empty object
const handleObjCheck = (e, index) => {
    if (!e.title && !e.sub_title && !e.content) {
        policiesForm.value.splice(index, 1);
        console.log("removed empty object, index is " + index, policiesForm.value)
    }
}
// deleting an item
const handleDelete = (id, type) => {
    policiesForm.value.map((e, i) => {
        if (e.id == id) {
            if (type == 'title') {
                e.title = ''
            } else if (type == 'sub') {
                e.sub_title = ''
            } else if (type == 'content') {
                e.content = ''
            }
            const check = handleObjCheck(e, i);
        }
    });
};
// form adding a new policy
const handleSave = () => {
    const id = policiesForm.value[policiesForm.value.length - 1].id + 1;
    const new_policy = {
        title: policiesFillForm.title,
        sub_title: policiesFillForm.sub_title,
        content: policiesFillForm.content,
        id: id
    };
    policiesForm.value = [...policiesForm.value, new_policy];
    console.log(policiesForm.value);
    policiesFillForm.title = '';
    policiesFillForm.sub_title = '';
    policiesFillForm.content = '';

}
const props = defineProps({
    user: {
        type: String,
        default: false
    }
})
</script>

<style scoped>
.policy-container {
    padding-top: 30px;
    padding-bottom: 50px;
}

.policy-main {
    padding: 0px 50px 5px 30px;
}

.form {
    padding: 50px;
}

.content {
    text-align: left;
}

.el-button {
    width: 150px;
    height: 42px;
}

.sub {
    color: rgb(101, 101, 101);
    font-weight: 500;
    font-size: 19px;
}

.check-icon {
    position: relative;
    top: 4px;
    width: 30px;
    height: 25px;
}

@media screen and (max-width:720px) {
    .form {
        padding: 20px;
    }

    .policy-main {
        padding: 0px 20px 10px 20px;
    }
}</style>