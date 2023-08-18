<template>
    <div class="employees-status-container d-flex mx-2 flex-wrap">
            <div class="d-flex">
                <EmployeeStatusCard  heading="My Desk Time" class="employees-status-card" color="#A368BE" :desk-time="true"/>
                <div class="line"></div>
            </div> 
            <div class="d-flex">
                <EmployeeStatusCard :employees="allUsers" heading="Working Remotely" e-description="Employees working remotely" class="employees-status-card"/>
                <div class="line"></div>
            </div>
            <div>
                <EmployeeStatusCard :employees="allUsers" heading="On Leave Today" e-description="Employees on leave" color="#4BC7A9" class="employees-status-card"/>
            </div>
        </div>
</template>

<script setup>
const allUsers = ([
    {
        img: "https://media-protected.taiga.io/user/3/7/8/1/763ad6fd69d24fe8be4038aae2728c686460584a83300aae73ab3b99b61b/whatsapp-image-2022-02-22-at-134707.jpeg.80x80_q85_crop.jpg?token=ZN9afA%3AVt72dmaIt2BR1PZqQPqS2QbVKVJz-XLdbfBnh0uvLCjwPFxq_3PzS0wAowtDVuqPgmjYks4I7v5zqILtMal9xA"
    },
    {
        img: "https://media-protected.taiga.io/user/c/5/5/f/3912cb3cfa54175d0ac606d99fa1057a8e054ac3d8c8f562f9d45c5ec400/a.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3ABi5HhixCZH4LIPkpfta4NLqHfH7CvP1WsY5N7uTeevhV6qnrI4uNnQhWoc2nUvMMLOFq_2hlJSuss5ZYTgJNrA"
    },
    {
        img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng"
    },
    {
        img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng"
    },
    {
        img: "https://media-protected.taiga.io/user/5/d/7/f/713e2adb889ba0288eaeaf6870ffb74a362c332eb5b39565b2f117080184/16726594728082.jpg.80x80_q85_crop.jpg?token=ZN9V3A%3AwqHWDi3a8xJiixi7XDUARbHeQZrs8Vs6J_2HRgEwW48XcTaTZenNG7dgdc_cp_i794_uyt0keb8SMojhoqS0Ng"
    },
   
]);

</script>

<style scoped>
.employees-status-container {
    max-width: 1300px;
    height: 200px;
    top: 130px;
    left: 160px;
    border-radius: 10px;
    box-shadow: 0px 3px 15px 0px #0000000D;
    justify-content: space-around;
}
.employees-status-card{
    padding: 30px;
}
.line{
    height:125px;
    border:1px solid #CACACA;
    margin-top: auto;
    margin-bottom: auto;
}
</style>