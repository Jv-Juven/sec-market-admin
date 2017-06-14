<template lang="html">
    <section class="login-wrapper">
        <h4 class="login-title">
            注 册
        </h4>
        <el-input class="form-input" placeholder="账号" v-model="userName"></el-input>
        <el-input class="form-input" placeholder="密码" v-model="password"></el-input>
        <div class="operations">
            <el-button type="primary" @click="registerFn">注册</el-button>
            <!-- <el-button>登录</el-button> -->
            <el-button @click="loginFn" type="text">已有账号？登录</el-button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            userName: "", // 用户名
            password: "" // 密码
        }
    },
    methods: {
        // 登录按钮事件
        loginFn() {
            this.$emit('clickEvent', 0);
        },
        // 注册按钮事件
        registerFn() {
            let vm = this;
            axios.post('/login/api/register', {
                userName: vm.userName,
                password: vm.password
            })
                .then()
                .catch();
        }
    }
}
</script>

<style lang="less">
.login-wrapper {
    .login-title {
        text-align: center;
    }

    .form-input {
        margin-top: 20px;

        &:nth-child(1) {
            margin-top: 0;
        }
    }
}
</style>
