<template>
    <div class="wrapper w-100 h-100">
        <!-- employees status card -->
        <div class="employees-status-container background d-flex mx-8 flex-wrap">
            <div class="d-flex">
                <EmployeeStatusCard heading="My Desk Time" class="employees-status-card" color="#A368BE"
                    :desk-time="true" />
                <div class="line"></div>
            </div>
            <div class="d-flex">
                <EmployeeStatusCard :employees="allUsers" heading="Working Remotely"
                    e-description="Employees working remotely" class="employees-status-card" />
                <div class="line"></div>
            </div>
            <div>
                <EmployeeStatusCard :employees="allUsers" heading="On Leave Today" e-description="Employees on leave"
                    color="#4BC7A9" class="employees-status-card" />
            </div>
        </div>

        <!-- employee -profile card -->
        <!-- outline component -->
        <div class="employee-profile-card profile-card background" style="text-align: center;">
            <!-- profile -->
            <div class="profile mt-3">
                <div class="d-flex py-4" style="margin-left:auto;margin-right: auto;width: 130px;">
                    <img src="https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZN9afA%3AVt72dmaIt2BR1PZqQPqS2QbVKVJz-XLdbfBnh0uvLCjwPFxq_3PzS0wAowtDVuqPgmjYks4I7v5zqILtMal9xA"
                        alt="" width="125" height="125" class="rounded-circle" />
                    <el-card class="background rounded-circle profile-edit-icon" style="min-width:35px;max-height: 35px; ">
                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </el-card>
                </div>
                <div>Kiran Kumar</div>
                <div>VueJs Developer</div>
                <button class="btn btn-dark rounded-pill">sign out</button>
            </div>
            <!-- line braek -->
            <div class="horizontal-line"></div>
            <!-- payslip -->
            <div class="payslips mt-4 w-95" style="margin-bottom: 18px;">
                <!-- header of payslip -->
                <div class="d-flex justify-content-between" style="margin-bottom: 10px;">
                    <div class="d-flex">
                        <div style="background-color:rgba(103, 146, 137, 1);width:4px;height:20px" class="mt-1"></div>
                        <div class="capitalize mx-3 lh-base profile-heading">Recent payslips</div>
                    </div>
                    <div>
                        <i class="fa fa-ellipsis-v"></i>
                    </div>
                </div>
                <!-- components of payslip -->
                <div class="d-flex mx-3 py-2 justify-content-between w-95" v-for="item in 3" :key="item">
                    <div class="d-flex">
                        <div class="mt-0 p-2 rounded-3"
                            style="width:45px;height:50px;background-color: rgba(239, 243, 249, 1);"><i
                                class="fa fa-file-pdf-o mt-1" aria-hidden="true" style="color:red;font-size:22.7px"></i>
                        </div>
                        <div class="capitalize  mx-2 text-start">
                            <div style="font-size:16px;font-weight: 600;" class="text-dark">Aug salary pyslip</div>
                            <div class="">03 july 2023</div>
                        </div>
                    </div>
                    <div class="mt-2">
                        <button class="btn btn-dark capitalize"
                            style="width:50px;padding:10px;height:25px;line-height: 0;">view</button>
                    </div>
                </div>
            </div>
            <!-- line break -->
            <div class="horizontal-line"></div>
            <!-- organization chart -->
            <div class="organization-chart py-3 my-2 w-95">
                <!-- header of organization -->
                <div class="d-flex justify-content-between" style="margin-bottom: 20px;">
                    <div class="d-flex">
                        <div style="background-color:rgba(103, 146, 137, 1);width:4px;height:20px" class="mt-1"></div>
                        <div class="capitalize mx-3 lh-base profile-heading">organization chart</div>
                    </div>
                    <div>
                        <i class="fa fa-ellipsis-v"></i>
                    </div>
                </div>
                <!-- components of organization -->
                <div class="organization rounded-3 w-100 mx-2 mt-2 text-start d-flex justify-content-between" v-for="user in 3" :key="user">
                    <div class="d-flex">
                        <img :src="allUsers[user].img" alt="" width="56" height="56" class="rounded-3 mx-2" />
                        <div class="capitalize  m-1 mt-2 text-start">
                            <div style="font-size:16px;font-weight: 600;" class="text-dark">{{ allUsers[user].name }}</div>
                            <div class="">{{ allUsers[user].profession }}</div>
                        </div>
                    </div>
                    <div class="mt-4" style="margin-right: 15px;">
                        <i class="fa fa-long-arrow-up" aria-hidden="true" :style="allUsers[user].profession?.startsWith('senior') ? 'color:red': 'color:green'"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const allUsers = ([
    {
        img: "https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZN9afA%3AVt72dmaIt2BR1PZqQPqS2QbVKVJz-XLdbfBnh0uvLCjwPFxq_3PzS0wAowtDVuqPgmjYks4I7v5zqILtMal9xA"
    },
    {
        img: "https://media-protected.taiga.io/user/c/5/5/f/3912cb3cfa54175d0ac606d99fa1057a8e054ac3d8c8f562f9d45c5ec400/a.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3ABi5HhixCZH4LIPkpfta4NLqHfH7CvP1WsY5N7uTeevhV6qnrI4uNnQhWoc2nUvMMLOFq_2hlJSuss5ZYTgJNrA",
        name: "abhisheck",
        profession: "senior developer"
    },
    {
        img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng",
        name: "Pallavi",
        profession: "senior developer"
    },
    {
        img: "https://media-protected.taiga.io/user/f/0/c/f/44310b7f150ee54b3ead22f4c0e2f3ec1a74ad415152ef32d132e3412506/vishal_image.jpg.300x300_q85_crop.jpg?token=ZONANw%3AdGkujlgqk2AS4DahQTP7_5650LNNWK9nnfojHLVjhZnnxeHh-60TfpDg2CMdJ1GkqiXNsfuQ6ojiiHvz3aOLug",
        name: "Vishal",
        profession: "senior developer",

    },
    {
        img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng"
    },

]);

</script>

<style scoped>
.background {
    border-radius: 10px;
    box-shadow: 0px 3px 15px 0px #0000000D;
    background-color: white;
}

.employees-status-container {
    float: left;
    height: max-content;
    justify-content: space-between;
}

.employees-status-card {
    padding: 30px;
}

.line {
    height: 125px;
    border: 1px solid #CACACA;
    margin-top: auto;
    margin-bottom: auto;
}
.wrapper {
    background-color: rgba(248, 248, 248, 1);
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
}
.employee-profile-card {
    width: 317px;
    float: right;
    margin-top: 10px;
    /* margin: 20px; */
    padding: 0px;
}
.fa-pencil-square-o {
    position: relative;
    bottom: 18px;
    right: 11px;
    color: rgba(62, 54, 63, 1);
}
.profile-edit-icon {
    position: relative;
    top: 80px;
    right: 28px;
}
.profile>div:nth-child(2) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0px;
    color: rgba(62, 54, 63, 1);

}
.profile>div:nth-child(3) {
    font-size: 20px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
}
.profile>button {
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    margin-top: 15px;
}
.horizontal-line {
    width: 95%;
    height: 1px;
    background-color: #CACACA;
    margin-left: auto;
    margin-right: auto;
}
.capitalize {
    text-transform: capitalize;
}
.btn {
    line-height: 14px;
}
.profile-heading {
    font-size: 19px;
    font-weight: 600;
    color: rgba(62, 54, 63, 1);
}
.organization {
    background-color: rgba(239, 243, 249, 1);
    width: 287px;
    height: 68px;
}
.organization>div>img {
    margin-top: 6px;
}</style>