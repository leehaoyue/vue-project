<!-- 整体容器 -->
<template>
  <el-container class="container">
    <el-aside :width="$store.state.asideDent?'50px':'200px'">
      <asider></asider>
    </el-aside>
    <el-container>
      <el-header>
        <headers></headers>
      </el-header>
      <el-main>
        <contents></contents>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>