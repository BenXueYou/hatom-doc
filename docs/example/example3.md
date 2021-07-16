### 三、多容器webView + H5多页面

#### 1、场景描述

原生端打开多个webview容器+加载一个H5资源包，在混合开发中，

场景一：当H5应用模块业务过于复杂，一个webview容器消耗过大，页面加载过慢，可以拆分为多页面应用。

场景二：当H5应用包含多个分散的页面业务，同时页面被多个其他应用远程加载，基于项目考虑将页面用于统一工程开发，统一部署。

#### 2、创建H5应用：

使用hatom2-cli脚手架多页面模板，在一个工程内开发，打包之后会产生多个html页面[多页面应用开发文档](../h5-developer/H5-mpa)

#### 3、多页面应用场景一：
<br/>

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/example/images/image3.png" alt="Markdown" style="border:6px solid #eaecef"/>
</div>

#### 4、多页面应用场景二：
<br/>

<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/example/images/image4.png" alt="Markdown" style="zoom:80%;border:6px solid #eaecef"/>
</div>

