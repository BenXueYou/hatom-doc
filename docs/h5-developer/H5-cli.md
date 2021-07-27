# hatom2-cli

## 安装
需要：[Node.js](https://nodejs.org/en/)(>=10.12.0), and npm version 6.4.1+, <7.0.

全局安装：

``` bash
npm install -g hatom2-cli

$ hatom -V 
2.0.0
```

非全局安装：

```ssh
npx install hatom2-cli

$ npx hatom -V
2.0.0

```
## 使用

``` bash
# 查看版本
hatom -V/--version

# 帮助信息
hatom -help

# 查看所有模板
hatom list

# 工程初始化
hatom init <template> <project>
```

> 使用前请安装git,并配置username以及邮箱

## 模板

当前提供四种工程模板：

* [spa-tpl](https://gitee.com/hatom/hatom-spa-tpl) —— 基于webapck5+vue2的hatom单页应用模板
* [spa-demo](https://gitee.com/hatom/hatom-spa-demo) —— 基于spa-tpl模板搭建的单页应用demo
* [mpa-tpl](https://gitee.com/hatom/hatom-mpa-tpl) —— 基于webapck5+vue2搭建的多页应用模板
* [mpa-demo](https://gitee.com/hatom/hatom-mpa-demo) —— 基于mpa-tpl模板搭建的多页应用demo

> 模板使用示例见
> [单页面应用](./H5-spa.md)
> [多页面应用](./H5-mpa.md)

## 使用规范

[公共组件](#cli-1)

[全局方法、全局正则](#cli-2)

[全局过滤器](#cli-3)

[布局](#cli-4)

[页面缓存](#cli-5)

[路由动画](#cli-6)

[雪碧图的使用](#cli-7)

[路由模式](#cli-8)

[业务配置](#cli-9)

[webApp.json](#cli-10)

<span id="cli-1"></span>

### 公共组件
全局新增公共组件请放置于src/components/下，采用kebab-case（短横线命名），组件结构采用统一的形式，并在src/components/index.js文件中进行注册。eg:

tabbar组件

组件结构:

``` bash
├── i-tabbar ························ tabbar组件文件夹 
│   ├── index.js ···················· install方法
│   └── src ························· 组件业务逻辑文件夹
│       └── i-tabbar.vue ············ 组件业务逻辑
```
i-tabbar.vue:

``` html
<template>
  <div class="i-tabbar">
    ...
  </div>
</template>
<script>
export default {
  name: 'ITabbar',
  data () {
     return {}
  },
  ...
}
</script>
<style lang="scss" scoped>
.i-tabbar {
  ...
}
</style>
```
index.vue:

``` javascript
import ITabbar from './src/i-tabbar.vue'
ITabbar.install = (Vue) => {
  Vue.component(ITabbar.name, ITabbar)
}
export default ITabbar
```

最后在src/components/index.js文件中进行注册:

``` javascript
import ITabbar from './i-tabbar/index.js'
const components = [  
  ITabbar
]
```
使用:

``` html
<i-tabbar></i-tabbar>

```
<span id="cli-2"></span>

### 全局方法、全局正则
全局方法、全局正则可以分别添加于src/components/utils/util.js文件和src/components/utils/reg文件中，这样，在任意vue文件中即可通过this.$+方法名/正则名直接调用。eg:

使用:

``` javascript
mounted () {
  this.$isMobie()
  this.$EMAIL_TEST('support.hikyun@hikvision.com')
}

```
<span id="cli-3"></span>

### 全局过滤器 
在src/filters/filter.js中可以注册vue全局过滤器，spa-tpl模板中，使用[dayjs(2KB)](https://www.npmjs.com/package/dayjs)默认添加了timeFormat时间格式转换，将时间格式转换为YYYY-MM-DD HH:mm:ss形式。eg:

使用:

``` html 
<template>
  <div class="time">{{ new Date() | timeFormat }}</div>
</template>

```
<span id="cli-4"></span>

### 布局
应用中通用布局可以放置于src/layouts文件夹中，再在src/router.js路由配置中通过子路由的形式使用添加好的布局，从而提高代码的复用，spa-tpl模板提供了两种布局，layout1常用的导航栏+内容+tabbar布局，layout2为导航栏+内容布局。eg:


src/router/index.js:

``` javascript
import Layout1 from '@/src/layouts/layout1
import Page1 from '@/src/page/page1/index'

staticRoutes = [
  {
    path: '/page1',
    name: 'layout1',
    component: Layout1,
    redirect: '/page1',
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: Page1
      }
    ]
  }
]

```
<span id="cli-5"></span>
### 页面缓存
PC端的分页是采用页码的形式，而移动端多采用上拉加载、下拉刷新的形式，在点击列表进入详情页面再返回的时候，如果不进行页面缓存，不仅需要重新请求资源（在需要流量付费的场景下简直无法容忍），而且列表页面也回到了最开始的第一条的位置，这时如果还想紧接上次查看的地方继续往下，就需要不断滑动，直到滑动到上次的位置，当数据量多的时候可能再也回不到上一次查看的位置了。试想一下你们刷今日头条的场景吧。
因此，在移动端开发的时候，需要对页面进行缓存。我们这里采用vue的内置组件[keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)，提供了一种通用的实现页面缓存的方案，当然，也有很多其他的方案，比如[vue-page-stack](https://github.com/hezhongfeng/vue-page-stack/blob/HEAD/README.zh-cn.md), 请开发者根据实际场景自行评估，这里不再赘述。下面将介绍hatom如何用keep-alive组件实现页面缓存:

src/layouts/layout1.vue:

```html
<template>
  <keep-alive :include="whiteList" :exclue="blackList">
    <router-view></router-view>
  </keep-alive>
</template>
<script>
export default {
  data () {
    return {
      whiteList: [],
      blackList: []
    }
  },
  watch: {
     $route: {
        immediate: true,
        handler (newRoute, oldRoute) {
          if (newRoute.meta.cache) {
            this.whiteList = Array.from(new Set([newRoute.name, ...this.whiteList]))
            this.blackList = this.blackList.filter((name) => name !== newRoute.name)
          } else {
            this.whiteList = this.whiteList.filter((name) => name !== newRoute.name)
            this.blackList = Array.from(new Set([newRoute.name, ...this.blackList]))
          }
        }
     }
  }
}
</script>
```

src/router/index.js:

``` javascript
router.beforeEach((to, from, next) => {
  to.meta.cache = to.query.cache || true
  next()
})
```

记录页面位置,src/pages/page1/index.vue:

``` javacript
<template>
  <div class="page1"></div>
</templage>
<script>
export default {
  name: 'page1',
  data () {
    return {
      scrollTop: 0
    }  
  },
  beforeRouteLeave (to, from, next) {
    this.scrollTop = document.querySelector('.page1').scrollTop
    next()
  },
  activated () {
    document.querySelector('.page1').scrollTop = this.scrollTop;
  }
}

</script>
```

使用:

``` javascript
this.$router.push({ path: '/page1', query: { cache: true } })

```

<span id="cli-6"></span>

### 路由动画
如果想提升用户体验，最好在页面切换的过程中加上过渡动画。同样，我们也提供了一种实现路由动画的的方案，你要做的只是一些简单的配置。在我们的方案中，由浅层级的页面过渡到深层级的页面，采用从右至左的过渡方式，相反，采用从左至右的过渡方案，具体配置如下：

src/router/index.js

``` javascript
// 在meta标签中配置页面层级，如：
{
  path: '/index',
  name: 'index',
  component: Index,
  meta: { deep: 0 }
},
{
  path: '/page1',
  name: 'page1',
  component: Page1,
  meta: { deep: 1 }
}

// 在全局路由守卫中，根据deep,动态设置全局变量$directon
router.before((to, from, next) => {
  Vue.prototype.$direction = to.meta >= from.meta.deep ? 'left' : 'right'
})
```
在使用```<router-view>```的地方，添加```<transition>```动画，如在src/App.vue中：

```
<template>
  <div id="app">
    <transition :name="$direction"><router-view></router-view></transition>
  </div>
</template>

```

设置动画样式，在src/assets/styles/animation.css中：

``` css
/** 左飞入 */
.left-enter {
  transform: translateX(100%);
}

.left-enter-to {
  transform: translateX(0);
}

.left-enter-active {
  transition: 0.3s;
}

/** 右飞入 */
.right-enter {
  transform: translateX(-100%);
}

.right-enter-to {
  transform: translateX(0);
}

.right-enter-active {
  transition: 0.3s;
}

```
<span id="cli-7"></span>

### 雪碧图的使用
将一些小图标制作成一张雪碧图，是一个比较好的主意。多亏了[webpack-spritesmith](https://www.npmjs.com/package/webpack-spritesmith)插件，我们在此基础上进行了一些封装和配置，使雪碧图制作和使用非常方便。你需要做的就是：

1、将图标文件例如arrow-left.png拖动到/src/assets/icons文件件内

2、在需要使用的地方引入`<i class="icon-arrow-left></i>`

确实只需要如此简单的两步。hatom会将/src/assets/icons文件夹内的所有文件，制作成雪碧图sprite.png并放置于src/assets/images文件夹内，同事生成相关的定位样式sprite.css放置于src/assets/styles中。

<span id="cli-8"></span>


### 路由模式
vue支持hash和history两种模式的路由配置，但基于某些原因，hatom只能支持hash模式的路由配置，否则会达不到预期的结果。

<span id="cli-9"></span>

### 业务配置
在src/config目录中，可以进行一些全局变量的配置：

* api.js 配置接口地址，如在api.js配置 BAIDU:'https://www.baidu.com', 可以在任意vue文件中通过`this.$BAIDU`引用

* constant.js 配置全局常量,如配置SHEIGHT:screen.height，通过`this.SHEIGHT`引用，建议常量使用大写字母命名

* http.js axios全局拦截器，可以在`request.interceptors.request`和`request.interceptors.response`进行相关业务的配置，如鉴权方面的操作等

* webApp.json 是app的相关设置，具体参数可以说明可以参考<a href="#cli-9">webApp.json</a>

<span id="cli-10"></span>

#### webApp.json
webApp.json文件是应用相关的设置，一般在脚手架生成项目时与package.json保持一致，但也可以手动进行设置，相关参数为：

|  参数   | 说明  | 类型  | 默认配置  |
|  ----  | ----  | ----  | ----  |
| h5packCode | 包名 | String | - |
| versionName  | 版本号 | String | 1.0.0 |
| author  | 作者 | String | support.hikyun@hikvision.com |
| description  | 描述 | String | A hatom project |
| updateTime  | 单元格 | String  | 项目创建时间 |
| androidMinNativeVersion  | 安卓版本号 | Sting | 1.0.0 |
| iOSMinNativeVersion  | iOS版本号 | String | 1.0.0 |
| url  | 应用远程地址，""为本地加载，可自定义调试工具 | String |   |
| componentId  | 插件集 | Array | ["componentId1", "componentId2"] |
| menuList | 门户组件 菜单项配置 | Array | [] |
| ext  | 拓展字段 | Object | {} |
