<template lang="html">
<base-layout title="管理列表">
    <!-- 状态头部 -->
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
    <!-- 主体表格 -->
    <div class="table-wrapper">
        <el-table
            ref="multipleTable"
            max-height="800"
            :data="showData"
            border
            style="width: 100%"
            @selection-change="selectionFn"
        >
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
    </div>
    <!-- 操作栏 -->
    <div class="list-operations-wrapper">
        <el-button type="success" @click="multipleHandle(1)">通过</el-button>
        <el-button type="danger" @click="multipleHandle(2)">拒绝</el-button>
        <el-button type="danger" @click="multipleHandle(3)">下架</el-button>
        <el-button type="info" @click="multipleHandle(0)">待审</el-button>
    </div>
    <!-- 筛选栏 -->
    <div class="list-operations-wrapper">
        <el-checkbox-group v-model="selectedStatus" @change="filterByStatus">
            <el-checkbox label="1">已通过</el-checkbox>
            <el-checkbox label="2">已拒绝</el-checkbox>
            <el-checkbox label="3">已下架</el-checkbox>
            <el-checkbox label="0">已待审</el-checkbox>
        </el-checkbox-group>
    </div>
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
            // 显示的数据
            showData: [],
            // 多选数据
            handleArray: [],
            // 筛选
            selectedStatus: []
        }
    },
    mounted() {
        this.showData = this.goodsList;
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
        // 单项操作
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
        // 多选操作
        selectionFn(selection) {
            this.handleArray = selection;
        },
        // 批量操作
        multipleHandle(status) {
            if (this.handleArray.length === 0) {
                this.$message({
                    message: '请选择物品',
                    type: 'error'
                });
                return;
            }
            let ids = this.handleArray.map((item) => {
                return item._id;
            });
            // 批量操作请求
            api.post(`/api/v1/goods`, {
                status: status,
                ids
            })
                .then((res) => {
                    let response = res.data;
                    if (response.msgCode == 100) {
                        this.$message({
                            message: response.message,
                            type: 'success'
                        });
                        // 更新状态
                        this.handleArray.forEach((item) => {
                            if (item.status != status) {
                                item.status = status;
                            }
                        });
                        // 刷新选择
                        this.$refs.multipleTable.clearSelection();
                        this.handleArray = [];
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
        },
        // 筛选
        filterByStatus(value) {
            if (value.length == 0) {
                this.showData = this.goodsList;
            } else {
                this.showData = this.goodsList.filter((item) => {
                    return value.some((status) => {
                        return status == item.status; 
                    });
                });
            }
        }
    },
    computed: {}
}
</script>

<style lang="less">
@import "./list.less";
</style>
