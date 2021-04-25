<!-- 布局容器-container -->
<template>
  <el-container class="container">
    <el-header>
      <pageHeader />
    </el-header>
    <el-container class="page-outer">
      <el-aside :width="aside">
        <div class="asideouter">
          <pageAside />
        </div>
      </el-aside>
      <el-container class="page-inner">
        <el-main>
          <layout v-if="showDetail" />
          <buildingPage v-else :icon="'fa fa-spinner'" :msg="'努力加载中。。。'" />
          <el-backtop target=".container .el-main"></el-backtop>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>