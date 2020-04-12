<!-- 页头 -->
<template>
  <el-row class="header">
    <el-col :span="24">
      <el-tooltip class="item" effect="dark" content="退出登录" placement="left-end">
        <el-button type="text" @click="excit">
          <i class="fa fa-sign-out" aria-hidden="true"></i>{{ name }}
        </el-button>
      </el-tooltip>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>