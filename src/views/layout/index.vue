<!-- 布局-layout -->
<template>
  <el-row class="layout" gutter="5">
    <el-col :span="24">
      <transition name="el-fade-in-linear">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>