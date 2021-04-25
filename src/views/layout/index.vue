<!-- 布局-layout -->
<template>
  <el-row class="layout" :gutter="5">
    <el-col class="layout-inner" :span="24">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear">
          <!-- <keep-alive> -->
            <component :is="Component"/>
          <!-- </keep-alive> -->
        </transition>
      </router-view>
    </el-col>
  </el-row>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>