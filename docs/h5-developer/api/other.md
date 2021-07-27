### setBridge 注册原生消息

  使用示例：
  ```javascript
  /** 
   * 向原生端注册一个方法，供原生端调用
   * 以onBackPressed为例子，注册一个onBackPressed方法用于监听安卓虚拟返回键
   */
  hatom.setBridge("onBackPressed", res => {
    // 在此处处理消息通知
    hatom.page.back()
  });
  ```
  参数说明：
  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | funcName | String | 是 | 事件名称，作为消息通道，名称唯一，重复则会覆盖原有的消息通道 |
  | callback | Function | 是 | 回调函数 |

<br />

&nbsp;

### native调用原生自定义的插件方法

  当APP新开了一个自定义的接口，H5端需要采用native方法去调用原生APP自定义的方法

使用示例：

```javascript
  hatom.native('Plugin.funcName', (res) => {
    console.log(res);
  }, params )
```
参数说明：

| 参数 | 类型  | 必填 |         描述         |
| ---- | ------ | ----- | :------------------: |
| Plugin.funcName  | String | 是 | Plugin:插件的类名，funcName:插件的方法名称 |
| callback  | Function | 是 | 插件的回调 |
| params  | Object | 否 |  可不传，传值的时候必须是{}， 例如{arr: [], id："123"}|
