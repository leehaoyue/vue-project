<!-- 模型 -->
<template>
  <el-row class="layout">
    <el-col :span="24">
      <model :model="$store.state.model"></model>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>