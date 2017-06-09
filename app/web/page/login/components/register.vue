<template lang="html">
    <section class="login-wrapper">
        <h4 class="login-title">
            注 册
        </h4>
        <el-input class="form-input" placeholder="账号"></el-input>
        <el-input class="form-input" placeholder="密码"></el-input>
        <div class="operations">
            <el-button type="primary">注册</el-button>
            <!-- <el-button>登录</el-button> -->
            <el-button @click="loginFn" type="text">已有账号？登录</el-button>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        loginFn() {
            this.$emit('clickEvent', 0);
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
