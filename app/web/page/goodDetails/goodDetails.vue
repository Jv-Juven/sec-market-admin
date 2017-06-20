<template lang="html">
<base-layout title="物品详情">
    <div class="goodDetails-wrapper">
        <!-- 物品名 -->
        <h3>{{goodsData.goodsName}}</h3>
        <!-- 物品简介 -->
        <p>{{goodsData.intro}}</p>
        <!-- 物品图片 -->
        <h5>图片：</h5>
        <div class="">
            <el-card
                v-for="(img, key) in imgs"
                :key="key"
            >
                <img :src="img" alt="">
            </el-card>
        </div>
        <!-- 价格 -->
        <div>价格：{{goodsData.price}}</div>
        <!-- 昵称 -->
        <div>昵称：{{goodsData.nickName}}</div>
        <!-- 联系方式 -->
        <div>联系方式：{{goodsData.contactWay}}</div>
        <!-- 联系号码 -->
        <div>联系号码：{{goodsData.contactNum}}</div>
        <!-- 手机号码 -->
        <div>手机号码：{{goodsData.phone}}</div>
        <!-- 卖家补充 -->
        <p>卖家补充：{{goodsData.sellerRemarks}}</p>
    </div>
    <div class="operations-wrapper">
        <el-button
            size="small"
            type="success"
            @click="handleEdit(scope.$index, scope.row)"
        >通过</el-button>
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >拒绝</el-button>
    </div>
</base-layout>
</template>

<script>
export default {
    computed: {
        imgs() {
            return this.goodsData.imgs || [];
        }
    }
}
</script>

<style lang="less">
@import "./goodDetails.less";
</style>
