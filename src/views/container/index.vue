<!-- 布局容器-container -->
<template>
  <el-container class="container">
    <el-tooltip class="item" effect="dark" content="刷新" placement="left-end">
      <el-button class="refresh"
        circle
        type="primary"
        icon="el-icon-refresh-right"
        @click="refresh"></el-button>
    </el-tooltip>
    <el-container class="page-outer">
      <el-aside :width="aside">
        <div class="asideouter">
          <pageAside />
        </div>
        <el-tooltip class="item"
          effect="dark"
          placement="top-start"
          :content="tooltipCNT">
          <el-button class="collapsebtn"
            type="primary"
            :icon="tooltipBTN"
            @click="collapseBtn"></el-button>
        </el-tooltip>
      </el-aside>
      <el-container class="page-inner">
        <el-header>
          <pageHeader />
        </el-header>
        <el-main>
          <layout />
          <el-backtop target=".container .el-main"></el-backtop>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>