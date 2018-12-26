# das_mon

> 上海地铁数采监控系统  
>> **基础技术栈：** vue脚手架：vue-cli；http请求：axios；CSS预处理：less；图标字体库：font-awesome  
>> **UI框架：** Element-UI  
>> **数据可视化：** ECharts  
>> **资源管理：** yarn  
>> **模块打包器：** webpack  
>> **vue依赖：** 状态管理：vuex；即时通信：vue-socket.io、socket.io-client  
>> **node依赖：** 即时通信：stocket.io；模块通信：child_process；kafka消费：kafka-node  

## Build Setup

``` bash
# 安装依赖
npm install

# 启动项目（热更新）
npm run dev

# 打包项目
npm run build
```
## 项目目录

| 目录名 | 文件路径 | 目录名 | 文件路径 | 目录名 | 文件路径 |
| :------ | :------ | :------ | :------ | :------ | :------ |
| 容器 | /src/page/container | 布局 | /src/page/layout | 模型 | /src/page/model |
| 全局组件注册 | /src/global/globalComponents.js | 全局变量定义 | /src/global/globalData.js | 全局样式设置 | /src/global/globalStyle.less |
| HTTP请求 | /src/axios | 即时通信 | /src/socket.io | 状态管理 | /src/store |
| 组件模板 | /src/components | 导航栏 | /src/components/header | 侧边栏 | /src/components/asider |
| 自定义组件 | /src/components/auxiliary | ECharts模型 | /src/components/echarts | 路由配置 | /src/router |