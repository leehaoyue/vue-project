<!-- 侧边栏内容 -->
<template>
  <el-submenu class="asiderItem"
    v-if="itemList.children"
    :itemList="itemList"
    :index="itemList.id">
    <template slot="title">
      <i :class="itemList.symbal" aria-hidden="true"></i>
      <span slot="title">{{itemList.label}}</span>
    </template>
    <asiderItem v-for="(data,index) in itemList.children"
      :key="index"
      :itemList="data"></asiderItem>
  </el-submenu>
  <el-menu-item class="asiderItem"
    v-else
    :index="itemList.id">
    <i :class="itemList.symbal" aria-hidden="true"></i>
    <span slot="title">{{itemList.label}}</span>
  </el-menu-item>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
