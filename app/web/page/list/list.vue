<template lang="html">
<base-layout title="管理列表">
    <el-table
        :data="tableData"
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
                <span style="margin-left: 10px">{{ scope.$index }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="日期"
            width="180">
            <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="标题"
            width="600">
            <template scope="scope">
                <el-button style="margin-left: 10px;" type="text">{{ scope.row.goodsName }}</el-button>
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
                <label>待审核</label>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template scope="scope">
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
            </template>
        </el-table-column>
    </el-table>
</base-layout>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                goodsName: '王小虎',
                address: '广东省广州市海珠区新滘西路299号'
            }, {
                date: '2016-05-02',
                goodsName: '王小虎',
                address: '广东省广州市海珠区新滘西路299号'
            }, {
                date: '2016-05-02',
                goodsName: '王小虎',
                address: '广东省广州市海珠区新滘西路299号'
            }, {
                date: '2016-05-02',
                goodsName: '王小虎',
                address: '广东省广州市海珠区新滘西路299号'
            }, {
                date: '2016-05-02',
                goodsName: '王小虎',
                address: '广东省广州市海珠区新滘西路299号'
            }, {
                date: '2016-05-02',
                goodsName: '王小虎',
                address: '广东省广州市海珠区新滘西路299号'
            }]
        }
    }
}
</script>

<style lang="less">
@import "./list.less";
</style>
