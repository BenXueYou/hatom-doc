
### 一、单容器webview + H5单页面开发

#### 1、场景描述

原生端打开一个webview容器+加载一个H5资源包，在混合开发中，很常见的一种开发模式。在早期的开发中，此种场景常见于以下：

- 在一个已经成型的APP中，需要新增或是兼容一个业务模块——H5资源包。

- 某一个轻量的小型APP应用的构成：原生端一个原生的webview+H5资源包。

  

#### 2、拓扑结构：
<br/>
<div align="left">
  <img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/example/images/image.png" alt="Markdown" style="border:6px solid #eaecef"/>
</div>

#### 3、场景一：对于已经成型的APP，以对接ifar构架为例：

##### 3.1、在平台中创建一个应用，平台创建应用一般为了测试方便，创建一个android应用。配置好应用信息之后，选择iFar的模板，包含iFar登录组件、云远智能应用Web组件 Android、iFar 门户组件 Android、iFar 视频组件 Android。这是APP原有的组件功能需要勾选上：

- iFar登录组件：原生端开发的登录页面，iFar登录逻辑接口已经处理完毕，H5应用通过rootInfo.getRootInfo获取登录信息
- 云远智能应用Web组件 Android：原生端webview容器，解析加载H5资源包的组件
- iFar 门户组件 Android：APP登录之后，应用的门户首页，由一个个业务组件菜单组成的页面
- iFar 视频组件 Android：视频预览业务组件， 勾上该组件，门户首页自带一个视频的菜单

##### 3.2、接下来添加H5模块，那么创建`hatom init spa-tpl webapp_bms`创建H5应用模板。具体操作见hatom2-cli说明文档。

项目初始化后，查看iFar登录组件的对接文档，在main.js中：

```javascript
const app = {
  init: function () {
    // eslint-disable-next-line no-unused-expressions
    process.env.NODE_ENV === 'development' ? new Vconsole() : ''
    /**
     * 使用iFar调试工具对接iFar，这里获取登录信息
     * res.message 为json字符串
     */
    _this.$hatom.rootInfo.getRootInfo((res) => {
      /** 存入本地缓存 */
      console.log(JSON.parse(res.message))
      _this.$hatom.storage.setItem('userInfo', res.message)
      this.onReady()
    })
  },
  onReady: function () {
    new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
}

_this.$isMobile() ? app.init() : app.onReady()
```



##### 3.3、修改webApp.json文件，配置门户组件的菜单：

```javascript
    "menuList": [
        {
            "menuCode": "portal",    // 运营管理平台配置的菜单权限编码
            "menuName": {            // 菜单名称
                "zh": "主页", 
                "en": "portal" 
            },
            "menuIcon": "/logo.ico",  // 菜单图标 资源包根目录路径
            "menuPath": "/index.html" // H5资源包路径 
        }
    ],
```

##### 3.4、H5应用开发完毕、`npm run build` 打包，在平台上，进入应用详情页，点击上传H5资源包

##### 3.5、点击云编译，打包生成成果物，下载成果物生成APK，安装APK：
<br/>
<div align="left">
  <img src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/example/images/Screenshot_20210623_135722_xyy.com.xy.jpg" alt="Markdown" style="zoom:33%;border:6px solid #eaecef"/>
</div>

#### 4、场景二：在hatom脚手架中已经默认提供了该示例应用：

##### 4.1、平台创建应用，同样创建一个Android应用，选择无登录空白模板

##### 4.2、开发H5应用，“hatom init spa-demo hatom-spa-demo”，下载示例应用工程

##### 4.3、运行`npm install`,安装依赖。`npm run build` 打包，在平台上，进入应用详情页，点击上传H5资源包

##### 4.4、点击云编译，打包生成成果物，下载成果物生成APK，安装APK：
<br/>
<div align="left">
  <img src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/example/images/Screenshot_20210623_140253_com.hatom.demo.jpg" alt="Markdown" style="zoom:33%;border:6px solid #eaecef"/>
</div>


