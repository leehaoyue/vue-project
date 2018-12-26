<!-- 分页器 -->
<template>
  <el-pagination
    class="pagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-size="param.pageSize || 10"
    :pager-count="param.pageCount || 11"
    layout="total, prev, pager, next, jumper"
    :total="param.total || 0">
  </el-pagination>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>