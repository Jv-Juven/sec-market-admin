<template lang="html">
<base-layout title="物品详情">
    <div class="goodDetails-wrapper">
        <!-- 物品名 -->
        <h3 class="goodDetails-title">{{goodsData.goodsName}}</h3>
        <!-- 物品简介 -->
        <p>{{goodsData.intro}}</p>
        <!-- 物品图片 -->
        <h5 class="goodDetails-item">
            <span class="goodDetails-item-title">图片：</span>
        </h5>
        <ul class="goodDetails-imgs-wrapper">
            <li
                class="img-box"
                v-for="(img, key) in imgs"
                :key="key"
            >
                <img :src="img" alt="">
            </li>
        </ul>
        <!-- 价格 -->
        <div class="goodDetails-item">
            <span class="goodDetails-item-title">价格：</span>{{goodsData.price}}
        </div>
        <!-- 昵称 -->
        <div class="goodDetails-item">
            <span class="goodDetails-item-title">昵称：</span>{{goodsData.nickName}}
        </div>
        <!-- 联系方式 -->
        <!-- <div class="goodDetails-item">
            <span class="goodDetails-item-title">联系方式：</span>
            <span>QQ</span>
            <span v-if="goodsData.contactWay == 2">微信</span>
        </div> -->
        <!-- 联系号码 -->
        <div class="goodDetails-item">
            <span
                class="goodDetails-item-title"
                v-if="goodsData.contactWay == 1"
            >QQ：</span>
            <span
                class="goodDetails-item-title"
                v-if="goodsData.contactWay == 2"
            >Wechat：</span>
            {{goodsData.contactNum}}
        </div>
        <!-- 手机号码 -->
        <div class="goodDetails-item">
            <span class="goodDetails-item-title">手机号码：</span>{{goodsData.phone}}
        </div>
        <!-- 卖家补充 -->
        <p class="goodDetails-item">
            <span class="goodDetails-item-title">卖家补充：</span>{{goodsData.sellerRemarks}}
        </p>
        <div class="operations-wrapper">
            <el-button
            size="small"
            type="success"
            @click="handle(goodsData, 1)"
            v-show="goodsData.status != 1"
            >通过</el-button>
            <el-button
            size="small"
            type="danger"
            @click="handle(goodsData, 2)"
            v-show="goodsData.status == 0"
            >拒绝</el-button>
            <el-button
            size="small"
            type="danger"
            @click="handle(goodsData, 3)"
            v-show="goodsData.status == 1"
            >下架</el-button>
            <el-button
            size="small"
            type="info"
            @click="handle(goodsData, 0)"
            v-show="goodsData.status != 0"
            >待审</el-button>
        </div>
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
@import "../../asset/less/var.less";
@import "./goodDetails.less";
</style>
