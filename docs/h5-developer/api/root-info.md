### 登录信息

对接云曜、ifar构架，与登录组件配合使用，用于登录之后获取登录相关信息，包括服务器地址、用户名、token 等信息。

#### getRootInfo 获取登录信息

使用示例：

```
hatom.rootInfo.getRootInfo(res => {
  const data = JSON.parse(res.message);
  console.log(data);
});
```
参数说明：


  | 参数               | 类型  | 必填 | 描述                                                                           |
  | ------------------ | ------ | -------- | ------------------------------------------------------------------------------ |
  | callback           | 函数  | 是 | 回调函数 

&nbsp;


返回说明：

  | 参数 | 类型   | 描述                               |
  | ----- | ------ | ---------------------------------- |
  | code  | string | 返回码  0表示成功 |
  | message  | string | 返回值  json字符串 |

  <br />
  json字符串通过JSON.parse(message)转为对象，转化后的对象参数如下所示：

  | 参数          | 类型   | 描述                                |
  | ------------- | ------ | ----------------------------------- |
  | address       | String | 平台地址，例如：https://10.2.145.82 |
  | routeData     | String | 路由参数，内部路由跳转传参，具体值可自定                  |
  | routeType     | int | 路由形式，根据这个值来做内部路由的跳转，具体值可自定                  |
  | token         | String | token                               |

  <br />

> 注意事项： 其余字段可扩展。

&nbsp;

#### redirectLogin 跳转到登录页

使用示例:

```javascript
  hatom.rootInfo.redirectLogin();
```
<br />

返回说明：

  无