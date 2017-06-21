<template lang="html">
    <section class="login-wrapper">
        <h4 class="login-title">
            登 录
        </h4>
        <el-input class="form-input" placeholder="账号" v-model="userName"></el-input>
        <el-input class="form-input" placeholder="密码" v-model="password" type="password"></el-input>
        <div class="operations">
            <el-button @click="loginFn" type="primary">登录</el-button>
            <el-button @click="registerFn">注册</el-button>
            <!-- <el-button type="text">忘记密码</el-button> -->
        </div>
    </section>
</template>

<script>
import api from 'api';
export default {
    data() {
        return {
            userName: '', // 用户名
            password: '' // 密码
        };
    },
    methods: {
        // 登录按钮函数
        registerFn() {
            this.$emit('clickEvent', 1);
        },
        // 登录函数
        loginFn() {
            let vm = this;
            api.post(`/login/api/login`, {
                    userName: vm.userName,
                    password: vm.password
                })
                .then((res) => {
                    vm.fullscreenLoading = false;
                    let response = res.data;
                    if (response.msgCode == 100) {
                        vm.$message({
                            message: '恭喜你，登录成功',
                            type: 'success',
                            onClose() {
                                window.location.href = 'list';
                            }
                        });
                    } else {
                        return Promise.reject(response);
                    }
                })
                .catch((reason) => {
                    vm.fullscreenLoading = false;
                    vm.$message({
                        message: reason.message || '登录失败',
                        type: 'error'
                    });
                })
                .then(() => {
                    vm.requesting = false;
                });
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
