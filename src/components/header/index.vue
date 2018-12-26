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
      <el-input placeholder="请输入内容"
        prefix-icon="el-icon-search">
      </el-input>
      <i class="fa fa-question fa-lg" aria-hidden="true"></i>
      <el-badge :value="200" :max="99" class="item">
        <i class="fa fa-bell-o" aria-hidden="true"></i>
      </el-badge>
      <el-dropdown>
        <img src="../../../static/img/logoico.png">
        <span class="el-dropdown-link">
          Operator1
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item disabled>个人中心</el-dropdown-item>
          <el-dropdown-item disabled>设置</el-dropdown-item>
          <el-dropdown-item>触发报错</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>