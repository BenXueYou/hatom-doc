## 说明

请确保您已经申请了苹果开发者账号（个人、公司账号99美元，企业账号299美元），否则无法进行以下操作。申请个人、公司账号地址：https://developer.apple.com/programs/ ， 申请企业账号地址：https://developer.apple.com/programs/enterprise/

使用移动应用平台开发 iOS 应用需要用到几个证书，下面的图为各个证书使用的地方。接下来为各个证书的创建教程。

## 创建 App ID

首先打开苹果开发网站，通过 Account 进入开发账户，如图：

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/account.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>



登录成功后选择 Certificates, Identifiers & Profiles（如果没有这一项请查看教程最开始的说明），如图：

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/certificates.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，在左侧菜单选择 Identifiers，然后点击添加按钮。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/identifiers.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


选择 App IDs，点击右上角的 Continue 按钮。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/register.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


选择 App，点击 Continue。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/select-app.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如果是普通应用，在 Bundle ID 处选择 Explicit，填写自己应用的包名，这里填写的包名即是控制台上传证书页面需要填写的 APP IDs。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/register-app.png" alt="Markdown" style="border: 6px solid #EAECEF;" />
</div>


如果应用需要使用推送功能，在下面的 Capabilities 列表中勾选上 Push Notifications 项；如需要支持通用链接，勾选上 Associated Domains，点击 Continue。

确认信息无误后点击 Register，完成创建。

## 云编译 p12 证书制作

若开发账号下已经存在 certificate 了可以跳过创建的步骤，一个账号下有一个 certificate 即可，多个应用可以共用。

### 生成 certSigningRequest 文件

如图，打开应用程序->实用工具->钥匙串访问。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/certSigningRequest01.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，选择从证书颁发机构请求证书。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/certSigningRequest02.png" alt="Markdown" />
</div>

接下来填写邮件地址，选择存储到磁盘，点击继续。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/certSigningRequest03.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，保存文件到桌面。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/certSigningRequest04.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


### 制作 p12 证书

如图所示，点击左边的 Certificates，然后点击添加按钮。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/p12Certificate01.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，如果是个人或公司账号，选择 iOS Distribution (App Store and Ad Hoc)，如果是企业账号，则选择 In-House and Ad Hoc，点击 Continue。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/p12Certificate02.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，选择 Choose File 选择之前生成的 certSigningRequest 文件，点击 Continue 完成创建。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/p12Certificate03.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图所示，cer 证书创建成功，点击 Download 将证书下载到本地。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/p12Certificate04.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


双击打开证书将其安装到钥匙串，若弹出安装提示，选择安装到“登录”，在钥匙串中找到安装的证书，若提示此证书是由未知颁发机构签名的，请下载 Apple Worldwide Developer Relations Certification Authority 证书进行安装，地址http://developer.apple.com/certificationauthority/AppleWWDRCA.cer，在左边选择“登录”和“我的证书”，找到证书，在证书上面点击鼠标右键，然后在菜单中选择导出证书，如图：

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/p12Certificate05.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


在弹出页面中指定证书名，点击存储，然后输入证书密码（此密码在控制台上传证书页面输入），点击好，生成p12格式证书。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/p12Certificate06.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


## 云编译 mobileprovision 发布证书制作

这里以个人、公司账号创建 App Store 类型发布证书为例，企业账号创建 In House 类型发布证书类似。

### App Store类型证书

App Store 证书只能用于发布应用到 AppStore，不能安装在非越狱设备上面。如图，点击左侧菜单 Profiles，然后点击添加按钮。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AppStoreCertificate01.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


选择 App Store，点击 Continue。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AppStoreCertificate02.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，选择上面创建的 App ID，点击 Continue。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AppStoreCertificate03.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，选择 certificates，点击 Continue。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AppStoreCertificate04.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


输入证书名称，点击 Generate，完成创建。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AppStoreCertificate05.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


## 云编译 mobileprovision 测试证书制作

个人或公司账号生成的 App Store 类型 mobileprovision 证书，应用在没有发布到 App Store 之前只能在越狱设备上安装，若要在非越狱手机上面安装，则需要把设备udid添加到测试设备列表 Devices 里，并且生成 Ad Hoc 类型 mobileprovision 证书。

### 获取设备 udid

获取设备 udid 可以通过老版本 iTunes 获取（最新版本无法获取），macOS Catalina 及更新系统则可以直接通过“访达”获取，另外也可以通过其它一些手机助手获取。

1、macOS Catalina 及更新系统中通过”访达“获取。打开”访达“，连接设备，如图，点击划线上面区域后，会展示出序列号及udid信息，然后点鼠标右键拷贝（拷贝的内容包含序列号、udid 等，需手动再筛选 udid）。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/udid01.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/udid02.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


2、通过老版本 iTunes 获取。打开 iTunes，连接设备，如图，找到序列号，然后点击序列号，该栏会变成 UDID，点击鼠标右键，拷贝 UDID。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/udid03.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/udid04.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


### 添加测试设备

如图选择左侧菜单 Devices，点击添加按钮。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/addDevices01.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


输入 Name 和获取的 UDID，点击 Continue。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/addDevices02.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


点击 Register，最后点击 Done，添加设备完成。

### Ad Hoc 类型证书

对于个人和公司账号，Ad Hoc 类型证书可以安装到指定的测试设备上面调试。如图，点击左侧菜单 Profiles，然后点击添加按钮。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AdHocCertificate01.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，选择 Ad Hoc，点击 Continue 进入下一步。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AdHocCertificate02.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，选择 App ID，点击 Continue 进入下一步。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AdHocCertificate03.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


如图，选择 certificates，点击 Continue 进入下一步。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AdHocCertificate04.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


选择设备，然后点击 Continue。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AdHocCertificate05.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


输入证书名称，点击 Generate 完成创建。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/AdHocCertificate06.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


## 云编译 Apple Watch 对应 mobileprovision 证书制作

若支持 Apple Watch，需要在网站上传证书界面上传 watchkitapp.mobileprovision 和 watchkitextension.mobileprovision 证书，其中 watchkitapp.mobileprovision 证书对应的包名为应用的包名加上 .watchkitapp 构成，watchkitextension.mobileprovision 证书对应的包名为应用的包名加上 .watchkitextension 构成。

例如应用包名为 com.company.app，那么两证书对应的包名分别为 com.company.app.watchkitapp 和 com.company.app.watchkitextension。

制作流程与上面的 mobileprovision 证书制作流程一样。

## 推送 p12 证书制作

如图所示，点击左边的 Certificates，然后点击添加按钮。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/pushP12Certificate01.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


选择 Apple Push Notification service SSL (Sandbox & Production)，点击 Continue 进入下一步。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/pushP12Certificate02.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>

在 App ID 栏选择对应的 App ID，点击 Continue。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/pushP12Certificate03.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


选择之前生成的 certSigningRequest 文件，然后点击 Continue。

<div  align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/pushP12Certificate04.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>


点击 Download 下载证书到本地，双击安装到钥匙串中。如下图，在钥匙串中找到此证书，在该证书上面点击鼠标右键，选择导出，然后存储为 .p12 格式文件，输入证书密码。至此，创建服务端 p12 格式推送证书完毕。

<div align="left"><img width="600px" src="https://infocloud-hatom.oss-cn-hangzhou.aliyuncs.com/hatom/doc/resource/AppBuild/images/pushP12Certificate05.png" alt="Markdown" style="border: 6px solid #EAECEF;"/>
</div>
