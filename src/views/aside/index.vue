<!-- 侧边栏 -->
<template>
  <el-row class="aside">
    <el-col :span="24">
      <el-menu class="el-menu-vertical-demo"
        :default-active="defaultActive"
        :collapse-transition="false"
        @select="selectMenuSub">
        <subItem :key="item.index"
          :subList="item"
          v-for="item in list"></subItem>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>