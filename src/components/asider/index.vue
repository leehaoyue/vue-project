<!-- 侧边栏 -->
<template>
  <el-row class="tac asider">
    <el-col :span="24">
      <div class="logo">
        <img src="../../../static/img/logoico.png">
        <span v-if="!$store.state.asideDent">管理平台</span>
      </div>
      <el-menu class="asiderMenu"
        background-color="#002140"
        @select="handleNodeClick"
        :default-active="defaultActive"
        :default-openeds="defaultOpeneds"
        :collapse="$store.state.asideDent">
        <submenu v-for="data in asiderList"
          :key="data.id"
          :itemList="data"></submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
