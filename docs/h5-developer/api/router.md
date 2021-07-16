
### 路由跳转

使用路由跳转，请在入口文件传入路由对象 (hatom版本v2.1.0+)

```javascript
Vue.use(Hatom, { router })
```

#### 页面跳转

使用示例：
  ```javascript
  hatom.router.push{{ path: "page" }}
  ```
  参数说明：

  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | path | String | 是 | pageRouter.json注册的多页面名称, 或vue注册的hash路由值 |
  <br />

  #### 跳转回已经打开过的页面 

   使用示例：
   ```javascript
    const data = { path: "page" }
    hatom.router.pop(data);
   ```
  参数说明：

    同 push  可以不传，则返回上一级


#### 多页面跳转

使用示例：
  ```javascript
  /** pageName为跳转页面名称 */
  const pageName = 'page1.html'
  const data = {
  params: {
      'page': pageName
  },
  target: `html:hatom://${pageName}`
  };
  /** 跳转到page1.html */
  hatom.page.pushPage(data);
  ```
  参数说明：

  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | params | Object | 是 | 跳转页面参数， 包含页面名称 |
  | target | String | 是 | 这个字段中的 hatom 要与 webApp.json 文件中的 h5packCode 保持一致 |

  <br />

  params参数说明：
  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | page | Object | 是 | 页面名称 |

  <br />

  > 注意事项： 其余字段可扩展。

  <br />

  #### 跳转回已经打开过的页面 

   使用示例：
   ```javascript
  /** pageName为跳转页面名称 */
  const pageName = 'page2.html'
  const data = {
  params: {
      'page': pageName
  },
  target: `html:hatom://${pageName}`
  };
  /** 跳转回到page2.html */
  hatom.page.popPage(data);
   ```
  参数说明：

    同 pushPage 



#### 跳转原生页面

  使用示例:
  ```javascript
  const uri = "APP原生路由";
  const data = {
    params: {},
    target: `native:/${uri}`
  };
  hatom.page.pushPage(data);
  ```
  参数说明：

| 参数   | 类型 | 必填 | 描述     |
| -------- | ---- | ----- | -------- |
| params | Object | 否 | 跳转函数的携带参数 |
| target | String | 是 | 由包名以及页面的类名拼接的跳转uri |
| uri | String | 是 | APP原生路由 |



  #### 跳转第三方应用

  使用示例:
  ```javascript
  // 第三方应用的包名
  const packageName = "ezviz.ezopensdk";
  const data = {
    params: {},
    target: `native:/${packageName}`
  };
  /** 跳转到包名为packageName的应用 */
  hatom.page.pushPage(data);
  ```
> 当传入pageClassName 则跳转第三方应用指定页面 <br/>
> 不传pageClassName 则跳转自动跳转到应用的首页 <br/> 

  参数说明：

| 参数   | 类型 | 必填 | 描述     |
| -------- | ---- | ----- | -------- |
| params | Object | 否 | 跳转函数的携带参数 |
| target | String | 是 | 由包名拼接的跳转uri |
| packageName | String | 是 | 第三方应用的包名 |
| pageClassName | String | 否 | 指定页的类名, 可不传，不传类名则自动跳转到应用的首页 |

> 1、包名以及需要跳转的页面类名，需要找第三方开发人员对接。<br/>
> 2、iOS跳转第三方应用的uri需要找应用开放的uri配置链接。
