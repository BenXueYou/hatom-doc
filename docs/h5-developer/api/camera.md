

### 打开相机相册

  使用示例：

  ```
    hatom.camera(res => {
      console.log(res.message)
    }, {
      mQuality: "", 
      destType: "",
      srcType: "",
      targetWidth: "",
      targetHeight: "",
      encodingType: "",
      mediaType: "",
      allowEdit: false,
      correctOrientation: false,
      saveToPhotoAlbum: false
    })

  ```

  参数说明：

  | 参数               | 类型  | 必填 | 描述                                                                           |
  | ------------------ | ------ | -------- | ------------------------------------------------------------------------------ |
  | callback           | 函数  | 是 | 回调函数                                                                       |
  | options           | Object | 否 |  参数对象                                |

&nbsp;

  options 参数说明

  | 参数               | 类型  | 必填 | 描述                                                                           |
  | ------------------ | ------ | -------- | ------------------------------------------------------------------------------ |
  | mQuality           | String | 否 | 图像质量：图像质量在 0~100 内，默认值为 50                                     |
  | destType           | String | 否  | 照片返回格式：0--base64 编码字符串；1--图片文件 URL；2--图片本机 URL。默认为 1 |
  | srcType            | String | 否 | 照片调用位置：0--打开照片库；1--打开本机相机；2--打开已保存的相册。默认为 1    |
  | targetWidth        | String | 否 | 图片缩放宽度（宽和高只有一个的时候是按照等比例进行缩放）                                                                   |
  | targetHeight       | String | 否 | 图片缩放高度（宽和高只有一个的时候是按照等比例进行缩放）                                                                   |
  | encodingType       | String | 否 | 图片返回格式： 0--JPEG 格式图像；1--PNG 格式图像。默认为 0                     |
  | mediaType          | String | 否 | 选择 media 类型。picture/video/allMedia,分别对应 0，1，2，默认为 0             |
  | allowEdit          | Boolean   | 否 | true--允许编辑 false--不允许编辑。默认 false                                   |
  | correctOrientation | Boolean   | 否 | 如果是横向拍摄的照片，会自动旋转到正确的方向，解决部分机型拍照后照片方向问题。默认 false                      |
  | saveToPhotoAlbum   | Boolean  | 否  | false-不保存到图片库中 true-保存到图片库中。默认 false 

  &nbsp;

  返回说明：

  | 参数 | 类型   | 描述                               |
  | ----- | ------ | ---------------------------------- |
  | code  | string | 返回码  0表示成功 |
  | message  | string | 返回值  默认图片地址 |


  &nbsp;