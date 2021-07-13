### 常见H5开发问题：

#### Q1：应用打包编译之后，出现空白页？

答：应用打包之后出现空白页，解决步骤：

##### 1. 首先使用远程调试工具，排除代码逻辑问题。

##### 2. 打包之后，本地打开index.html，排除配置问题。

##### 3. 确认模板问题，老版本hatom1.0多页面的脚手架，使用无登录的模板打包。需要在main.js中, 去掉：hatom.rootInfo.getRootInfo 这个接口的调用

   ```js
   let app = {
       bms: '',
       init: function () {
       },
       onReady: function () {
          // hatom.rootInfo.getRootInfo(
               //(res) => {
                   this.bms = new Vue({
                       store,
                       router,
                       render: h => h(App)
                   }).$mount('#app');
               //}
          // );
       },
       bindEvent: function () {
           this.onReady();
       }
   };
   
   ```

4. 确认没有修改脚手架打包之后的zip包，若是使用老版本的脚手架或是自定义了脚手架zip包，需要在zip包内加一个根目录。

   

#### Q2：已经全局安装hatom1.0版本，安装hatom2需要卸载原来的老版本吗？

答：是的，老版本hatom1.0脚手架与hatom2.0脚手架不兼容。
采用全局安装hatom2-cli需要卸载老版本的脚手架：

```
// 全局安装
hatom init spa-tpl hello
```


npx局部安装：

```
//局部安装
npx hatom init spa-tpl hello
```

hatom2-cli是没有影响的，npx工具的使用方法，需要自行查询使用方法。

[https://www.npmjs.com/package/npx]: https://www.npmjs.com/package/npx



#### Q3：解决脚手架初始化模板，报错: spawn git ENOENT

答：git的命令环境变量出错， 安装git， 同时配置git的用户名以及邮箱。



#### Q4：能用这个脚手架开发H5 ，然后打包后放到tomcat服务中么？

答：可以用脚手架打包，放到tomcat中的，同时脚手架中是支持远程加载的。 hatom2-cli脚手架的本质还是和vue-cli是一样的，只是做了一些hatom相关的基础插件，统一了项目模板。

#### Q5：和后端的联调是和普通web项目一样的吗？

答：是的，我们现在网络请求 直接使用axios进行网络请求的，所以接口调试跟平时开发一样的。

#### Q6：这个移动端的屏幕滚动是用的原生的滚动还是用了插件？

答：当前脚手架并未对屏幕的滚动条做其他的封装，所以还是原生的滚动条。开发者可以根据自己的喜欢封装滚动条样式，或是引入第三方插件：betterScroll。

#### Q7：1.0版本的获取登录用户和服务端地址的接口还在吗？

答：获取登录用户和服务端地址的 接口还在的，仍然是：hatom.rootInfo.getRootInfo。

#### Q8：可以跟原生APP混合开发吗？

答：当前hatom推荐的就是混合开发模式，hatom平台的组件广场内全部是原生的APP开发的业务组件，在平台上APP应用，选择模板组件，上传H5应用zip包，在线云编译，混合打包成apk或是ipa应用。

#### Q9：刘海屏等其他屏幕的适配怎么样？

答：屏幕状态栏的适配。我们默认是沉侵式的，并提供了两个插件接口：

```js
// 设置状态栏模式 dark以及light, 
hatom.statusBar.setStatusBarMode({
  iconMode: 'dark'
},
(res) => {
  console.log(res)
})
```

获取设备屏幕信息以及状态栏的高度，详细请查询平台帮助文档。

```js
以及获取设备屏幕高度插件：
hatom.getScreenInfo(res => {
    const message = JSON.parse(res.message)
    console.log(message);
})
```



#### Q10：只能用来制作apk吗，可以用来做微信小程序之类的吗？

答： 目前只能制作apk和ipa,小程序之类的我们也在研究，欢迎大家共同加入~

#### Q11：您说的是哪个模板有下拉实现懒加载？

答： 脚手架提供了单页面demo工程命令：hatom init spa-demo hatom-spa-demo。欢迎大家下载查阅。

#### Q12：后面有打算出ios版本的调试工具么？

答：ios版本的调试工具会在4月21号发布，在平台的工具下载，远程工具调试。

#### Q13：咱们公司目前就是H5加原生的这样的混合模式,没有直接类似ReactNative这样的直接能打包app的架构吗？

答：暂时推出的就是H5加原生的混合开发，RN、Weex、滴滴的Hummer我们也在研究。

#### Q14：云曜构架开发的项目选择模板时能选择空白模板测试吗?

答： 云曜架构开发选择模板时，可以选择空白模板。空白模板是hatom平台最基础最简单的模板。非常适合移动应用开发入门，快速上手使用。

#### Q15: ```hatom init <tpl> <projectName>``` 报错：
``` bash
 download templateError: 'git clone' failed with status 128
⠼ download templateError: 'git clone' failed with status 128
    at ChildProcess.<anonymous> (D:\HIK\hatom\hatom-cli\node_modules\git-clone\index.js:33:22)
    at ChildProcess.emit (events.js:315:20)
    at maybeClose (internal/child_process.js:1048:16)
    at Socket.<anonymous> (internal/child_process.js:439:11)
    at Socket.emit (events.js:315:20)
    at Pipe.<anonymous> (net.js:673:12)
✖ 模板下载失败
```
答：该目录下已经有一个相同名字的仓库， 请删除原来的仓库，重新下载