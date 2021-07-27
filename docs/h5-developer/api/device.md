### 获取设备信息

#### 异步获取设备信息

使用示例：
```javascript
hatom.getScreenInfo(res => {
    console.log(res.message);
})

```
参数说明：

| 参数   | 类型 | 必填 | 描述     |
| -------- | ---- | ----- | -------- |
| callback | 函数 | 是 | 回调函数 |

&nbsp;

| 参数 | 类型   | 描述                               |
| ----- | ------ | ---------------------------------- |
| code  | String | 返回码  0表示成功 |
| message  | String | 返回值 json 字符串|

json字符串通过JSON.parse(message)转为对象, 参数如下所示：

| 参数   | 类型   | 描述         |
| ---------- | -------- | --------------- |
| screenDensityDpi  | String | 设备屏幕Dpi，像素密度     |
| screenWidth | String | 设备屏幕宽度   |
| statusBarHeight     | String | 设备状态栏高度    |
| screenScreenRotation       | String | 设备屏幕是否旋转      |
| screenDensity       | String | 设备屏幕密度 dpi/px=density      |
| screenHeight       | String | 设备屏幕高度      |
| appScreenWidth       | String | 应用屏幕宽度      |
| appScreenHeight       | String | 应用屏幕高度 appScreenHeight=screenHeight-statusBarHeight    |
| clientMAC       | String | 设备mac地址    |
| clientIP       | String | 设备IP    |

&nbsp;

#### 同步获取设备屏幕信息，返回promise对象

使用示例一
```javascript
async getSyncScreenInfo () {
  const res = await hatom.getSyncScreenInfo();
  const screenInfo = JSON.parse(res.message);
  console.log(screenInfo);
}
```
使用示例二

```javascript
hatom.getSyncScreenInfo().then(res=>{
  const screenInfo = JSON.parse(res.message);
  console.log(screenInfo);
});
```
参数说明：无

返回参数： 同上

&nbsp;
