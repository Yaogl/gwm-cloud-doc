---
title: 对象存储

---

## 存储&存储服务 

**对象存储:** 也就是通常意义的键值存储，其接口就是简单的GET、PUT、DEL和其他扩展，如七牛、又拍、Swift、S3，内置大容量硬盘的分布式服务器

![image-20200407162406142](~@vuepress/image-20200407162406142.png)

**块存储**就是在物理层这个层面对外提供服务，使用它的系统，有用自己的文件系统格式化。这样一旦被一个系统使用，就独占了。

**文件存储**就是在文件系统一层对外提供服务，系统只用访问文件系统一级就可以，各个系统都可以根据接口取访问。

**对象存储**，也是文件系统一级提供服务，只是优化了目前的文件系统，采用扁平化方式，弃用了目录树结构，便于共享，高速访问。

## 概念

**对象存储:** 也就是通常意义的键值存储，其接口就是简单的GET、PUT、DEL和其他扩展，如七牛、又拍、Swift、S3，内置大容量硬盘的分布式服务器

**文件存储:** 通常意义是支持POSIX接口，它跟传统的文件系统如Ext4是一个类型的，但区别在于分布式存储提供了并行化的能力，如 Ceph 的 CephFS (CephFS是Ceph面向文件存储的接口)，但是有时候又会把GFS，HDFS 这种非 POSIX 接口的类文件存储接口归入此类。典型设备：FTP、NFS服务器，SamBa

**块存储:** 这种接口通常以 QEMU Driver 或者 Kernel Module 的方式存在，这种接口需要实现Linux的 Block Device 的接口或者QEMU提供的 Block Driver 接口，如 Sheepdog，AWS 的 EBS，青云的云硬盘和阿里云的盘古系统，还有Ceph的RBD（RBD是Ceph面向块存储的接口），典型设备：磁盘阵列，硬盘，虚拟硬盘

## 对象存储的接口

![image-20200407163023266](~@vuepress/image-20200407163023266.png)

对象存储和文件系统在接口上的本质区别是对象存储不支持和fread和fwrite类似的随机位置读写操作，即一个文件PUT到对象存储里以后，如果要读取，只能GET整个文件，如果要修改一个对象，只能重新PUT一个新的到对象存储里，覆盖之前的对象或者形成一个新的版本。

能够放弃随机读写接口而采用REST接口的一个重要原因是计算机系统本身的演进呼唤存储系统的变革，目前的计算机的内存大小已经和当初设计POSIX文件系统接口时大不一样了。文件系统诞生于1960年代，当时的内存是以KB为单位的，内存资源非常宝贵，同时外存的数据读写速率也非常低，所以把文件中的一小部分数据加载进内存进行操作显得非常有必要。而如今，计算机的内存是以GB为单位的，往往在几十、几百GB量级，而常常需要存取的文件——如图片、文档等，则是在MB级别，GB以上的文件数量非常少(多为长视频、归档文件、虚拟机镜像等，这一类数据我们会在本系列的后面几篇中进行讨论)，外存和网络的吞吐率较之1960年代，也有了数千倍的提升，把一个文件完全加载到内存中进行处理和可视化的已经开销微不足道了，而带来的计算效率和用户体验的提升却是显著的。

## 数据组织结构

![image-20200407163104130](~@vuepress/image-20200407163104130.png)

采用扁平的数据组织结构抛弃了嵌套的文件夹，避免维护庞大的目录树。随着大数据和互联网的发展，如今的存储系统中，动辄数百万、千万甚至上亿个文件/对象，单位时间内的访问次数和并发访问量也达到了前所未有的量级，在这种情况下，目录树会给存储系统带来很大的开销和诸多问题，成为系统的瓶颈。反观目录结构的初衷——数据管理，如今作用非常有限，我们已 经很难通过目录的划分对文件进行归类和管理了，因为一个文件最终只能放到一个文件夹下，作为目录树的叶子节点存在，而文件的属性是多维度的。目前各类应用中广泛采用元数据检索的方式进行数据的管理，通过对元数据的匹配得到一个Index或者Key，再根据这个Index或者Key找到并读取数据，所以，对象存储的扁平数据组织形式和K/V访问方式更能满足数据管理的需求。



