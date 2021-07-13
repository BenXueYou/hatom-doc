
# 应用构建

应用构建需要先创建一个应用（Android 或 iOS），配置应用信息、icon、闪屏图、AppID（bundleid）、添加证书（签名文件）、选择组件，上传 H5应用组件包（如有需要），最后执行云编译，构建 APP。

## 1、一般步骤

### 	<1> [应用创建](./helpDocument?source=ApplicationCreate)

### 	<2> [应用编辑](./helpDocument?source=ApplicationConfig)

### 	<2> [云编译](./helpDocument?source=CloudCompile)

## 2、构建流程概览

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/app-build.png" alt="Markdown" style="border:6px solid #eaecef"/>
</div>

> 创建应用时，选择iOS平台，则打包生成iOS应用， 选择Android平台，则打包生成apk安卓应用

## 3.编译打包拓扑

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/app-compile.png" alt="Markdown" style="border:6px solid #eaecef"/>
</div>

> 选择组件时，需注意该应用的的类型， iOS应用不能与Android组件模板混用