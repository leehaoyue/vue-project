<template>
  <div id="nav" v-cloak>
    <router-view/>
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
#app, #nav {
  height: 100%;
}

[v-cloak] {
  display: none;
}
</style>
