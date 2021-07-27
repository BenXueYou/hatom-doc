(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{409:function(t,a,s){"use strict";s.r(a);var o=s(44),e=Object(o.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"真机调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#真机调试"}},[t._v("#")]),t._v(" 真机调试")]),t._v(" "),s("p",[t._v("通过从平台下载调试模板，和npm run dev（或者npm run debug）启动的开发服务来实现真机调试")]),t._v(" "),s("h3",{attrs:{id:"一、启动开发服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、启动开发服务"}},[t._v("#")]),t._v(" 一、启动开发服务")]),t._v(" "),s("h4",{attrs:{id:"_1-老版本调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-老版本调试"}},[t._v("#")]),t._v(" 1.老版本调试")]),t._v(" "),s("p",[t._v("前端开发模板中已经配置有npm run dev相关的指令，可以在Terminal中输入如下命令启动开发服务：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("前端开发服务启动后，将需调试的页面地址输入到调试模板的相关输入框中。")]),t._v(" "),s("h4",{attrs:{id:"_2-新版本调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-新版本调试"}},[t._v("#")]),t._v(" 2.新版本调试")]),t._v(" "),s("p",[t._v("老版本真机调试需要在移动设备上操作，由于设备屏幕普遍偏小，vconsole提供的控制台查看及复制输入等操作不方便，因此提供一种新的远程调试方法。（需要使用最新的模板生成项目，目前仅支持单页应用）")]),t._v(" "),s("blockquote",[s("p",[t._v("新版调试指令为npm run debug，与老版本调试指令不冲突，npm run dev指令依旧可以正常使用，与原先功能一致。")])]),t._v(" "),s("p",[t._v("在Terminal中输入")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run debug\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("项目启动时pc端浏览器中界面如图所示。\n项目初始化时，默认会有二维码遮罩层，使用移动端调试工具扫描连接之后遮罩层会自动消失，移动端设备连接断开后又会出现。（若为老版本调试工具无二维码扫描功能，直接输入网址也可连接，注意此调试状态下协议为http而非https）\n")]),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/H5Developer/images/new_debug.png",alt:"Markdown"}})]),s("p"),t._v(" "),s("p",[t._v("项目不涉及到移动端原生的功能可以在pc浏览器上进行调试，涉及到原生功能（例如拍照，二维码扫描等），在pc浏览器上点击调用时，移动端（保证移动设备已连接）会自动调用该功能，并且pc浏览器上会出现正在调用该功能的遮罩层，如图所示。\n")]),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/H5Developer/images/function_calling.png",alt:"Markdown"}})]),s("p"),t._v(" "),s("p",[t._v("功能调用完成后hatom会返回调用结束信息，并且执行代码中自定义的回调函数，遮罩层消失。（部分功能没有结束信息返回，或者代码没有编写回调函数可能会导致遮罩层无法正常消失，如果遇到此种情况，刷新浏览器可恢复正常）")]),t._v(" "),s("blockquote",[s("p",[t._v("若回调函数为alert等阻塞浏览器的，会导致遮罩层卡住或者出现后立即消失，这是因为部分功能返回速度过快，此为正常现象。\n")]),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/H5Developer/images/function_called.png",alt:"Markdown"}})]),s("p")]),t._v(" "),s("h3",{attrs:{id:"二、下载和安装调试工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、下载和安装调试工具"}},[t._v("#")]),t._v(" 二、下载和安装调试工具")]),t._v(" "),s("p",[t._v("平台提供了4种调试工具：无构架调试工具、域见构架(isee)调试工具、云远构架(ifar)调试工具以及自定义调试工具")]),t._v(" "),s("h4",{attrs:{id:"_1-无构架调试工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-无构架调试工具"}},[t._v("#")]),t._v(" 1.无构架调试工具")]),t._v(" "),s("blockquote",[s("p",[t._v("不依赖于任何构架，只需在工具中输入前端开发服务中需要调试的页面地址后点击确定即可开始真机调试")])]),t._v(" "),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/debug_tool.png",alt:"Markdown"}})]),t._v(" "),s("blockquote",[s("p",[t._v("新版调试工具提供二维码扫描功能，可以直接扫描网址二维码自动输入网址，无需手动输入（当然手动输入也可）\n")]),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"38%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/H5Developer/images/new_debug_tool.jpg",alt:"Markdown"}})]),s("p")]),t._v(" "),s("h4",{attrs:{id:"_2-域见构架-isee-调试工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-域见构架-isee-调试工具"}},[t._v("#")]),t._v(" 2.域见构架(isee)调试工具")]),t._v(" "),s("blockquote",[s("p",[t._v("依赖于域见构架(isee)，只需在工具中输入账号、密码、服务器地址（isee平台地址）点击登录后进入配置页面，在配置页面中输入前端开发服务中需要调试的页面地址后点击ENTER开始调试")])]),t._v(" "),s("p",[t._v("缺图")]),t._v(" "),s("h4",{attrs:{id:"_3-云远构架-ifar-调试工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-云远构架-ifar-调试工具"}},[t._v("#")]),t._v(" 3.云远构架(ifar)调试工具")]),t._v(" "),s("blockquote",[s("p",[t._v("依赖于域见构架(ifar)，只需在工具中输入账号、密码、服务器地址（ifar平台地址）点击登录后进入配置页面，在配置页面中输入前端开发服务中需要调试的页面地址后点击ENTER开始调试")])]),t._v(" "),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/ifar_debug_tool_1.png",alt:"Markdown"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/ifar_debug_tool_2.png",alt:"Markdown"}})]),t._v(" "),s("h4",{attrs:{id:"_4-自定义调试工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义调试工具"}},[t._v("#")]),t._v(" 4.自定义调试工具")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("使用平台模板任意创建一个H5工程\n下载前端开发模板，或者通过hatom-cli新建项目")])]),t._v(" "),s("li",[s("p",[t._v("修改webApp.json文件\n在webApp.json文件中配置前端开发服务中需调试的页面地址\n"),s("font",{attrs:{color:"red",size:"4"}},[t._v("注：配置url后，该文件下方的菜单配置会失效")])],1),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/修改WebApp.png"}})]),s("p")]),t._v(" "),s("li",[s("p",[t._v("打包上传到应用的H5资源包列表中\n将修改后的前端开发模板打包后上传到H5资源包中\n")]),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/上传H5%20URL资源包.png"}})]),s("p")]),t._v(" "),s("li",[s("p",[t._v("添加其他组件和填写配置项")]),t._v(" "),s("p",[t._v("4.1、 添加所需组件 (一般情况下不需要添加组件)\n")]),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/添加组件.png"}})]),s("p"),t._v(" "),s("blockquote",[s("p",[t._v("当依赖于云曜构架（infocloud），由于云曜构架需配置的信息较多，所以建议使用线上云编译的模式进行打包，该方法也适用于任何需要自定义模板调试的场景。")])]),t._v(" "),s("blockquote",[s("p",[t._v("创建应用")])]),t._v(" "),s("blockquote",[s("p",[t._v("选择云曜空白模板")])]),t._v(" "),s("blockquote",[s("p",[t._v("完成其他配置，完成其他应用配置，如果只是调试用，则应用信息和人员配置可以无须配置，只需要完成证书配置即可。")])]),t._v(" "),s("p",[s("font",{attrs:{color:"red",size:"4"}},[t._v("注：详细应用创建流程请参照开发指南中的应用创建章节")])],1),t._v(" "),s("p",[t._v("4.2、填写开放配置项\n"),s("font",{attrs:{color:"red",size:"4"}},[t._v("注：基础配置需认真填写")])],1),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/填写开放配置项.png"}})]),s("p"),t._v(" "),s("p",[t._v("4.3、云编译和扫码安装")]),t._v(" "),s("p",[t._v("点击云编译等待编译成功后，扫码安装\n"),s("font",{attrs:{color:"red",size:"4"}},[t._v("注：编译需要等待大概2-3分钟")])],1),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/云编译.png"}})]),s("p"),t._v(" "),s("p",[t._v("4.4、调试")]),t._v(" "),s("p",[t._v("打开云曜调试工具后，直接输入对应环境的用户名和密码后就能进入调试页面。")])])]),t._v(" "),s("h3",{attrs:{id:"三、调试方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、调试方法"}},[t._v("#")]),t._v(" 三、调试方法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("配合vConsole调试工具，可在手机上查看控制台输出、查看请求参数结果等。\n")])])]),t._v(" "),s("div",{attrs:{align:"left"}},[s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/vconsole1.png"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%",border:"6px solid #eaecef"},attrs:{src:"https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/QuickStart/images/vconsole2.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);