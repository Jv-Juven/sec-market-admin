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
            @click="handle(this.goodsData, 1)"
            v-show="goodsData.status != 1"
        >通过</el-button>
        <el-button
            size="small"
            type="danger"
            @click="handle(this.goodsData, 2)"
            v-show="goodsData.status == 0"
        >拒绝</el-button>
        <el-button
            size="small"
            type="danger"
            @click="handle(this.goodsData, 3)"
            v-show="goodsData.status == 1"
        >下架</el-button>
        <el-button
            size="small"
            type="info"
            @click="handle(this.goodsData, 0)"
            v-show="goodsData.status != 0"
        >待审</el-button>
    </div>
</base-layout>
</template>

<script>
import api from 'api';
export default {
    computed: {
        imgs() {
            return this.goodsData.imgs || [];
        }
    },
    methods: {
        handle(item, status) {
            api.put(`/api/v1/goods/${item._id}`, {
                status: status
            })
                .then((res) => {
                    let response = res.data;
                    if (response.msgCode == 100) {
                        item.status = status;
                        this.$message({
                            message: response.message,
                            type: 'success'
                        });
                    } else {
                        return Promise.reject(response.message);
                    }
                })
                .catch((reason) => {
                    this.$message({
                        message: reason,
                        type: 'error'
                    });
                });
        }
    },
    mounted() {
        console.log(this.goodsData);
    }
}
</script>

<style lang="less">
@import "./goodDetails.less";
</style>
