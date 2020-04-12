<!-- 侧边栏-子项 -->
<template>
  <div :class="{subcollapse: collapse}">
    <el-submenu class="subList"
      v-if="subList.children"
      :index="subList.index"
      popper-class="popperappend">
      <template slot="title">
        <i :class="subList.icon" v-if="subList.icon"></i>
        <span slot="title" v-show="!collapse">{{subList.label}}</span>
      </template>
      <subList :subList="item"
        :key="item.index"
        v-for="item in subList.children"></subList>
    </el-submenu>
    <el-menu-item class="subList"
      :index="subList.index"
      v-else>
      <i :class="subList.icon" v-if="subList.icon"></i>
      <span slot="title">{{subList.label}}</span>
    </el-menu-item>
  </div>
</template>
<style src="./index.less" lang="less"></style>
<script src="./index.js"></script>
