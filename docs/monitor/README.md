---
title: PaaS监控

---

### 访问地址 ###

#### 保定 ####
> [http://platform.baoding.paas.gwm.cn/monitor](http://platform.baoding.paas.gwm.cn/monitor)

#### 天津 ####
> [http://platform.tianjin.paas.gwm.cn/monitor](http://platform.tianjin.paas.gwm.cn/monitor)

### Grafana ###

1. **监控面板**

*grafana 支持多个监控面板*
![](~@vuepress/grafana0.png)

2. **服务器监控**

*可以查看所监控的机器各项运行指标*
![](~@vuepress/grafana_node.png)

3. **应用服务监控**

*可以根据钉钉告警信息中的**namespace，pod**做为筛选条件，在**PaaS K8s Container** 面板中选择相应的应用服务节点，查看相应的监控指标*
![](~@vuepress/grafana_dingding.png)
![](~@vuepress/grafana_pod.png)

4. **钉钉告警**

*钉钉告警基于prometheus采集监控指标数据，配置多种告警策略，一旦触发告警机制，就会向钉钉发送告警信息*
![](~@vuepress/grafana_dd_fire1.png)
![](~@vuepress/grafana_dd_resolved.png)

