<template>
  <div id="app" v-cloak>
    <router-view />
  </div>
</template>

<style lang="less">
@import './global/globalStyle.less';

* {
  margin: 0;
  padding: 0;
}

html,body {
  .body-hidden;
  color: @grayScale-color_1;
}
#app {
  height: 100%;
}

[v-cloak] {
  display: none;
}
</style>
