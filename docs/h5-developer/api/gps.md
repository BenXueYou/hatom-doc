### 获取GPS定位

#### getLocation 获取当前定位信息

使用示例：
```javascript
  hatom.locationInfo.getLocation(res => {
    const message = JSON.parse(res.message)
    console.log(message);
  })
```
返回说明：

  | 参数 | 类型   | 描述                               |
  | ----- | ------ | ---------------------------------- |
  | code  | string | 返回码  0表示成功 |
  | message  | string | 返回值  json字符串 |

  &nbsp;
    
json字符串通过JSON.parse(message)转为对象, 参数如下所示：

  | 参数      | 类型   | 描述                                |
  | --------- | ------ | ----------------------------------- |
  | latitude      | number | 纬度        |
  | longitude |   number   | 经度    |

&nbsp;

#### getLocationPermission 跳转手机定位权限设置页面

使用示例：
```javascript
/** 可通过回调函数判断是否成功调用，也可不传回调函数直接调用该方法  */
  hatom.locationInfo.getLocationPermission(res => {
    console.log(res.message);
  })
```
返回说明：

| 参数 | 类型   | 描述                               |
| ----- | ------ | ---------------------------------- |
| code  | string | 返回码  0表示成功 |

&nbsp;

#### turnOffLocation 关闭手机定位

使用示例：
```javascript
/** 可通过回调函数判断是否成功调用，也可不传回调函数直接调用该方法 */
  hatom.locationInfo.turnOffLocation(
    res => {
      console.log(res);
    }
  );
```
返回说明：

| 参数 | 类型   | 描述                               |
| ----- | ------ | ---------------------------------- |
| code  | string | 返回码  0表示成功 |

&nbsp;