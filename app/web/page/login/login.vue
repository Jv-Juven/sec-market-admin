<template lang="html">
    <base-layout
        title="登录"
    >
        <div class="login-container">
            <div class="login-deck">
                <transition name="el-fade-in-linear">
                    <component
                        :is="currentComponent"
                        @clickEvent="clickEvent"
                    ></component>
                </transition>
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
            currentComponent: 'Register'
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
        }
    },
    mounted() {}
}
</script>

<style lang="less">
@import './login.less';
</style>
