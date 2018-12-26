<!-- 表格 -->
<template>
  <el-row
    class="tableList">
    <el-col :span="24">
      <el-table
        :data="tableData"
        :header-row-style="headerStyle"
        :row-style="bodyStyle"
        style="width: 100%">
        <el-table-column
          v-for="(item, index) in labelList"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col
      :span="24"
      v-if="tableData.length>0"
      class="table_pagination">
      <pagination :param="pageInfo"></pagination>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>