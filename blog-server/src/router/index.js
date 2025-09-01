/*
 * @Author: zhangwei
 * @Date: 2024-03-01 16:23:19
 * @Description: 路由公共注册
 * @LastEditTime: 2023-04-02 17:05:41
 * @LastEditors: zhangwei
 */

const fs = require("fs"); // 文件模块
const Router = require("koa-router");

const router = new Router();

fs.readdirSync(__dirname).forEach((file) => {
  if (file !== "index.js") {
    let r = require("./" + file);
    router.use(r.routes());
  }
});

// 随便写的一个欢迎
router.get("/", (ctx, next) => {
  ctx.body = "欢迎 这是后台server首页";
});

module.exports = router;
