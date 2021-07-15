###	H5页面应用（MPA）

利用webpack多页面配置，可构建出多个html页面。该项目工程内构建了多个vue对象，工程内各个页面就可以看成是单页面应用。该应用不再局限于单个的html页面。单页面应用间的跳转，就是一个个html页面切换的重新加载。每一个页面只加载与之相关的HTML 、JavaScript 、CSS 。大大加快了页面加载效率，同时也增加了H5多页面应用在App原生组件内嵌的灵活性。
在原生组件中，可以遍历到一个个html页面，根据自己的需要，加载不同的html页面应用。也可以将多个单页面应用组合，成一个复杂度更高一级组件或模板应用。


### mpa-tpl 模板

<span id="5-3-1"></span>
#### 开始
全局模式：

``` bash
hatom init mpa-tpl mpa-demo
```

非全局模式：

``` bash
npx hatom init mpa-tpl mpa-demo
```

<span id="5-3-2"></span>
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

<span id="5-3-3"></span>
#### 运行

``` bash
cd mpa-demo
npm run dev
```

<span id="5-3-4"></span>
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
│   │   ├── page1  ······························· 页面一
│   │   │   ├── views                              业务组件
|   │   │   │   ├── hello-world
|   │   │   │   └── index.vue
│   │   │   ├── App.vue .......................... 根组件
│   │   │   ├── main.js .......................... 入口文件
│   │   │   ├── router.js ........................ 路由文件
│   │   │   └── store.js  ........................ vuex文件 
│   │   │   
│   │   ├── page2  ······························· 页面二iFar
│   │   │   ├── views                              业务组件
|   │   │   │   └── ifar.vue
│   │   │   ├── App.vue .......................... 根组件
│   │   │   ├── main.js .......................... 入口文件
│   │   │   ├── router.js ........................ 路由文件
│   │   │   └── store.js  ........................ vuex文件
│   │   │   
│   │   └── page3  ······························· 页面三iSee
│   │       ├── views                              业务组件
|   │       │   └── isee.vue
│   │       ├── App.vue .......................... 根组件
│   │       ├── main.js .......................... 入口文件
│   │       ├── router.js ........................ 路由文件
│   │       └── store.js  ........................ vuex文件
│   │
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

<span id="5-4"></span>

### 多页面说明

在src/core.js目录中，多页面的配置：
* pageRouter.json 是app多页面的相关配置，app打包编译H5资源包时，会解析该文件注册多个webview。
同时工程运行时，也会解析该文件，生成多页面入口。

> ### 新增一个html页面, 则必须在pageRouter.json中注册该页面

 相关参数如下：

|  参数   | 说明  | 类型  | 默认配置  |
|  ----  | ----  | ----  | ----  |
| routes | 路由列表| Array | [ { ...options } ] |

<br />

options说明, 每一个options对应一个入口页面，相关参数如下：

|  参数   | 说明  | 类型  | 默认配置  |
|  ----  | ----  | ----  | ----  |
| type | 页面类型分为三种：普通类型(standard)、顶部标题栏(topbar)、底部导航栏(bottomNavigation$$portal$$0)| String | standard  |
| name | 页面名| String | - |
| path | 页面入口相对路径| String | - |
| data | 页面配置数据（普通类型不需要进行配置）| Array | { ...opts } |

<br />

opts说明, 每一个type类型对应一个opts页面配置，可根据当前页面嵌入的场景进行配置，相关参数如下：
|  参数   | 说明  | 类型  | 默认配置  |
|  ----  | ----  | ----  | ----  |
| topbar | 页面类型为顶部标题栏(topbar) 配置| Object  |  -  |
| bottomNavigation | 页面类型为底部导航栏(bottomNavigation$$portal$$0)底部菜单配置| Object | - |

topbar 配置示例

```
"topbar": {
  /** 顶部左侧按钮 */
  "leftButton": {
    "type": "text", 
    "textColor": "#FFFFFFFF",
    "text": "返回"
  },
  /** 顶部右侧按钮 */
  "rightButton": {
    "type": "img",
    "img": "icon.png"
  },
  /** 配置顶部标题，只支持文本类型 */
  "title": {
    "type": "text",
    "textColor": "#FFFFFFFF",
    "text": "Page1 Title"
  },
  /** 配置顶部背景色，目前只支持颜色类型 */
  "background": {
    "type": "color",
    "color": "#FFFF0000"
  }
}
```
bottomNavigation$$portal$$0 字段分为三部分，bottomNavigation、portal、0 ，
第一部分固定不变，第二部分表示分组，第三部分表示底部菜单排列位置（从0开始），
根据分组字段，将同一分组根据排列次序在底部进行排布。配置示例：
```
"bottomNavigation": {
  /** 配置菜单文字以及选中/未选中颜色 */
  "title": {
    "textColorSelected": "#FFFFFFFF",
    "textColorUnselected": "#FFFFFFFF",
    "text": "检测"
  },
  /** 配置菜单图标，含选中/未选中状态 */
  "icon": {
    "imgUnselected": "icons/1-实时监测-normol.png",
    "imgSelected": "icons/1-实时监测-hover.png"
  },
  /** 配置菜单背景色 */
  "background": {
    "color": "#FFFF0000"
  }
}
```

<br />
完整实例：

```
{
  "routes": [
    {
      "type": "standard",
      "name": "index",
      "path": "index.html",
      "data": {}
    },
    {
      "type": "topbar",
      "name": "page1",
      "path": "page1.html",
      "data": {
        "topbar": {
          /** 顶部左侧按钮 */
          "leftButton": {
            "type": "text",
            "textColor": "#FFFFFFFF",
            "text": "返回"
          },
          /** 顶部右侧按钮 */
          "rightButton": {
            "type": "img",
            "img": "icon.png"
          },
          /** 配置顶部标题，只支持文本类型 */
          "title": {
            "type": "text",
            "textColor": "#FFFFFFFF",
            "text": "Page1 Title"
          },
          /** 配置顶部背景色，目前只支持颜色类型 */
          "background": {
            "type": "color",
            "color": "#FFFF0000"
          }
        }
      }
    }
    {
      "type": "bottomNavigation$$portal$$0",
      "name": "page2",
      "path": "page2.html",
      "data": {
        "bottomNavigation": {
          "title": {
            "textColorSelected": "#FFFFFFFF",
            "textColorUnselected": "#FFFFFFFF",
            "text": "检测"
          },
          /** 配置菜单图标，含选中/未选中状态 */
          "icon": {
            "imgUnselected": "icons/1-实时监测-normol.png",
            "imgSelected": "icons/1-实时监测-hover.png"
          },
          /** 配置菜单背景色 */
          "background": {
            "color": "#FFFF0000"
          }
        }
      }
    },
    {
      "type": "bottomNavigation$$portal$$1",
      "name": "page5",
      "path": "page5.html",
      "data": {
        ...
      }
    },
    {
      "type": "bottomNavigation$$portal$$2",
      "name": "page6",
      "path": "page6.html",
      "data": {
          ...
      }
    },
  ]
}

```

### mpa-demo模板

<a href="https://static.hikyun.com/hatom-static/logo.png">
  <img width="200" height="200" src="https://hatom.gitee.io/hatom-assets/hatom2-cli/hatom-mpa-demo.png">
</a>