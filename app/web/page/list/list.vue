<template lang="html">
<base-layout title="管理列表">
    <div class="bar-container">
        <el-row>
            <el-col :span="18">
                <h5>
                    <el-button type="text" :disabled="true">物品列表</el-button>
                </h5>
            </el-col>
            <el-col :span="6">
                <h5>您好，<el-button type="text">{{userName}}</el-button> <el-button type="danger" @click="logout">登出</el-button></h5>
            </el-col>
        </el-row>
    </div>
    <el-table
        :data="goodsList"
        border
        style="width: 100%">
        <el-table-column
            type="selection"
            width="50">
        </el-table-column>
        <el-table-column
            label="序号"
            width="68">
            <template scope="scope">
                <span
                    style="margin-left: 10px"
                >{{ scope.$index }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="日期"
            width="220">
            <template scope="scope">
                <el-icon name="time"></el-icon>
                <span
                    style="margin-left: 10px"
                >{{ scope.row.createdAt | dateChange}}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="标题">
            <template scope="scope">
                <el-button
                    style="margin-left: 10px;"
                    type="text"
                    @click="jumpUrl(scope.row._id)"
                >{{ scope.row.goodsName }}</el-button>
            </template>
        </el-table-column>
        <!-- <el-table-column
            label="姓名"
            width="180">
            <template scope="scope">
                <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                        <el-tag>{{ scope.row.name }}</el-tag>
                    </div>
                </el-popover>
            </template>
        </el-table-column> -->
        <el-table-column
            label="状态"
            width="100">
            <template scope="scope">
                <label v-if="scope.row.status == 0">待审核</label>
                <label v-if="scope.row.status == 1">已通过</label>
                <label v-if="scope.row.status == 2">已拒绝</label>
                <label v-if="scope.row.status == 3">已下架</label>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template scope="scope">
                <el-button
                    class="first-btn"
                    size="small"
                    type="success"
                    @click="handle(scope.$index, scope.row, 1)"
                    v-show="scope.row.status != 1"
                >通过</el-button>
                <el-button
                    size="small"
                    type="danger"
                    @click="handle(scope.$index, scope.row, 2)"
                    v-show="scope.row.status == 0"
                >拒绝</el-button>
                <el-button
                    size="small"
                    type="danger"
                    @click="handle(scope.$index, scope.row, 3)"
                    v-show="scope.row.status == 1"
                >下架</el-button>
                <el-button
                    size="small"
                    type="info"
                    @click="handle(scope.$index, scope.row, 0)"
                    v-show="scope.row.status != 0"
                >待审</el-button>
            </template>
        </el-table-column>
    </el-table>
</base-layout>
</template>

<script>
import api from 'api';
export default {
    data() {
        return {
            // tableData: [{
            //     date: '2016-05-02',
            //     goodsName: '王小虎',
            //     address: '广东省广州市海珠区新滘西路299号'
            // }, {
            //     date: '2016-05-02',
            //     goodsName: '王小虎',
            //     address: '广东省广州市海珠区新滘西路299号'
            // }, {
            //     date: '2016-05-02',
            //     goodsName: '王小虎',
            //     address: '广东省广州市海珠区新滘西路299号'
            // }, {
            //     date: '2016-05-02',
            //     goodsName: '王小虎',
            //     address: '广东省广州市海珠区新滘西路299号'
            // }, {
            //     date: '2016-05-02',
            //     goodsName: '王小虎',
            //     address: '广东省广州市海珠区新滘西路299号'
            // }, {
            //     date: '2016-05-02',
            //     goodsName: '王小虎',
            //     address: '广东省广州市海珠区新滘西路299号'
            // }]
        }
    },
    filters: {
        dateChange(value) {
            let d = new Date(value);
            return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
        }
    },
    methods: {
        jumpUrl(id) {
            window.location.href = "/goodDetails/" + id;
        },
        handle(index, item, status) {
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
        },
        logout() {
            api.get('/logout')
                .then((res) => {
                    let response = res.data;
                    if (response.msgCode == 100) {
                        this.$message({
                            message: response.message,
                            type: 'success',
                            onClose() {
                                window.location.href = "/";
                            }
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
    computed: {}
}
</script>

<style lang="less">
@import "./list.less";
</style>
