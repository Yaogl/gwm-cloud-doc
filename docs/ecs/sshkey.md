---
title: 密钥对
permalink: /ecs/sshkey.md
---

## 密钥对
- 密钥对相比密码更能够保障linux云主机的登录安全，密钥对分公钥和私钥，公钥在云主机内部，私钥在用户手中，用户通过私钥登录云主机，而其他没有私钥的用户则不能登录。
### 密钥对列表
这里能够看到当前账户下所有的密钥对

![](~@vuepress/sshkey_list1.png)

### 创建密钥对
创建密钥对，填写秘钥名称，点击确定按钮。

![](~@vuepress/sshkey_create1.png)

之后会提示下载私钥，这里只提供一次下载，一定要点击下载，否则将不能获取私钥，而不能登录云主机

![](~@vuepress/sshkey_create2.png)

### 导入密钥对
同时也支持导入秘钥，需要填写秘钥名称和公钥内容
注意：公钥内容一定要正确，否则会创建失败，公钥可以通过ssh-keygen 工具生成

![](~@vuepress/sshkey_import.png)

### 密钥对详情
点击+ 能够查看密钥对的公钥信息

![](~@vuepress/sshkey_detail.png)

### 删除密钥对
![](~@vuepress/sshkey_delete.png)
