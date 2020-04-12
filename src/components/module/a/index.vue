<!-- 组件-module_A -->
<template>
  <el-row class="module_A">
    <el-col :span="24">
     <el-table :height="`calc(100vh - 2 * ${$globaldata.container.header.height})`"
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)">
        <el-table-column :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          show-overflow-tooltip
          v-for="item in tableHead">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="24">
      <el-pagination @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pagesize"
        :total="tableData.length"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>