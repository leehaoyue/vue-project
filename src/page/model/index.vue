<!-- 模型 -->
<template>
  <el-row class="model"
    v-loading="loading||dataNull"
    :element-loading-text="dataNull&&!loading?'暂无数据':'拼命加载中'"
    :element-loading-spinner="dataNull&&!loading?'el-icon-circle-close-outline':'el-icon-loading'"
    element-loading-background="rgba(255, 255, 255, 1)">
    <el-col :span="24">
      <div v-if="Array.isArray(model)">
        <model
          v-for="(item, index) in model"
          :key="index"
          :model="item"
          ></model>
      </div>
      <div v-else>
        <titleLable :model="model"></titleLable>
        <echarts
          v-if="model.isEcharts"
          :model="model"
          :modelData="modelData"></echarts>
        <component
          v-else
          :is="model.label"
          :model="model"
          :modelData="modelData"></component>
        <model
          v-if="model.children"
          :model="model.children"></model>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>