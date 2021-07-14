
###	H5单页面应用（SPA）
vue默认支持的是单页面应用。 单页面应用SPA 是一种特殊的 Web 应用，是加载单个 HTML 页面并在用户与应用程序交互时动态更新该页面的。它将所有的活动局限于一个 Web 页面中，仅在该 Web 页面初始化时加载相应的 HTML 、 JavaScript 、 CSS 。一旦页面加载完成， SPA 不会因为用户的操作而进行页面的重新加载或跳转，而是利用 JavaScript 动态的变换 HTML（采用的是 div 切换显示和隐藏），从而实现UI与用户的交互。

在 SPA 应用中，应用加载之后就不会再有整页刷新。相反，展示逻辑预先加载，并有赖于内容Region（区域）中的视图切换来展示内容。针对单页面应用的特性，我们将一个vue对象的工程抽象成一个H5模块，一个vue项目工程可以作为一个应用组件的包，提供出去，上传应用平台，内嵌到自己创建app中。


### spa-tpl模板
#### 开始
全局模式：

``` bash
hatom init spa-tpl hello
```

非全局模式：

``` bash
npx hatom init spa-tpl hello
```

#### 选配

``` bash
# ? 项目名称（hello）
<enter>

# ? 项目描述（A hatom project）
hello project

# ? 版本（1.0.0）
<enter>

# 作者 (support.hikyun@hikvision.com.cn)
<enter>

# app远程地址（）
<enter>

# ？安装vuex（Y/n）
<enter>

# ? UI组件（Use arrow.keys）
  > Vant Weapp (轻量、可靠的小程序 UI 组件库)
    Cube-ui (基于 Vue.js 实现的精致移动端组件库) 
    None (add by yourself)
<enter>

# ? 是否使用ESLint规范代码行为（Y/n）
<enter>

# ? 选择一种ESLint规范（Use arrow keys）
  > Standard
    hatom
    none
<enter>
```

#### 运行

``` bash
cd hello
npm run dev
```
#### 目录结构
``` bash
├── build  ······································· 构建配置
│   ├── webpack.dev.conf.js  ····················· 开发环境构建配置
│   └── webpack.prod.conf.js  ···················· 生产环境构建配置
│
│
├── src  ········································· 业务代码
│   │
│   ├── assets  ·································· 资源文件目录
│   │   ├── icons  ······························· 图标、可自动生成雪碧图
│   │   ├── images  ······························ 图片
│   │   │   └── sprite.png  ······················ 雪碧图
│   │   └── styles  ······························ 样式
│   │       ├── animation.css  ··················· 动画样式
│   │       ├── reset.css  ······················· 重置样式表
│   │       └── sprite.css  ······················ 雪碧图样式
│   │
│   ├── components  ······························ 公共组件
│   │   ├── i-nav  ······························· nav组件
│   │   │   ├── src
│   │   │   │   └── i-nav.vue
│   │   │   └── index.js
│   │   ├── i-tabbar  ···························· tabbar组件
│   │   │   ├── src
│   │   │   │   └── i-tabbar.vue
│   │   │   └── index.js
│   │   ├── utils    
│   │   │   ├── reg.js  ·························· 公共正则
│   │   │   └── util.js  ························· 公共方法
│   │   └── index.js  ···························· 封装
│   │
│   ├── config  ·································· 业务配置
│   │   ├── api.js  ······························ 接口地址
│   │   ├── constant.js  ························· 全局常量
│   │   ├── http.js  ····························· axios封装
│   │   ├── index.js  ···························· 封装
│   │   └── webApp.json  ························· app配置
│   │
│   ├── corejs  ·································· hatom封装
│   │   ├── WebViewJavascriptBridge.js
│   │   ├── hatom.js
│   │   └── pageRouter.json
│   │
│   ├── filters  ································· 全局过滤器
│   │   ├── filter.js
│   │   └── index.js
│   │
│   ├── layouts  ································· 布局
│   │   ├── layout1.vue  ························· 布局一
│   │   └── layout2.vue  ························· 布局二
│   │
│   ├── pages  ··································· 应用页面
│   │   ├── index  ······························· 首页
│   │   │   └── index.vue
│   │   ├── page1  ······························· 页面一
│   │   │   ├── detail.vue
│   │   │   └── index.vue
│   │   ├── page2  ······························· 页面二
│   │   │   └── index.vue
│   │   ├── page3  ······························· 页面三
│   │   │   └── index.vue
│   │   ├── page4  ······························· 页面四
│   │   │   └── index.vue
│   │   └── plugins-example  ····················· 插件页面
│   │       └── index.vue
│   │
│   ├── router  ·································· 路由配置
│   │   └── index.js
│   │
│   ├── store  ··································· vuex配置
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── mutations.js
│   │   └── state.js
│   │
│   ├── App.vue  ································· 根组件
│   │
│   ├── html.tmpl  ······························· html模板
│   │
│   ├── logo.ico  ································ logo.ico
│   │
│   └── main.js  ································· 入口
│
│
├── .editorconfig  ······························· 编辑器配置    
│
├── .eslintignore  ······························· eslint白名单配置
│
├── .eslintrc.js  ································ eslint配置
│
├── .gitignore  ·································· git白名单
│
├── .postcssrc.js  ······························· postCss配置
│
├── .stylelintignore  ···························· stylelint白名单配置
│
├── .stylelintrc.json  ··························· stylelint配置
│
├── babel.config.js  ····························· babel配置
│
├── package-lock.json  ··························· package-lock.json
│
└── package.json  ································ package.json
```

### spa-demo模板

<a href="https://static.hikyun.com/hatom-static/logo.png">
  <img width="200" height="200" src="https://hatom.gitee.io/hatom-assets/hatom2-cli/hatom-spa-demo.png">
</a>
