(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{379:function(t,e,s){"use strict";s.r(e);var n=s(44),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"获取设备屏幕信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取设备屏幕信息"}},[t._v("#")]),t._v(" 获取设备屏幕信息")]),t._v(" "),s("h4",{attrs:{id:"异步获取设备屏幕信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步获取设备屏幕信息"}},[t._v("#")]),t._v(" 异步获取设备屏幕信息")]),t._v(" "),s("p",[t._v("使用示例：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hatom.getScreenInfo(res => {\n    console.log(res.message);\n})\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("参数说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("callback")]),t._v(" "),s("td",[t._v("函数")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("回调函数")])])])]),t._v(" "),s("p"),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("code")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("返回码  0表示成功")])]),t._v(" "),s("tr",[s("td",[t._v("message")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("返回值 json 字符串")])])])]),t._v(" "),s("p"),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("screenDensityDpi")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("设备屏幕Dpi，像素密度")])]),t._v(" "),s("tr",[s("td",[t._v("screenWidth")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("设备屏幕宽度")])]),t._v(" "),s("tr",[s("td",[t._v("statusBarHeight")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("设备状态栏高度")])]),t._v(" "),s("tr",[s("td",[t._v("screenScreenRotation")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("设备屏幕是否旋转")])]),t._v(" "),s("tr",[s("td",[t._v("screenDensity")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("设备屏幕密度 dpi/px=density")])]),t._v(" "),s("tr",[s("td",[t._v("screenHeight")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("设备屏幕高度")])]),t._v(" "),s("tr",[s("td",[t._v("appScreenWidth")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("应用屏幕宽度")])]),t._v(" "),s("tr",[s("td",[t._v("appScreenHeight")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("应用屏幕高度 appScreenHeight=screenHeight-statusBarHeight")])])])]),t._v(" "),s("p"),t._v(" "),s("h4",{attrs:{id:"同步获取设备屏幕信息-返回promise对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步获取设备屏幕信息-返回promise对象"}},[t._v("#")]),t._v(" 同步获取设备屏幕信息，返回promise对象")]),t._v(" "),s("p",[t._v("使用示例一")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("async getSyncScreenInfo () {\n  const res = await hatom.getSyncScreenInfo();\n  const screenInfo = JSON.parse(res.message);\n  console.log(screenInfo);\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("使用示例二")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("hatom.getSyncScreenInfo().then(res=>{\n  const screenInfo = JSON.parse(res.message);\n  console.log(screenInfo);\n});\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("参数说明：无")]),t._v(" "),s("p",[t._v("返回参数： 同上")]),t._v(" "),s("p")])}),[],!1,null,null,null);e.default=v.exports}}]);