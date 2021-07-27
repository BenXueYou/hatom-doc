### 本地存储

#### setItem 本地存储

使用示例：

```javascript
let key = "company";
let value = "hikvision";
/** 传参均为字符串，value可传json字符串 */
hatom.storage.setItem(key, value);
```
参数说明：

| 参数  | 类型          | 必填 |              描述              |
| ----- | -------------- | ------ | :----------------------------: |
| key   | String        | 是 |      本地缓存中指定的 key      |
| value | String | 是 | 需要存储的内容,可传json字符串 |

&nbsp;

返回参数

无

&nbsp;

#### getItem 获取本地缓存

使用示例：

```
  let key = "company";
  hatom.storage.getItem(key, res => {
    // 通过回调函数获取已存储数据
    console.log(res.message);
  });
```
参数说明：

| 参数 | 类型  | 必填 |         描述         |
| ---- | ------ | ----- | :------------------: |
| key  | String | 是 | 本地缓存中指定的 key |

&nbsp;

返回参数：

| 参数 | 类型   | 描述                               |
| ----- | ------ | ---------------------------------- |
| code  | String | 返回码  0表示成功 |
| message  | String | 返回值  |

&nbsp;