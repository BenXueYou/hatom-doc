### 消息通知

前端接收报警消息是通过APP原生组件，报警消息组件转发的

  - 前端通过setBridge 向原生APP注册一个接受消息的方法   例如：getMessage

  - 再通过startMessage 将注册的消息方法（getMessage），传递给消息组件， 让原生消息组件接收到消息，就回调getMessage这个方法，转发给前端。

  - 在getMessage方法中就可以获取到原生消息组件的转发的消息

  - stopMessage 是停止接受消息通知

#### startMessage 开启消息通知

  使用示例：
  ```javascript
  /**
   * 注册消息通道
   * 在开启消息通知之前提需注册一个方法作为消息通道，供原生消息调用
   * 以getMessage为例子，注册一个getMessage方法用于处理接收消息
   * 同一个页面消息通道必须唯一，注册的方法getMessage只能供也页面使用
   */
  hatom.setBridge(`getMessage`, res => {
    // 在此处处理消息通知
    console.log("----getMessage方法回调-----");
  });
  /** 开启消息通知
   *  将参数传给原生端，然后原生接受到消息就会调用getMessage方法，
   *  前端通过getMessage处理消息就可以 
   */
  const data = {
      message: `getMessage`
  };
  hatom.message.startMessage(
    res => {
        console.log(res.message);
    },
    data
  );
  ```
  参数说明:
  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ------ | -------- |
  | callback | 函数  | 是 | 回调函数 |
  | data | Object  | 是 | 注册的消息通道 |  

  <br />
  data说明：

  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ------ | -------- |
  | message | String  | 是 | 与之前setBridge注册的事件名称保持一致 |

> 同一个页面，setBridge有且只能注册同一个消息通道，否则会被覆盖掉

#### stopMessage 停止接收消息

  使用示例：
  ```javascript
  const data = {
    message: `getMessage`
  };
  //关闭消息通知
  hatom.message.stopMessage(res => {
    console.log(res.message);
  }, data);
  ```

  参数说明:
  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ------ | -------- |
  | callback | 函数  | 是 | 回调函数 |
  | data | Object  | 是 | 注册的消息通道 |

  <br />
  data说明：

  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ------ | -------- |
  | message | String  | 是 | 与之前setBridge注册的事件名称保持一致 |