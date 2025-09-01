
## ⚡ 简介 introduction

一个前后端分离的个人博客项目 - 后端

已适配移动端、PC 端

#### 前台

博客前台基于 vue3、element plus、pinia、axios、vue-router、vue-cli、vue-use、npm、scss 等主流技术

#### 管理后台

博客管理后台基于 pureadmin、vue3、element plus、pinia、axios、vue-router、vue-use、pnpm、vite、sass、tailwindcss 等主流技术

测试账户: test

密码: test123

也可以自行注册用户

#### 后端

博客后端基于 node.js、koa、koa-router、koa-body、seqlize、mysql、minio(对象存储)、bcryptjs、nodemon 等主流技术
因为后端是采用的 node.js，所以不需要配置很多就能运行。

```git
# npm 版本 v6.14.17
# node 版本 v16 v18 都可以


2、打开项目，安装依赖
npm i
3、数据库是mysql，需要先连接数据库
应该大家都有mysql吧，没有就装一个，再装个navicat
(1) 打开项目，在根目录下找到src文件夹下的db文件夹，里面有数据库的sql文件
(2) 使用navicat创建一个空的数据库，运行这个sql文件，就可以生成表
(3) 打开项目根目录下的.env文件，根据注释修改自己的mysql数据库账号名称、密码进行连接即可
4、运行项目
npm run serve

tips：.env文件下可以配置项目的上传文件方式，local为本地上传，minio为上传到minio对象存储，qiniu为上传到七牛云存储，online为上传到自己的云服务器，使用其他的对象存储（七牛云、阿里云）是因为自己的服务器带宽不够，下载资源很慢，不过后来使用了自己的服务器部署了minio来存储文件访问速度还行，推荐使用minio，自己也可以先试一试online上传到自己的服务器，然后有经验了再去试一试七牛云。
```

博客后端接口的 swagger 地址为 localhost:8888/swagger 
