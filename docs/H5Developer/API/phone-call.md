### 拨号

  使用示例：
  ```
  hatom.phoneCall(res => {
    // 通话情况
  }, {
    phoneNumber: "XXX"
  });

  ```
  参数说明

  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | callback | 函数 | 否 | 回调函数 |
  | options | Object | 是 | 传入的参数 |

  &nbsp;

  options 说明：
  
  | 参数   | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | phoneNumber | String | 是 | 电话号码 |

  &nbsp;

  返回说明:

  | 参数 | 类型   | 描述                               |
  | ----- | ------ | ---------------------------------- |
  | code  | String | 返回码  0表示成功 |
  | message  | String | 返回的信息文本说明， "success" 表示成功  |

  &nbsp;

