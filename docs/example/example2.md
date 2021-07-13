### 二、多容器webView + H5单页面

#### 1、场景描述

原生端打开多个webview容器+加载一个H5资源包，在混合开发中，原生端APP多次复用某个H5页面：例如H5应用是模块内某个或是某些页面，可以被原生端应用为菜单模块的子页面

#### 2、拓扑结构：

<div align="left">
  <img src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/example/images/image2.png" alt="Markdown" style="zoom:80%;border:6px solid #eaecef"/>
</div>

#### 3、场景：门户组件加载H5资源包内，单页面应用子路由页面

3.1、在平台中创建一个应用，平台创建应用一般为了测试方便，创建一个android应用。配置好应用信息之后，选择iFar的模板，包含iFar登录组件、云远智能应用Web组件 Android、iFar 门户组件 Android。这是APP原有的组件功能需要勾选上：

- iFar登录组件：原生端开发的登录页面，iFar登录逻辑接口已经处理完毕，H5应用通过rootInfo.getRootInfo获取登录信息
- 云远智能应用Web组件 Android：原生端webview容器，解析加载H5资源包的组件
- iFar 门户组件 Android：APP登录之后，应用的门户首页，由一个个业务组件菜单组成的页面

3.2、接下来添加H5模块，那么创建`hatom init spa-tpl webapp_bms`创建H5应用模板。具体操作见hatom2-cli说明文档。

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



3.3、修改webApp.json文件，配置门户组件的菜单：

```javascript
    "menuList": [
        {
            "menuCode": "page1",    // 运营管理平台配置的菜单权限编码
            "menuName": {            // 菜单名称
                "zh": "菜单一", 
                "en": "page1" 
            },
            "menuIcon": "/logo.ico",  // 菜单图标 资源包根目录路径
            "menuPath": "/index.html#/home" // H5资源包路径 
        },
        {
            "menuCode": "page2",    // 运营管理平台配置的菜单权限编码
            "menuName": {            // 菜单名称
                "zh": "菜单二", 
                "en": "page2" 
            },
            "menuIcon": "/logo.ico",  // 菜单图标 资源包根目录路径
            "menuPath": "/index.html#/api" // H5资源包路径 
        },
        {
            "menuCode": "page3",    // 运营管理平台配置的菜单权限编码
            "menuName": {            // 菜单名称
                "zh": "菜单三", 
                "en": "page3" 
            },
            "menuIcon": "/logo.ico",  // 菜单图标 资源包根目录路径
            "menuPath": "/index.html#/ui" // H5资源包路径 
        }
    ],
```

3.4、H5应用开发完毕、`npm run build` 打包，在平台上，进入应用详情页，点击上传H5资源包

3.5、点击云编译，打包生成成果物，下载成果物生成APK，安装APK：

<div align="left">
  <img src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/example/images/Screenshot_20210623_144018_com.qs.sq.jpg" alt="Markdown" style="zoom:33%;border:6px solid #eaecef"/>
</div>