## 长城汽车业务中台部对象存储架构

![Storage-Proxy-Architecture-Design](~@vuepress/Storage-Proxy-Architecture-Design.png)





基于两个S3集群服务接口提供代理服务，在服务的最上层提供更加可靠的高可用。主要场景如下：



写入文件：

- 集群AB 都可用，两个集群都写入文件
- 集群AB其中一个不可用，往可用集群进行写入，<u>当故障集群恢复时，Storage-Sync进行文件同步，保证两个集群都有备份（规划中）</u>
- 集群AB都不可用，服务无法提供

取出文件：

- 优先从A集群取出文件，当取不到的时候从集群B中取出

*底层 S3 集群技术：MinIO + Swift*


## 基于S3协议的对象存储——MinIO

### MiniO 数据安全

![image-20200407163508470](~@vuepress/image-20200407163508470.png)

### 纠删码

Minio使用纠删码erasure code和校验和checksum来保护数据免受硬件故障和无声数据损坏。 即便您丢失一半数量（N/2）的硬盘，您仍然可以恢复数据。

**什么是纠删码erasure code?**

纠删码是一种恢复丢失和损坏数据的数学算法， Minio采用Reed-Solomon code将对象拆分成N/2数据和N/2 奇偶校验块。 这就意味着如果是12块盘，一个对象会被分成6个数据块、6个奇偶校验块，你可以丢失任意6块盘（不管其是存放的数据块还是奇偶校验块），你仍可以从剩下的盘中的数据进行恢复，是不是很NB，感兴趣的同学请翻墙google。

**为什么纠删码有用?**

纠删码的工作原理和RAID或者复制不同，像RAID6可以在损失两块盘的情况下不丢数据，而Minio纠删码可以在丢失一半的盘的情况下，仍可以保证数据安全。 而且Minio纠删码是作用在对象级别，可以一次恢复一个对象，而RAID是作用在卷级别，数据恢复时间很长。 Minio对每个对象单独编码，存储服务一经部署，通常情况下是不需要更换硬盘或者修复。Minio纠删码的设计目标是为了性能和尽可能的使用硬件加速。

**什么是位衰减bit rot保护?**

位衰减又被称为数据腐化Data Rot、无声数据损坏Silent Data Corruption,是目前硬盘数据的一种严重数据丢失问题。硬盘上的数据可能会神不知鬼不觉就损坏了，也没有什么错误日志。正所谓明枪易躲，暗箭难防，这种背地里犯的错比硬盘直接咔咔宕了还危险。 不过不用怕，Minio纠删码采用了高速 HighwayHash 基于哈希的校验和来防范位衰减。

## 服务接口

### Bucket

*创建/删除 bucket 只能通过 PaaS页面进行操作

不允许bucketName有大写字母、下划线、减号，特殊字符 如@#等。，长度为两个字符以上


#### API 接口

> 以下接口使用BasicAuth认证

##### 1. 上传文件

**请求方法：** PUT

**URL：**`/api/v1/user/<username>/bucket/<bucket_name>/file/`

**参数说明：**

- username
  - 类型：string
  - 位置：PATH
- bucket_name
  - 类型：string
  - 位置：PATH
- file：
  - 类型：文件
  - 位置：FORM

**返回结果：**

```json
{
    "code": 200,
    "msg": "ok",
    "result": null
}
```



##### 2. 下载文件

**请求方法：** GET

**URL：**`/api/v1/user/<username>/bucket/<bucket_name>/file/<file_name>/`

**参数说明：**

- username
  - 类型：string
  - 位置：PATH
- bucket_name
  - 类型：string
  - 位置：PATH

**返回结果：**文件



