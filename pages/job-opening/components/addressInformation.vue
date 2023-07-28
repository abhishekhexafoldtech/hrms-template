<template>
    <div class="container mt-3">
        <h5>Address Information</h5>
        <el-form label-width="160px" label-position="right">
            <el-row :gutter="20" style="justify-content: space-between;">
                <el-col :xs="24" :sm="24" :md="12" :lg="10">
                    <el-form-item label="City">
                        <el-input size="large"></el-input>
                    </el-form-item>
                    <el-form-item label="Country">
                        <el-input size="large"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="10">
                    <el-form-item label="State/Province">
                        <el-input size="large"></el-input>
                    </el-form-item>
                    <el-form-item label="Zip/Postal Code">
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