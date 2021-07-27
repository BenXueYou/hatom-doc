### 跳转地图

  使用示例：
  ```javascript
    let params = {
      coordType: "WGS84",
      latitude: "31.311381",
      longitude: "121.516675"
    };
    hatom.goMapApp(() => {}, params);
  ```
  参数说明：
  
  | 参数       | 类型  | 必填 | 描述                                   |
  | ---------- | ------ | ----- | -------------------------------------- |
  | callback   | 函数  | 是 | 回调函数                               |
  | options | String | 是 | 坐标类型：CGCS2000、WGS84、GCJ02、BD09 |

  &nbsp;

  options 参数说明

  | 参数       | 类型  | 必填 | 描述                                   |
  | ---------- | ------ | ----- | -------------------------------------- |
  | coordType | String | 是 | 坐标类型：CGCS2000、WGS84、GCJ02、BD09 |
  | latitude  | String |  是 |经度                                   |
  | longitude | String |是| 纬度                                    |

  &nbsp;

  返回参数

  无

  &nbsp;