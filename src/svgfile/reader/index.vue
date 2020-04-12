<!-- svg读取器 -->
<template>
  <div class="svgReader">
    <svg class="svgContainer" :class="name" aria-hidden="true">
      <use :xlink:href="id"></use>
    </svg>
  </div>
</template>
<style lang="less" src="./index.less"></style>
<script src="./index.js"></script>