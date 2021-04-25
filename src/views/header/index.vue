<!-- 页头 -->
<template>
  <el-row class="header">
    <el-col :span="20">
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <h4>效能-综合展示</h4>
    </el-col>
    <el-col :span="4">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
      <div class="msg">
        <el-tag size="mini">{{ name }}</el-tag>
        <el-tooltip effect="dark" content="退出登录" placement="left-end">
          <el-button class="excit" type="text">
            <i class="fas fa-sign-out-alt" aria-hidden="true" @click="excit"></i>
          </el-button>
        </el-tooltip>
        <el-tooltip effect="dark" content="刷新" placement="left-end">
          <el-button class="refresh"
            circle
            type="primary"
            size="mini"
            icon="el-icon-refresh-right"
            @click="refresh"></el-button>
        </el-tooltip>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>