##### 3. 删除文件

**请求方法：** DELETE

**URL：**`/api/v1/user/<username>/bucket/<bucket_name>/file/<file_name>/`

**参数说明：**

- username
  - 类型：string
  - 位置：PATH
- bucket_name
  - 类型：string
  - 位置：PATH

**返回结果：**

```json
{
    "code": 200,
    "msg": "ok",
    "result": null
}
```



##### 4. 文件状态

**请求方法：** GET

**URL：**`/api/v1/user/<username>/bucket/<bucket_name>/file/<file_name>/status/`

**参数说明：**

- username
  - 类型：string
  - 位置：PATH
- bucket_name
  - 类型：string
  - 位置：PATH

**返回结果：**

```json
{
	"code": 200,
	"msg": "ok",
	"result": {
		"etag": "ef25b5ca592cccf7d39070f3a73bf518-1",
		"name": "屏幕快照 2020-02-15 下午8.14.04.png",
		"lastModified": "2020-04-23T06:46:52Z",
		"size": 108815,
		"contentType": "application/octet-stream",
		"expires": "0001-01-01T00:00:00Z",
		"metadata": {
			"Content-Type": ["application/octet-stream"]
		},
		"userMetadata": {},
		"userTags": {},
		"owner": {
			"name": "",
			"id": ""
		},
		"Grant": null,
		"storageClass": ""
	}
}
```

##### 5. 文件列表

**请求方法：** GET

**URL：**`/api/v1/user/<username>/bucket/<bucket_name>/file/`

**参数说明：**

- username
  - 类型：string
  - 位置：PATH
- bucket_name
  - 类型：string
  - 位置：PATH

**返回结果：**

```json
{
    "code": 200,
    "msg": "ok",
    "result": [
        {
            "name": "Minio分享.pptx",
            "size": "249527",
            "lastModified": "2020-04-17T05:49:08Z"
        },
        {
            "name": "屏幕快照 2020-02-15 下午8.14.04.png",
            "size": "108815",
            "lastModified": "2020-04-17T06:03:58Z"
        },
        {
            "name": "屏幕快照 2020-04-02 下午6.33.57.png",
            "size": "218109",
            "lastModified": "2020-04-17T05:45:44Z"
        }
    ]
}
```



##### 6. bucket列表

**请求方法：** GET

**URL：**`/api/v1/user/<username>/bucket/`

**参数说明：**

- username
  - 类型：string
  - 位置：PATH

**返回结果：**

```json
{
    "code": 200,
    "msg": "ok",
    "result": [
        {
            "name": "test",
            "creationDate": "2020-04-17T06:37:44Z"
        },
        {
            "name": "test1",
            "creationDate": "2020-04-17T05:33:57Z"
        }
    ]
}
```

##### 7.分享文件

**请求方法：** POST

**URL：** /api/v1/share

**参数说明：**

```json
{
	"username":"wangyiyang",
	"file_name":"屏幕快照 2020-02-15 下午8.14.04.png",
	"bucket_name":"test",
	"expiry":3600 //最大7*24*60*60
}
```

**返回数据：**

```json
{
    "code": 200,
    "msg": "ok",
    "result": {
        "file_path": "/api/v1/share/wangyiyang-test/屏幕快照 2020-02-15 下午8.14.04.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=admin%2F20200424%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200424T075253Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9db170a475bf25d7c0784f277f4b3f466e08ed852efbde9536d9bdf92e6f747a"
    }
}
```

##### 8. 下载分享文件

**请求方法：** GET

**URL：** <service_ip>:<service_port>/<file_path>

**参数说明：** file_path在 接口7分享文件获得

##### 9. 永久分享

**请求方法：** GET

**URL：** <service_ip>/api/v1/public/user/<user_name>/bucket/<bucket_name>/file/<file_name>?key=<auth_key>

**参数说明：** auth_key = `<user_name>:<password>:<bucket_name>:<file_name>`  md5 小写16位 加密
