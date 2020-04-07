storage-proxy

 <h1 class="curproject-name"> storage-proxy </h1> 



# 公共分类

## 上传文件

<a id=上传文件> </a>

### 基本信息

**Path：** /bucket/:bucket_name

**Method：** POST

**接口描述：**上传文件


### 请求参数

**Headers**

| 参数名称     | 参数值              | 是否必须 | 示例 | 备注 |
| ------------ | ------------------- | -------- | ---- | ---- |
| Content-Type | multipart/form-data | 是       |      |      |

**路径参数**

| 参数名称    | 示例 | 备注 |
| ----------- | ---- | ---- |
| bucket_name | test |      |

**Body**

| 参数名称 | 参数类型 | 是否必须 | 示例 | 备注 |
| -------- | -------- | -------- | ---- | ---- |
| file     | file     | 是       |      |      |



### 返回数据

```json
{
  "code":200,
  "data":null,"message":"OK"
}
```




## 删除文件

<a id=删除文件> </a>

### 基本信息

**Path：** /bucket/:bucket_name/file/:file_name

**Method：** DELETE

**接口描述：**删除文件


### 请求参数

**路径参数**

| 参数名称    | 示例     | 备注 |
| ----------- | -------- | ---- |
| bucket_name | Test     |      |
| file_name   | Test.csv |      |

## 获取文件

<a id=获取文件> </a>

### 基本信息

**Path：** /bucket/:bucket_name/file/:file_name

**Method：** GET

**接口描述：** 下载文件


### 请求参数

**路径参数**

| 参数名称    | 示例 | 备注 |
| ----------- | ---- | ---- |
| bucket_name |      |      |
| file_name   |      |      |

## 获取文件状态

<a id=获取文件状态> </a>

### 基本信息

**Path：** /bucket/:bucket_name/file/:file_name/status

**Method：** GET

**接口实例：**

```json
{"code":200,"data":{"bucket_name":"test","content_type":"application/octet-stream","etag":"05aa36e67a4cf830ca554e134c15d229-1","is_dir":false,"last_modified":[2020,3,17,6,21,35,1,77,0],"metadata":{"Content-Type":"application/octet-stream"},"object_name":"ca.crt","size":2037},"message":"OK"}
```




### 请求参数

**路径参数**

| 参数名称    | 示例 | 备注 |
| ----------- | ---- | ---- |
| bucket_name |      |      |
| file_name   |      |      |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> bucket_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> content_type</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> etag</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> is_dir</span></td><td key=1><span>boolean</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> last_modified</span></td><td key=1><span>number []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>number</span></p></td></tr><tr key=array-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> </span></td><td key=1><span></span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> metadata</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-5-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> Content-Type</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-6><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> object_name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-1-7><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> size</span></td><td key=1><span>number</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span style="white-space: pre-wrap"></span></td><td key=5></td></tr>
               </tbody>
              </table>

​            