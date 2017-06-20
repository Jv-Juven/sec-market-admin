<template lang="html">
    <section class="login-wrapper">
        <h4 class="login-title">
            注 册
        </h4>
        <el-input class="form-input" placeholder="账号" v-model="userName"></el-input>
        <el-input class="form-input" placeholder="密码" v-model="password" type="password"></el-input>
        <div class="operations">
            <el-button
                type="primary"
                @click="registerFn"
                :disabled="requesting"
                v-loading.fullscreen.lock="fullscreenLoading"
            >注册</el-button>
            <!-- <el-button>登录</el-button> -->
            <el-button @click="loginFn" type="text">已有账号？登录</el-button>
        </div>
    </section>
</template>

<script>
import api from 'api';
export default {
    data() {
        return {
            fullscreenLoading: false, // 全屏loading
            userName: "", // 用户名
            password: "", // 密码
            requesting: false // 请求中
        }
    },
    methods: {
        // 登录按钮事件
        loginFn() {
            this.$emit('clickEvent', 0);
        },
        // 注册按钮事件
        registerFn() {
            this.fullscreenLoading = true;
            if (this.requesting) {
                return;
            }
            this.requesting = true;
            let vm = this;
            api.post(`/login/api/register`, {
                    userName: vm.userName,
                    password: vm.password
                })
                .then((res) => {
                    vm.fullscreenLoading = false;
                    let response = res.data;
                    if (response.msgCode == 100) {
                        vm.$message({
                            message: '恭喜你，注册成功',
                            type: 'success',
                            onClose() {
                                window.location.href = 'list';
                            }
                        });
                    } else {
                        return Promise.reject({ message: '返回的数据错误' });
                    }
                })
                .catch((reason) => {
                    vm.fullscreenLoading = false;
                    vm.$message({
                        message: reason.message || '注册失败',
                        type: 'error'
                    });
                })
                .then(() => {
                    vm.requesting = false;
                });
        }
    },
    mounted() {
        this.$emit('initTitle', '注册');
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
