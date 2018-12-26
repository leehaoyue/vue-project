<!-- 标题 -->
<template>
  <el-row class="titleLabel">
    <el-col :span="24"
      v-if="model.title"
      :style="style[model.deep||0]">
      {{model.title}}
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
