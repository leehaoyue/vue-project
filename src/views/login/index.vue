<template>
  <el-row class="login" type="flex" justify="center" :gutter="12">
    <el-col :span="6">
      <el-card shadow="hover" @click.native="login({
          limit: 'admin/limit',
          data: {
            limit: 'admin',
            name: '管理员'
          }
        })">
        管理员
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover" @click.native="login({
          limit: 'usr/limit',
          data: {
            limit: 'usr',
            name: '普通用户'
          }
        })">
        普通用户
      </el-card>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>