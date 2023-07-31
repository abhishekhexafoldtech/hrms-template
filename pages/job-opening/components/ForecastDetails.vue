<template>
    <div class="container mt-3">
        <el-form label-position="right" label-width="160px">
            <h5>Forecast Details</h5>
            <el-row :gutter="20" style="justify-content: space-between;">
                <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="10" >
                    <el-form-item label="Revenue per Position">
                        <el-input size="large"></el-input>
                    </el-form-item>
                    <el-form-item label="Actual Revenue">
                        <el-input size="large"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" :xs="24" :sm="24" :md="12" :lg="10" >
                    <el-form-item label="Expected Revenue">
                        <el-input size="large"></el-input>
                    </el-form-item>
                    <el-form-item label="Missed Revenue">
                        <el-input size="large"></el-input>
                    </el-form-item>
                    <el-form-item label="Number of Position">
                        <el-input size="large"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script setup>

</script>
<style>
    
</style>