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
            currentComponent: 'login',
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
    mounted() {
        const getCookie = function(name) {
            var arr,
                reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        }
        console.log(getCookie('_csrf'));
    }
}
</script>

<style lang="less">
@import './login.less';
</style>
