<template>
  <div id="mobile" v-cloak>
    <router-view />
  </div>
</template>

<style lang="less">
@import '../../global/globalStyle.less';

* {
  margin: 0;
  padding: 0;
}

html, body {
  .body-hidden-mobile;
}

#mobile {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  color: #2c3e50;
  height: 100%;
}

[v-cloak] {
  display: none;
}
</style>
