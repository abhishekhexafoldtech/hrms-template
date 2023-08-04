<template>
    <div class="d-flex flex-wrap">
        <StatisticsCard style="width: 380px;" :leave="false" header="Working Remotely" :users="allUsers" description="Employees working remotely."/>
        <StatisticsCard style="width: 380px;" :leave="false" header="On Leave Today" :users="allUsers" description="Employees on Leave today."/>
        <StatisticsCard style="width: 380px;" :leave="false" header="Projects Completed" :users="allUsers" description="Projects completed"/>
        <StatisticsCard style="width: 380px;" :leave="true" header="Total Leaves"/>
    </div>
</template>

<script setup>
    const allUsers = ([
       {
        img:"https://imgs.search.brave.com/3jPQ7-D_SmheFuu2NgYZcwM8OY4Gx2mfYNF8RpEVXVY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MDgyMTQ3NTExOTYt/YmNmZDRjYTYwZjkx/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4Tm54/OGRYTmxjaVV5TUhC/eWIyWnBiR1Y4Wlc1/OE1IeDhNSHg4ZkRB/PSZ3PTEwMDAmcT04/MA.jpeg "
       },
       {
        img:"https://imgs.search.brave.com/4grtqVAsBIx4XOceE6y0VWcI68dxuBz7EfVB_h_aaMY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC10ZWVu/YWdlLWJveV8yMy0y/MTQ4MTA1NTg1Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
       },
       {
        img:"https://imgs.search.brave.com/UfbSOBeLObpdqJhtiQB6xcCnzA_q9h9XsNJ5pBZdwUk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cmV0dHktc21pbGlu/Zy1qb3lmdWxseS1m/ZW1hbGUtd2l0aC1m/YWlyLWhhaXItZHJl/c3NlZC1jYXN1YWxs/eS1sb29raW5nLXdp/dGgtc2F0aXNmYWN0/aW9uXzE3NjQyMC0x/NTE4Ny5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
       },
       {
        img:""
       },
       {
        img:""
       }
    ])
</script>