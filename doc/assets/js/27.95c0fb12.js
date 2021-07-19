(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{386:function(s,n,a){"use strict";a.r(n);var t=a(44),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"h5单页面应用-spa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5单页面应用-spa"}},[s._v("#")]),s._v(" H5单页面应用（SPA）")]),s._v(" "),a("p",[s._v("vue默认支持的是单页面应用。 单页面应用SPA 是一种特殊的 Web 应用，是加载单个 HTML 页面并在用户与应用程序交互时动态更新该页面的。它将所有的活动局限于一个 Web 页面中，仅在该 Web 页面初始化时加载相应的 HTML 、 JavaScript 、 CSS 。一旦页面加载完成， SPA 不会因为用户的操作而进行页面的重新加载或跳转，而是利用 JavaScript 动态的变换 HTML（采用的是 div 切换显示和隐藏），从而实现UI与用户的交互。")]),s._v(" "),a("p",[s._v("在 SPA 应用中，应用加载之后就不会再有整页刷新。相反，展示逻辑预先加载，并有赖于内容Region（区域）中的视图切换来展示内容。针对单页面应用的特性，我们将一个vue对象的工程抽象成一个H5模块，一个vue项目工程可以作为一个应用组件的包，提供出去，上传应用平台，内嵌到自己创建app中。")]),s._v(" "),a("h3",{attrs:{id:"spa-tpl模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spa-tpl模板"}},[s._v("#")]),s._v(" spa-tpl模板")]),s._v(" "),a("h4",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[s._v("#")]),s._v(" 开始")]),s._v(" "),a("p",[s._v("全局模式：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("hatom init spa-tpl hello\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("非全局模式：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("npx hatom init spa-tpl hello\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"选配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选配"}},[s._v("#")]),s._v(" 选配")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? 项目名称（hello）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? 项目描述（A hatom project）")]),s._v("\nhello project\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? 版本（1.0.0）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作者 (support.hikyun@hikvision.com.cn)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# app远程地址（）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ？安装vuex（Y/n）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? UI组件（Use arrow.keys）")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Vant Weapp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("轻量、可靠的小程序 UI 组件库"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    Cube-ui "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("基于 Vue.js 实现的精致移动端组件库"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n    None "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("add by yourself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? 是否使用ESLint规范代码行为（Y/n）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ? 选择一种ESLint规范（Use arrow keys）")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Standard\n    hatom\n    none\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("enter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("h4",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hello\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("├── build  ······································· 构建配置\n│   ├── webpack.dev.conf.js  ····················· 开发环境构建配置\n│   └── webpack.prod.conf.js  ···················· 生产环境构建配置\n│\n│\n├── src  ········································· 业务代码\n│   │\n│   ├── assets  ·································· 资源文件目录\n│   │   ├── icons  ······························· 图标、可自动生成雪碧图\n│   │   ├── images  ······························ 图片\n│   │   │   └── sprite.png  ······················ 雪碧图\n│   │   └── styles  ······························ 样式\n│   │       ├── animation.css  ··················· 动画样式\n│   │       ├── reset.css  ······················· 重置样式表\n│   │       └── sprite.css  ······················ 雪碧图样式\n│   │\n│   ├── components  ······························ 公共组件\n│   │   ├── i-nav  ······························· nav组件\n│   │   │   ├── src\n│   │   │   │   └── i-nav.vue\n│   │   │   └── index.js\n│   │   ├── i-tabbar  ···························· tabbar组件\n│   │   │   ├── src\n│   │   │   │   └── i-tabbar.vue\n│   │   │   └── index.js\n│   │   ├── utils    \n│   │   │   ├── reg.js  ·························· 公共正则\n│   │   │   └── util.js  ························· 公共方法\n│   │   └── index.js  ···························· 封装\n│   │\n│   ├── config  ·································· 业务配置\n│   │   ├── api.js  ······························ 接口地址\n│   │   ├── constant.js  ························· 全局常量\n│   │   ├── http.js  ····························· axios封装\n│   │   ├── index.js  ···························· 封装\n│   │   └── webApp.json  ························· app配置\n│   │\n│   ├── corejs  ·································· hatom封装\n│   │   ├── WebViewJavascriptBridge.js\n│   │   ├── hatom.js\n│   │   └── pageRouter.json\n│   │\n│   ├── filters  ································· 全局过滤器\n│   │   ├── filter.js\n│   │   └── index.js\n│   │\n│   ├── layouts  ································· 布局\n│   │   ├── layout1.vue  ························· 布局一\n│   │   └── layout2.vue  ························· 布局二\n│   │\n│   ├── pages  ··································· 应用页面\n│   │   ├── index  ······························· 首页\n│   │   │   └── index.vue\n│   │   ├── page1  ······························· 页面一\n│   │   │   ├── detail.vue\n│   │   │   └── index.vue\n│   │   ├── page2  ······························· 页面二\n│   │   │   └── index.vue\n│   │   ├── page3  ······························· 页面三\n│   │   │   └── index.vue\n│   │   ├── page4  ······························· 页面四\n│   │   │   └── index.vue\n│   │   └── plugins-example  ····················· 插件页面\n│   │       └── index.vue\n│   │\n│   ├── router  ·································· 路由配置\n│   │   └── index.js\n│   │\n│   ├── store  ··································· vuex配置\n│   │   ├── actions.js\n│   │   ├── getters.js\n│   │   ├── index.js\n│   │   ├── mutations.js\n│   │   └── state.js\n│   │\n│   ├── App.vue  ································· 根组件\n│   │\n│   ├── html.tmpl  ······························· html模板\n│   │\n│   ├── logo.ico  ································ logo.ico\n│   │\n│   └── main.js  ································· 入口\n│\n│\n├── .editorconfig  ······························· 编辑器配置    \n│\n├── .eslintignore  ······························· eslint白名单配置\n│\n├── .eslintrc.js  ································ eslint配置\n│\n├── .gitignore  ·································· git白名单\n│\n├── .postcssrc.js  ······························· postCss配置\n│\n├── .stylelintignore  ···························· stylelint白名单配置\n│\n├── .stylelintrc.json  ··························· stylelint配置\n│\n├── babel.config.js  ····························· babel配置\n│\n├── package-lock.json  ··························· package-lock.json\n│\n└── package.json  ································ package.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br")])]),a("h3",{attrs:{id:"spa-demo模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spa-demo模板"}},[s._v("#")]),s._v(" spa-demo模板")]),s._v(" "),a("a",{attrs:{href:"https://static.hikyun.com/hatom-static/logo.png"}},[a("img",{attrs:{width:"200",height:"200",src:"https://hatom.gitee.io/hatom-assets/hatom2-cli/hatom-spa-demo.png"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);