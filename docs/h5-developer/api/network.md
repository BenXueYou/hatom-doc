### 网络状态
  使用示例：
  ```
  hatom.networkManager(res => {
    /** 根据返回信息message判断当前网络状态 */
    console.log(res.message);
  });
  ```
  参数说明：

  | 参数 | 类型 | 必填 | 描述 |
  | -------- | ---- | ----- | -------- |
  | callback | 函数 | 是 | 回调函数 |

  &nbsp;

  返回说明：

  | 参数 | 类型   | 描述                               |
  | ----- | ------ | ---------------------------------- |
  | code  | string | 返回码  0表示成功 |
  | message  | string | 返回值 枚举值 |

  &nbsp;

  message的枚举值说明

  | 参数   | 类型   | 描述         |
  | -------- | ------ | ------------ |
  | unknown  | String | 未知连接     |
  | ethernet | String | 以太网连接   |
  | wifi     | String | WiFi 连接    |
  | 2g       | String | 2G 网络      |
  | 3g       | String | 3G 网络      |
  | 4g       | String | 4G 网络      |
  | none     | String | 没有网络连接 |

  &nbsp;