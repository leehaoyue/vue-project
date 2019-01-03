<!-- 卡片 -->
<template>
  <el-row class="card"
    :gutter="20"
    align="middle">
    <el-col :span="6"
      v-for="(data, index) in modelData.data"
      :key="index">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="data.img" class="image">
        <div style="padding: 14px;width: calc(100% - 28px);">
          <el-tooltip placement="top" effect="light">
            <div slot="content">{{ data.text }}</div>
            <el-button>{{ data.text }}</el-button>
          </el-tooltip>
          <div class="bottom clearfix">
            <time class="time">{{ data.time }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
