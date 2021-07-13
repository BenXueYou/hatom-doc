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
        source: "PrdInfo",
        collapsable: false,
        sidebarDepth: 1,
        path: "/ProductIntroduction/production-introduction"
      },
      {
        title: "快速上手",
        source: "QuickStart",
        collapsable: false,
        path: "/QuickStart/quick-start"
      },
      {
        title: "应用构建",
        source: "AppBuild",
        path: "/AppBuild/app-build",
        children: [
          {
            title: "应用创建",
            collapsable: false,
            source: "ApplicationCreate",
            path: "/AppBuild/application-create"
          },
          {
            title: "应用编辑",
            source: "ApplicationConfig",
            collapsable: false,
            path: "/AppBuild/application-config"
          },
          {
            title: "云编译",
            collapsable: false,
            source: "CloudCompile",
            path: "/AppBuild/cloud-compile"
          }
        ]
      },
      {
        title: "H5应用开发",
        source: "H5Developer",
        path: "/H5Developer/H5-developer",
        children: [
          {
            title: "hatom2-cli脚手架",
            collapsable: false,
            path: "/H5Developer/H5-cli",
            source: "H5Cli"
          },
          {
            title: "单页面应用",
            collapsable: false,
            path: "/H5Developer/H5-spa",
            source: "SPA"
          },
          {
            title: "多页面应用",
            collapsable: false,
            path: "/H5Developer/H5-mpa",
            source: "MPA"
          },
          {
            title: "H5开发说明",
            collapsable: false,
            path: "/H5Developer/H5-cli-instruction",
            source: "H5CliInstruction"
          }
        ]
      },
      {
        title: "基础插件",
        source: "H5Api",
        path: "/H5Developer/H5-api",
        children: [
          {
            title: "相机/相册",
            collapsable: false,
            path: "/H5Developer/API/camera",
            source: "Camera"
          },
          {
            title: "扫二维码",
            collapsable: false,
            path: "/H5Developer/API/scan",
            source: "Scan"
          },
          {
            title: "地图",
            collapsable: false,
            path: "/H5Developer/API/map",
            source: "Maps"
          },
          {
            title: "存储",
            collapsable: false,
            path: "/H5Developer/API/storage",
            source: "Storage"
          },
          {
            title: "网络",
            collapsable: false,
            path: "/H5Developer/API/network",
            source: "Network"
          },
          {
            title: "设备屏幕",
            collapsable: false,
            path: "/H5Developer/API/device",
            source: "Device"
          },
          {
            title: "GPS",
            collapsable: false,
            path: "/H5Developer/API/gps",
            source: "GPS"
          },
          {
            title: "分享",
            collapsable: false,
            path: "/H5Developer/API/share",
            source: "Share"
          },
          {
            title: "状态栏",
            collapsable: false,
            path: "/H5Developer/API/status-bar",
            source: "StatusBar"
          },
          {
            title: "容器",
            collapsable: false,
            path: "/H5Developer/API/page",
            source: "Page"
          },
          {
            title: "路由",
            collapsable: false,
            path: "/H5Developer/API/router",
            source: "Router"
          },
          {
            title: "拨号",
            collapsable: false,
            path: "/H5Developer/API/phone-call",
            source: "PhoneCall"
          },
          {
            title: "登录",
            collapsable: false,
            path: "/H5Developer/API/root-info",
            source: "RootInfo"
          },
          {
            title: "消息",
            collapsable: false,
            path: "/H5Developer/API/message",
            source: "Message"
          },
          {
            title: "生命周期",
            collapsable: false,
            path: "/H5Developer/API/life-cycle",
            source: "LifeCycle"
          },
          {
            title: "其他接口",
            collapsable: false,
            path: "/H5Developer/API/other",
            source: "Other"
          }
        ]
      },
      {
        title: "开发调试",
        path: "/H5Developer/H5-debug",
        source: "H5Debug",
        children: [
          {
            title: "chrome调试",
            collapsable: false,
            path: "/H5Developer/chrome-debug",
            source: "ChromeDebug"
          },
          {
            title: "真机调试",
            collapsable: false,
            path: "/H5Developer/device-debug",
            source: "DeviceDebug"
          }
        ]
      },
      {
        title: "开发案例",
        source: "Example",
        path: "/example/example",
        children: [
          {
            title: "案例一",
            source: "Example1",
            collapsable: false,
            path: "/example/example1"
          },
          {
            title: "案例二",
            collapsable: false,
            source: "Example2",
            path: "/example/example2"
          },
          {
            title: "案例三",
            source: "Example3",
            collapsable: false,
            path: "/example/example3"
          },
          {
            title: "案例四",
            source: "Example4",
            collapsable: false,
            path: "/example/example4"
          }
        ]
      },
      {
        title: "常见问题",
        collapsable: false,
        source: "problem1",
        path: "problem1"
      }
    ], // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};