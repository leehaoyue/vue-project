# vue-cli3 搭建的空项目（多页面：pc、mobile）

## 技术栈

1.	vue-cli
2.	element-ui
3.	vant-ui
4.	axios
5.	mockjs
6.	echarts
7.	form-create
8.	video.js
9.	svg-sprite-loader
。。。

**具体版本等信息参见——*package.json***

## 项目配置

### 下载依赖
```
yarn install
```

### 启动项目【开发模式】
```
yarn serve
```

### 打包项目
```
yarn run build
```

## 目录结构

> ### 整体分配

| 目录名 | 文件路径 | 目录名 | 文件路径 | 目录名 | 文件路径 |
| :------ | :------ | :------ | :------ | :------ | :------ |
| 容器 | /src/views/container | 布局 | /src/views/layout | 侧边栏 | /src/views/aside |
| 顶部 | /src/views/header | 全局组件注册 | /src/global/globalComponents.js | 全局方法 | /src/global/globalMethod.js |
| 全局变量定义 | /src/global/globalData.js | 全局样式设置 | /src/global/globalStyle.less | 状态管理 | /src/store |
| 路由配置 | /src/router | 自定义组件 | /src/components | HTTP请求 | /src/axios |
| Mock数据 | /src/mock | SVG文件及处理方法 | /src/svgfile | 静态文件 | /public<br/>/src/assets |
| websocket | /src/websocket | ... | ... | ... | ... |
