<template lang="html">
    <base-layout
        :title="title"
    >
        <div class="login-container">
            <div class="login-deck">
                <component
                    :is="currentComponent"
                    @clickEvent="clickEvent"
                    @initTitle="setTitle"
                ></component>
            </div>
        </div>
    </base-layout>
</template>

<script>
import Login from './components/login';
import Register from './components/register';
export default {
    data() {
        return {
            currentComponent: 'Register',
            title: '登录' // 页面title
        }
    },
    components: {
        Login,
        Register
    },
    methods: {
        clickEvent(value) {
            switch (value) {
                case 0:
                    this.currentComponent = 'Login'
                    break;
                case 1:
                    this.currentComponent = 'Register'
                    break;
                default:

            }
        },
        setTitle(value) {
            this.title = value || '登录';
        }
    },
    mounted() {}
}
</script>

<style lang="less">
@import './login.less';
</style>
