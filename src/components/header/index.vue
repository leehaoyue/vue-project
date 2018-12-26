<!-- 页头 -->
<template>
  <el-row :gutter="20" class="header">
    <el-col :span="12" class="head_l">
      <i class="fa fa-2x"
        :class="$store.state.asideDent?'fa-indent':'fa-outdent'"
        aria-hidden="true"
        @click="dentFC"></i>
    </el-col>
    <el-col :span="12" class="head_r">
      <el-input placeholder="请输入搜索内容"
        prefix-icon="el-icon-search">
      </el-input>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>