(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{395:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"setbridge-注册原生消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setbridge-注册原生消息"}},[t._v("#")]),t._v(" setBridge 注册原生消息")]),t._v(" "),s("p",[t._v("使用示例：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** \n * 向原生端注册一个方法，供原生端调用\n * 以onBackPressed为例子，注册一个onBackPressed方法用于监听安卓虚拟返回键\n */")]),t._v("\nhatom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBridge")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onBackPressed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在此处处理消息通知")]),t._v("\n  hatom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("参数说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("funcName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("事件名称，作为消息通道，名称唯一，重复则会覆盖原有的消息通道")])]),t._v(" "),s("tr",[s("td",[t._v("callback")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("回调函数")])])])]),t._v(" "),s("br"),t._v(" "),s("p"),t._v(" "),s("h3",{attrs:{id:"native调用原生自定义的插件方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native调用原生自定义的插件方法"}},[t._v("#")]),t._v(" native调用原生自定义的插件方法")]),t._v(" "),s("p",[t._v("当APP新开了一个自定义的接口，H5端需要采用native方法去调用原生APP自定义的方法")]),t._v(" "),s("p",[t._v("使用示例：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  hatom.native('Plugin.funcName', (res) => {\n    console.log(res);\n  }, params )\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("参数说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Plugin.funcName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Plugin:插件的类名，funcName:插件的方法名称")])]),t._v(" "),s("tr",[s("td",[t._v("callback")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("插件的回调")])]),t._v(" "),s("tr",[s("td",[t._v("params")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v('可不传，传值的时候必须是{}， 例如{arr: [], id："123"}')])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);