<!-- 3D图表 -->
<template>
  <el-row class="chart3D">
    <el-col :span="24">
      <pageTitle title="3D图表" />
      <el-row :gutter="15">
        <el-col class="chartmodel" :span="12">
          <el-tooltip effect="dark" content="刷新" placement="top">
            <i class="fas fa-redo-alt" @click="get3dBarData"/>
          </el-tooltip>
          <el-divider><el-tag size="mini">3D柱状图</el-tag></el-divider>
          <basicEcharts :chartName="barData3D.name"
            :chartStyle="barData3D.style"
            :options="barData3DDeal" />
        </el-col>
        <el-col class="chartmodel" :span="12">
          <el-tooltip effect="dark" content="刷新" placement="top">
            <i class="fas fa-redo-alt" @click="get3dLineData"/>
          </el-tooltip>
          <el-divider><el-tag size="mini">3D折线图</el-tag></el-divider>
          <basicEcharts :chartName="lineData3D.name"
            :chartStyle="lineData3D.style"
            :options="lineData3DDeal" />
        </el-col>
        <el-col class="chartmodel" :span="12">
          <el-tooltip effect="dark" content="刷新" placement="top">
            <i class="fas fa-redo-alt" @click="get3dScatterData"/>
          </el-tooltip>
          <el-divider><el-tag size="mini">3D散点图</el-tag></el-divider>
          <basicEcharts :chartName="scatterData3D.name"
            :chartStyle="scatterData3D.style"
            :options="scatterData3DDeal" />
        </el-col>
        <el-col class="chartmodel" :span="12">
          <el-tooltip effect="dark" content="刷新" placement="top">
            <i class="fas fa-redo-alt"/>
          </el-tooltip>
          <el-divider><el-tag size="mini">3D曲面图</el-tag></el-divider>
          <basicEcharts :chartName="surfaceData3D.name"
            :chartStyle="surfaceData3D.style"
            :options="surfaceData3DDeal" />
        </el-col>
        <el-backtop target=".chart3D"></el-backtop>
      </el-row>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>