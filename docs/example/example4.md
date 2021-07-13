### 四、多容器webView + H5多应用包

#### 1、场景描述

当应用需要集成多个基线H5组件，每个组件的来源都不一样，则需要上传多个资源包。

#### 2、H5建立多个应用工程
<br />
<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/example/images/image5.png" alt="Markdown" style="border:6px solid #eaecef"/>
</div>

#### 3、H5资源包加载的顺序

- 与门户组件模板耦合，原生直接解压跳转到门户组件，根据门户组件的menuList 

- 按照资源包的解压顺序规则、直接加载list里面的第一个页面

- 遍历查所有资源包内，webApp.json文件中h5packCode字段是是 xxx_main的前端包，若没有找到就遵循第二条

  