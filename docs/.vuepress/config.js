module.exports = {
  title: 'Hatom移动应用开发',
  description: '',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '脚手架', link: 'https://www.npmjs.com/package/hatom2-cli'},
      {text: 'Hatom平台', link: 'https://hatom2.hikyun.com' }
    ],
    sidebar: [
      {
        title: "产品介绍",
        collapsable: false,
        sidebarDepth: 1,
        path: "/product-introduction/production-introduction"
      },
      {
        title: "快速上手",
        sidebarDepth: 1,
        collapsable: false,
        path: "/quick-start/quick-start"
      },
      {
        title: "应用构建",
        sidebarDepth: 2,
        path: "/app-build/app-build",
        children: [
          {
            title: "应用创建",
            collapsable: false,
            sidebarDepth: 1,
            path: "/app-build/application-create"
          },
          {
            title: "应用编辑",
            sidebarDepth: 1,
            collapsable: false,
            path: "/app-build/application-config"
          },
          {
            title: "云编译",
            collapsable: false,
            sidebarDepth: 1,
            path: "/app-build/cloud-compile"
          }
        ]
      },
      {
        title: "H5应用开发",
        sidebarDepth: 2,
        path: "/h5-developer/H5-developer",
        children: [
          {
            title: "hatom2-cli脚手架",
            collapsable: false,
            path: "/h5-developer/H5-cli",
            sidebarDepth: 1,
          },
          {
            title: "单页面应用",
            collapsable: false,
            path: "/h5-developer/H5-spa",
            sidebarDepth: 1,
          },
          {
            title: "多页面应用",
            collapsable: false,
            path: "/h5-developer/H5-mpa",
            sidebarDepth: 1,
          },
          {
            title: "H5开发说明",
            collapsable: false,
            path: "/h5-developer/H5-cli-instruction",
            sidebarDepth: 1,
          }
        ]
      },
      {
        title: "基础插件",
        sidebarDepth: 2,
        path: "/h5-developer/H5-api",
        children: [
          {
            title: "相机/相册",
            collapsable: false,
            path: "/h5-developer/api/camera",
            sidebarDepth: 1,
          },
          {
            title: "扫二维码",
            collapsable: false,
            path: "/h5-developer/api/scan",
            sidebarDepth: 1,
          },
          {
            title: "地图",
            collapsable: false,
            path: "/h5-developer/api/map",
            sidebarDepth: 1,
          },
          {
            title: "存储",
            collapsable: false,
            path: "/h5-developer/api/storage",
            sidebarDepth: 1,
          },
          {
            title: "网络",
            collapsable: false,
            path: "/h5-developer/api/network",
            sidebarDepth: 1,
          },
          {
            title: "设备屏幕",
            collapsable: false,
            path: "/h5-developer/api/device",
            sidebarDepth: 1,
          },
          {
            title: "GPS",
            collapsable: false,
            path: "/h5-developer/api/gps",
            sidebarDepth: 1,
          },
          {
            title: "分享",
            collapsable: false,
            path: "/h5-developer/api/share",
            sidebarDepth: 1,
          },
          {
            title: "状态栏",
            collapsable: false,
            path: "/h5-developer/api/status-bar",
            sidebarDepth: 1,
          },
          {
            title: "容器",
            collapsable: false,
            path: "/h5-developer/api/page",
            sidebarDepth: 1,
          },
          {
            title: "路由",
            collapsable: false,
            path: "/h5-developer/api/router",
            sidebarDepth: 1,
          },
          {
            title: "拨号",
            collapsable: false,
            path: "/h5-developer/api/phone-call",
            sidebarDepth: 1,
          },
          {
            title: "登录",
            collapsable: false,
            path: "/h5-developer/api/root-info",
            sidebarDepth: 1,
          },
          {
            title: "消息",
            collapsable: false,
            path: "/h5-developer/api/message",
            sidebarDepth: 1,
          },
          {
            title: "生命周期",
            collapsable: false,
            path: "/h5-developer/api/life-cycle",
            sidebarDepth: 1,
          },
          {
            title: "其他接口",
            collapsable: false,
            path: "/h5-developer/api/other",
            sidebarDepth: 1,
          }
        ]
      },
      {
        title: "开发调试",
        path: "/h5-developer/H5-debug",
        sidebarDepth: 2,
        children: [
          {
            title: "chrome调试",
            collapsable: false,
            path: "/h5-developer/chrome-debug",
            sidebarDepth: 1,
          },
          {
            title: "真机调试",
            collapsable: false,
            path: "/h5-developer/device-debug",
            sidebarDepth: 1,
          }
        ]
      },
      {
        title: "开发案例",
        sidebarDepth: 2,
        path: "/example/example",
        children: [
          {
            title: "案例一",
            sidebarDepth: 1,
            collapsable: false,
            path: "/example/example1"
          },
          {
            title: "案例二",
            collapsable: false,
            sidebarDepth: 1,
            path: "/example/example2"
          },
          {
            title: "案例三",
            sidebarDepth: 1,
            collapsable: false,
            path: "/example/example3"
          },
          {
            title: "案例四",
            sidebarDepth: 1,
            collapsable: false,
            path: "/example/example4"
          }
        ]
      },
      {
        title: "常见问题",
        collapsable: false,
        sidebarDepth: "problem1",
        path: "problem1"
      }
    ], // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};