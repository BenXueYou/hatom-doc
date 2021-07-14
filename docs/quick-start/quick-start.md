# 快速上手



## 1、创建应用

点击创建应用，填写应用名称，支持平台，PackageName或 BundleID后，点击创建后应用便创建完成  
<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/simple-01.png" alt="Markdown" style="border: 6px solid #EAECEF;" />
</div>



## 2、配置应用证书及信息

创建完成后，配置应用信息.
[Android证书帮助](../app-build/certificate-android)
[iOS证书帮助](../app-build/certificate-ios)

<div align="left"">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/simple-02.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>

<div align='left'>
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/simple-03.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>



## 3、添加组件或选择模板

添加组件可以去组件广场选择组件；选择模板可以选择指定的构架的模板，如iFar、iSee、云曜，选择模板后会默认选择模板中配置的组件添加到应用配置中。

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/simple-04.png" alt="Markdown"  style="border: 6px solid #EAECEF;"/>
</div>

<div>
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/simple-05.png" alt="Markdown"  style="border: 6px solid #EAECEF;"/>
</div>




## 4、检查开放配置项

应用中可能会由于选择的组件中包含一些第三方 SDK 所需要的 Appkey 信息 或 特定构架部分组件中需要特定的配置项 需要用户手动去填写配置，若存在需要配置的信息，用户未进行正确配置，可能会导致云编译生成的APP 无法安装或安装后无法正常打开的情况。

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/simple-06.png" alt="Markdown"  style="border: 6px solid #EAECEF;"/>
</div>





## 5、检查是否上传 H5应用组件包

1、H5应用组件包不是必选项，用户若不需要可不上传。
2、简易演示 Demo 制作流程如下：
    1）、安装脚手架， npm install -g hatom2-cli
    2）、初始化 Demo 工程， hatom init spa-tpl Demo
    3）、安装包依赖， cd Demo & npm install
    4）、打包成果物， npm run build
    5）、压缩成果物

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/app-dev-111.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


3、若用户有自己开发的 H5应用功能或类似需求可参考[H5应用组件开发指南](../app-build/app-build.md)。

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/simple-07.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>





## 6、云编译

开始云编译，构建 APP。

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/simple-08.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>











