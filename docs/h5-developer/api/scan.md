### 扫码二维码

  使用示例：

  ```javascript
  hatom.scan(res => {
    const message = JSON.parse(res.message)
    console.log(message);
  });
  ```

  参数说明

  | 参数     | 类型 | 必填 | 描述     |
  | -------- | ---- | ----- | -------- |
  | callback | 函数 | 是 | 回调函数 |

  &nbsp;

  返回参数：

  | 参数 | 类型   | 描述                               |
  | ----- | ------ | ---------------------------------- |
  | code  | string | 返回码  0表示成功 |
  | message  | string | 返回值  json字符串 |

  &nbsp;

  json字符串通过JSON.parse(message)转为对象,
  参数如下所示：

  | 参数      | 类型   | 描述                                |
  | --------- | ------ | ----------------------------------- |
  | text      | String | 扫描所获得的信息（文本/链接         |
  | format    | String | 扫描码格式：AZTEC、CODABAR、CODE_39、CODE_93、CODE_128、DATA_MATRIX、EAN_8、EAN_13、ITF、MAXICODE、PDF_417、QR_CODE、RSS_14、UPC_A、UPC_E、UPC_EAN_EXTENSION |
  | cancelled | Boolean   | false-取消扫描 true-没有取消扫描    |

  &nbsp;
