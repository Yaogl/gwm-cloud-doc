---
title: VPC网络
permalink: /network/vpc.md
---

## VPC网络
- VPC网络能够提供独立安全的网络服务，目前只支持VPC网络的使用和查看，后续版本会支持创建和管理功能。
### VPC网络列表
    查看当前可用的VPC网络
![](~@vuepress/vpc_list.png)

### VPC网络详情
    点击VPC名称，查看详情，VPC内的子网详情如下图：
![](~@vuepress/vpc_subnet_list.png)
    路由表内容
![](~@vuepress/vpc_route.png)
    拓扑图，显示当前网络下，该账户的所有虚拟机，可以点击查看云主机详情，同时点击 + 进行云主机创建
![](~@vuepress/vpc_topo.png)

### 子网详情
    点击子网名称，查看子网详情，网络端口如下：
![](~@vuepress/vpc_subnet_port.png)
    该子网下的云主机列表
![](~@vuepress/vpc_subnet_ecs.png)
