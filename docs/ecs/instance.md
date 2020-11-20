---
title: 云主机
permalink: /ecs/instance.md
---

## 云主机
### 云主机列表

该页面下查看当前区域和环境下的所有云主机资源，搜索框可以根据名称做关键字搜索。
列表中显示云主机的名称、系统类型（windows或linux）、cpu个数、内存大小、ip地址和创建时间等相关信息。

![](~@vuepress/ecs_list.png)

### 创建云主机
用户点击"创建云主机"，可以进行云主机的创建

![](~@vuepress/ecs_create1.png)

  选择"可用区"，"云提供商"（支持OpenStack，VmWare，阿里云）
	基础配置选择相应的配置，目前只支持通用型，然后选择内存和CPU的数量配置。

![](~@vuepress/ecs_create2.png)

  选择系统镜像（云主机会根据选择的镜像进行创建），容灾组可选（容灾组的作用在容灾组部分有介绍）。
	选择需要挂载的硬盘数量和大小，单块云硬盘最大支持 1TB空间，最多添加6块。
	选择VPC网络 ，VPC网络详情可在"网络服务"中查看。目前IP地址只支持自动分配。可选择安全组，安全组详细可在"网络服务"中查看。

![](~@vuepress/ecs_create3.png)

  云主机系统参数的填写，云主机名称，最多20位。可以选择"密码"或"秘钥"，windows云主机只支持密码，linux都支持，秘钥的内容
	详见"云主机服务"--> "密钥对"，密码必须且只能包含数字和大小写字母，长度大于8位，linux用户为root，windows为Administrator。最后选择要创建的云主机数量，点击创建。

![](~@vuepress/ecs_create4.png)

  最后选择创建云主机是否需要审批，选择关闭，直接创建。需要审批，选择对应的上级审批人，提交创建申请。
  根据选择的对应区域、可用区、配置和硬盘大小，计算预估费用（阿里云服务器暂不涉及计费）。

![](~@vuepress/ecs_create5.png)

### 连接桌面
点击电脑图标，连接云主机桌面（仅支持OpenStack）

![](~@vuepress/ecs_desktop1.png)

弹出网页能够看到云主机桌面

![](~@vuepress/ecs_desktop1.png)


### 云主机详情
点击云主机名称进入云主机详情，详情中也能进行云主机的控制操作

![](~@vuepress/ecs_detail1.png)

详情右侧显示对应的CPU、内存、磁盘、网络对应的监控信息

![](~@vuepress/ecs_detail3.png)

切换tab选择告警，可以绑定相应的告警策略，发生告警，发送通知

![](~@vuepress/ecs_detail4.png)
![](~@vuepress/ecs_detail5.png)

已绑定的策略信息及告警历史

![](~@vuepress/ecs_detail6.png)

详情底部有网络和磁盘相关信息。

![](~@vuepress/ecs_detail2.png)

### 挂载硬盘
点击更多操作，挂载磁盘能够进行云硬盘的挂载

![](~@vuepress/ecs_mount1.png)

弹窗会列出当前账户下所有的可用云硬盘，选择其中一个，点击确定进行挂载。

![](~@vuepress/ecs_mount2.png)

### 卸载硬盘
点击更多操作，卸载磁盘能够进行云硬盘的卸载
![](~@vuepress/ecs_umount1.png)

弹窗会列出当前云主机所挂载的磁盘，选择一块进行卸载。
注意：如果云主机内磁盘已经挂载，最好是在云主机中先手动进行磁盘的卸载，再进行该操作，否则可能引起数据丢失。

![](~@vuepress/ecs_umount2.png)

### 重置系统
点击更多操作，重置系统能够重新安装云主机的操作系统

![](~@vuepress/ecs_reset1.png)

和创建一样，选择系统镜像，云主机名称和密码。

![](~@vuepress/ecs_reset2.png)

### 生命周期管理

除了以上操作，还可以在控制台进行，关机、开机和重启等操作。
![](~@vuepress/ecs_action.png)
