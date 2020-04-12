<!-- 组件-module_B_1 -->
<template>
  <el-row class="module_B_1" :gutter="20">
    <el-col :span="12">
      <basicEcharts :chartName="lineChart.name"
        :chartStyle="chartstyle"
        :options="lineOption" />
    </el-col>
    <el-col :span="12">
      <basicEcharts :chartName="barChart.name"
        :chartStyle="chartstyle"
        :options="barOption" />
    </el-col>
    <el-col :span="12">
      <basicEcharts :chartName="pieChart.name"
        :chartStyle="chartstyle"
        :options="pieOption" />
    </el-col>
    <el-col :span="12">
      <basicEcharts :chartName="scatterChart.name"
        :chartStyle="chartstyle"
        :options="scatterOption" />
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>