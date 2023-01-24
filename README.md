# geetestV4-crack

极验geetest|4代无感|js逆向
仅使用`app_id`参数生成`请求url`和`请求payload`。

## 环境

安装 Node 环境

## 示例

- 获取`url`、`payload`:`node "geetestV4-sense.js"`
![](./images/exp_1.png)`

- 发起请求(测试接口:`https://dkapi.geetest.com/deepknow/v2/judge?pt=1&app_id=`)

```
//node-fetch
fetch(url + app_id, {
  "headers": {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
  },
  "body": payload,
  "method": "POST"
}).then(function (response) {
  return response.json();
}).then(data => {
  console.log(data);
});
```
- 成功返回：`{"gen_time":xxx,"message":"ok","session_id":"xxx","status":1,"ttl":1800}`

## 声明

本项目仅供学习交流使用，请勿用于非法用途！