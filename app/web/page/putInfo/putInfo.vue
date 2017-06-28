<template lang="html">
    <mobile-layout title="棒球TB信息收集">
        <div class="putInfo-container">
            <el-input class="component" v-model="name" placeholder="姓名"></el-input>
            <el-radio-group class="component" v-model="sex">
                <el-radio-button class="putInfo-radio" label="男"></el-radio-button>
                <el-radio-button class="putInfo-radio" label="女"></el-radio-button>
            </el-radio-group>
            <el-radio-group class="component" v-model="department">
                <el-radio-button class="putInfo-radio" label="统筹"></el-radio-button>
                <el-radio-button class="putInfo-radio" label="产品"></el-radio-button>
                <el-radio-button class="putInfo-radio" label="技术"></el-radio-button>
                <el-radio-button class="putInfo-radio" label="运营"></el-radio-button>
            </el-radio-group>
            <el-input class="component" v-model="idNo" placeholder="身份证号码"></el-input>
            <el-button class="component" type="primary" @click="submit">提交</el-button>
        </div>
    </mobile-layout>
</template>

<script>
import api from 'api';
export default {
    data() {
        return {
            name: '',
            department: '',
            sex: '',
            idNo: ''
        }
    },
    methods: {
        submit() {
            api.post(`/postInfo`, {
                name: this.name,
                department: this.department,
                sex: this.sex,
                idNo: this.idNo
            })
                .then((res) => {
                    let response = res.data;
                    if (response.msgCode != 100) {
                        return Promise.reject(response);
                    } else {
                        this.$message({
                            message: '提交成功',
                            type: 'success',
                            onClose() {
                                window.location.reload();
                            }
                        });
                    }
                })
                .catch((reason) => {
                    this.$message({
                        message: reason.message || '提交失败',
                        type: 'error'
                    });
                });
        }
    }
}
</script>

<style lang="less">
    @import "./putInfo.less";
</style>
