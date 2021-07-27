### 页面生命周期

<br />
原生打开前端页面会有一个生命周期：onStart、onStop、onDestroyView
<br />

#### onStart
  主要用于刚进入页面需要执行的操作，由于首次进入页面的时候，页面刚打开的时候 onStart 事件还未注册，因此调用不到，但可以用 Vue 的生命周期函数进行规避。举例应用场景：A 页面注册 onStart 事件--->跳转到 B 页面---->在 B 页面进行操作(对 A 页面有影响)---->返回 A 页面---->(此时 A 页面需要执行一些操作)可在 onStart 事件进行处理。
  <br />
  使用示例：
  
  ```javascript
  hatom.setBridge("onStart", res => {
    // 执行onStart回调
  });
  ```
  参数说明：
  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | onStart | String | 是 | 事件名称，固定值：onStart |
  | callback | Function | 是 | 回调函数 |

<br />

#### onStop
  页面隐藏不可见时会触发该生命周期函数。举例应用场景：A 页面注册 onStop 事件---->(即将跳转 B 页面)执行 onStop 事件----->跳转到 B 页面。
  使用示例：
  ```javascript
  hatom.setBridge("onStop", () => {
    // 执行onStop回调
  });
  ```
  参数说明：
  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | onStop | String | 是 | 事件名称，固定值：onStop |
  | callback | Function | 是 | 回调函数 |

<br />

#### onDestroyView
  页面销毁时，页面销毁时需要进行资源的回收，类似消息推送等。

  使用示例：
  ```javascript
  hatom.setBridge("onDestroyView", () => {
    // 执行onDestroyView回调，进行资源释放
  });
  ```
  参数说明：
  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | onDestroyView | String | 是 | 事件名称，固定值：onDestroyView |
  | callback | Function | 是 | 回调函数 |
