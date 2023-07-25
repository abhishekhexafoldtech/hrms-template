<template>
    <div class="layout">
       <slot/>
    </div>
</template>

<style scoped>
.layout{
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    min-height: 150px;
    width: 100%;
    margin-top: -13px;
    font-family: sans-serif;
}
 </style>