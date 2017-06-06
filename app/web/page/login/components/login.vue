<template lang="html">
    <section class="login-wrapper">
        <h4 class="login-title">
            登 录
        </h4>
        <el-input class="form-input" placeholder="账号"></el-input>
        <el-input class="form-input" placeholder="密码"></el-input>
        <div class="operations">
            <el-button type="primary">登录</el-button>
            <el-button @click="registerFn">注册</el-button>
            <el-button type="text">忘记密码</el-button>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        registerFn() {
            this.$emit('clickEvent', 1);
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
