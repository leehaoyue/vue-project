<!-- 图形工具 -->
<template>
  <el-row class="topologyVue" :style="style">
    <el-col class="topologyVue-container" :span="24">
      <topology v-if="editorShow" :configs="configs" @event="onEvent" />
    </el-col>
    <el-dialog title="预览"
      :modal="false"
      :fullscreen="true"
      :visible.sync="previewShow"
      :before-close="closePreview">
      <el-row :gutter="15">
        <el-col :span="12">
          <el-divider><i class="fa fa-desktop" aria-hidden="true"></i>预览界面</el-divider>
          <div class="preview-container">
            <topology v-if="previewShow" :preview="true" :data="dataDeal" />
          </div>
        </el-col>
        <el-col :span="12">
          <el-divider><i class="fa fa-database" aria-hidden="true"></i>数据结构</el-divider>
          <pre class="jsondata">{{ data }}</pre>
        </el-col>
        <el-backtop target=".topologyVue .jsondata"></el-backtop>
      </el-row>
    </el-dialog>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>
