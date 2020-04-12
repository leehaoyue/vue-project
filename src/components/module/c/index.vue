<!-- 组件-module_C -->
<template>
  <el-row class="module_C">
    <el-col :span="12">
      <form-create class="demo-ruleForm"
        v-model="validateForm"
        :rule="formRule"
        :option="formOption"></form-create>
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button @click="reset">重置</el-button>
    </el-col>
    <el-col :span="12">
      <el-divider v-show="formData">
        <i class="fa fa-database" aria-hidden="true"></i>提交的数据
      </el-divider>
      <pre v-show="formData">{{formData}}</pre>
      <noData v-show="!formData" :msg="'暂无提交数据'"
        :lineHeight="`calc(100vh - 2 * ${$globaldata.container.header.height} - 40px)`" />
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>