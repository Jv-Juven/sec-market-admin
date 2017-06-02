<template lang="html">
    <layout>
        <div class="login-container">
            Hello Eggjs-Vue! {{message}}
            <el-button @click="visible = true">按钮</el-button>
            <el-dialog v-model="visible" title="Hello world">
              <p>欢迎使用 Element</p>
            </el-dialog>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
        </div>
    </layout>
</template>

<script>
export default {
}
</script>

<style lang="less">
@font_col: #333;
.login-container {
    color: @font_col;
}
</style>
<style lang="css">
.login-container {
    font-size: 40px;
}
</style>
