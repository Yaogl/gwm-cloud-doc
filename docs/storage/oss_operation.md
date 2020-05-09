---
title: 使用说明
permalink: /storage/oss_operation

---


## 对象存储

 使用步骤：
 1. 开启s3-proxy服务。 
    > 使用对象存储，需先开启s3-proxy服务，等待服务状态为"running"。
 2. 创建桶   
    > 可界面进行桶的管理（只支持界面操作）
 3. 对象管理。
    > 支持界面&[API](/storage/#%E6%9C%8D%E5%8A%A1%E6%8E%A5%E5%8F%A3)进行操作。


### 开启s3-proxy服务
    
   > 第一使用在PaaS平台使用对象存储服务时需"启动`s3-proxy`服务，所有关于对象存储的操作（包括API）都是通过该服务来代理。
    
  ![](~@vuepress/oss1.png)
  

  > 输入用户名及密码，此时会为当前用户启动s3-proxy服务。

  ![](~@vuepress/oss2.png)
  
  > 等待服务"状态"变为`running`状态，此时便可使用API，或者使用界面进行桶和对象管理操作。
  
  ![](~@vuepress/oss3.png)
  
  
### 创建Bucket（桶）
  > 不允许桶名有大写字母、下划线、减号，特殊字符 如@#等。，长度为两个字符以上.
  > 注意：桶的管理只能通过界面操作。
 
   ![](~@vuepress/oss4.png)
   ![](~@vuepress/oss5.png)
   ![](~@vuepress/oss6.png)
   
### 上传对象
  > 界面暂时不支持大文件上传，如有需求可使用API操作。
   
   ![](~@vuepress/oss7.png)

### 下载对象
  > 点击"下载"按钮可获取改对象。
  
   ![](~@vuepress/oss8.png)
  
### 分享对象  
   ![](~@vuepress/oss10.png)
   ![](~@vuepress/oss11.png)

 