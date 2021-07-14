## H5应用开发说明


### 1.开发环境的服务地址

关于http接口请求，在开发环节中，接口调试往往会有跨域限制（服务端解除限制情况下除外）， 解除跨域限制的许多方案中，前端都会在客户端起一个本地代理服务来解除跨域限制。在hatom2-cli脚手架中也有配置代理服务的配置， 在build/webpack.dev.conf.js文件中，找到dev下proxy配置项：

```javascript
    proxy: {
      '/webapi/hatom': {
        target: 'https://openweb.hikyun.com',
        changeOrigin: true,
        ws: true,
        secure: false
      }
    }
```
> 配置后，执行npm run dev重启后生效，所有的http请求中，拦截url中带有“/webapi/hatom”的请求，转发到“https://openweb.hikyun.com”这个服务地址中。



### 2.打包后的服务地址

打包后的服务地分为两种情况：
1、使用hatom平台的isee/ifar/云曜登录组件
2、不使用平台任何登录组件，自定义登录页面

#### 2.1.使用hatom平台的isee/ifar/云曜登录组件
使用登录组件之后，打包之后的应用APP，安装打开之后会默认进入原生的登录页面，登录页登录会输入用户名密码以及登录地址，登录验证之后会创建一个webView来加载前端页面，hatom插件的接口获取当前的的登录信息以及服务地址

<div align="left">
  <img width="300px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/app-service-address.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>

> 获取服务地址请参考平台组件说明

#### 2.2.自定义登录
不使用平台任何登录组件/自定义登录页面，打包之后意味着APP的服务地址时不变的，需要在工程目录下找到config/constant.js文件, 配置SERVER字段的服务地址

```javascript
export default {
  SHEIGHT: screen.height,
  SWIDTH: screen.width,
  STATUS_BAR_HEIGHT: 15,
  BOTTOM_SAFE_AREA_HEIGHT: 10,
  SERVER: 'https://hatom2.hikyun.com'
}
```

### 3关于静态资源的引入

在开发中，往往会引入第三方的静态资源：

1、引入第三方js文件
2、向外提供静态资源图片

#### 3.1.引入第三方js文件
大多数情况下引入第三方js文件,import都能导入到项目工程中，但某种情况下需要用script标签引入。使用script标签以内的时候就要注意了,由于脚手架打包的html文件时自动生成的，是不允许在html中添加script标签的。

在脚手架配置文件build//webpack.dev.conf.js中，找到plugins下面

```javascript
    new CopyPlugin({
      patterns: [
        { from: path.join(rootPath, "src/config/webApp.json"), to: "" },
        { from: path.join(rootPath, "src/corejs/pageRouter.json"), to: "" },
        { from: path.join(rootPath, "src/components/utils/sdk.js"), to: "" }, // 添加
      ]
    }),
```

在入口文件main.js中添加

```javascript
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'sdk.js')
    document.getElementsByTagName('head')[0].appendChild(script)
```


#### 3.2.向外提供静态资源路径

在webApp.json中配置菜单图标的时候，需要向APP原生端提供菜单图标的加载路径，
同样将静态资源的图标放在assets/image/menu目录下，同样在脚手架配置文件中
在脚手架配置文件build//webpack.dev.conf.js中，找到plugins下面

```javascript
    new CopyPlugin({
      patterns: [
        { from: path.join(rootPath, "src/config/webApp.json"), to: "" },
        { from: path.join(rootPath, "src/corejs/pageRouter.json"), to: "" },
        { from: path.join(rootPath, "src/assets/images/menu"), to: "" }, // 添加
      ]
    }),
```

在webApp.json中配置

```javascript
{
    "h5packCode": "demo",
    "versionName": "1.0.0",
    ...
    "componentId": [
        "componentId1",
        "componentId2"
    ],
    "menuList": [
      {
        "menuCode": 'openDoor',
        "menuName": {
          "zh": "一键开门",
          "en": "openDoor",
        },
        "menuIcon": "icon.png", // 菜单的图标
        "menuPath": "index.html#/openDoor"
      },
    ]
}

```

### 4.配置postcss-pxtorem

#### 4.1.安装插件: postcss-loader、postcss-pxtorem

```bash
npm install --save-dev postcss-loader postcss
npm install postcss postcss-pxtorem --save-dev
```

#### 4.2.配置插件

项目根目录下创建：.postcssrc.js

```javascript
  module.exports = {
      plugins: [
          require("autoprefixer"),
          ["postcss-pxtorem",
          {
              rootValue: 16,
              unitPrecision: 5,
              propList: ['*'],
              selectorBlackList: [],
              replace: true,
              mediaQuery: false,
              minPixelValue: 0,
              exclude: /node_modules/i
          }]
      ]
  }
```
> 其他详细配置 请参考 【[文档](https://www.npmjs.com/package/postcss-pxtorem)】

### 5.打包之后成果物
成果物目录结构:

``` bash
├── index.html ··································· index.html
├── logo.ico ····································· logo.ico
├── pageRouter.json ······························ hatom相关配置
├── static
│   ├── css
│   │   └── main_792f30f7dda223670a32.css ········ css资源
│   └── js
│       ├── main_3161817b.bundle.js ·············· js资源
└── webApp.json ·································· app配置
```

hatom默认将成果物生成名为webapp_ + webApp.h5packCode的zip文件，帮面后续再平台上上传编译，其中webapp_为保留关键字，在编译过程中会使用到，切勿修改。实际上，如果不使用hatom官方脚手架，只需要保持相关的目录结构和配置文件一致也可以正常运行。 

