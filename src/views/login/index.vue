<template>
  <el-row class="login" type="flex" justify="center" :gutter="12">
    <el-col :span="7">
      <div class="login-inner">
        <el-divider>
          <el-avatar size="medium" :src="src"></el-avatar>
          效能-综合展示
        </el-divider>
        <el-tabs v-model="activeName">
          <el-tab-pane label="登录" name="login">
            <el-form :model="loginForm"
              status-icon
              :rules="loginRules"
              ref="loginForm"
              label-width="100px"
              label-position="left">
              <el-form-item label="工号" prop="username">
                <el-input v-model="loginForm.username"
                  placeholder="请输入工号"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input type="password"
                  v-model="loginForm.pwd"
                  autocomplete="off"
                  placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="logup">
            <el-form :model="logupForm"
              status-icon
              :rules="logupRules"
              ref="logupForm"
              label-width="100px"
              label-position="left">
              <el-form-item label="工号" prop="username">
                <el-input v-model="logupForm.username"
                  placeholder="请输入工号"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input type="password"
                  v-model="logupForm.pwd"
                  autocomplete="off"
                  placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="confirm_pwd">
                <el-input type="password"
                  v-model="logupForm.confirm_pwd"
                  autocomplete="off"
                  placeholder="请确认密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('logupForm')">注册</el-button>
                <el-button @click="resetForm('logupForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- <el-card shadow="hover" @click.native="login({
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
      </el-card> -->
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>