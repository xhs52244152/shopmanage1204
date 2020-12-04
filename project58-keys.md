## Vue-项目-重点

### day06-项目-重点

#### 01-项目-准备-项目功能演示

1. 登录
2. 首页
   1. 用户管理
      1. 用户列表
   2. 权限管理
      1. 角色列表
      2. 权限列表
   3. 商品管理
      1. 商品列表
      2. 分类参数
      3. 商品分类
   4. 订单管理
      1. 订单列表
   5. 数据统计
      1. 数据报表

> UI 部分->使用主流的第三方 UI 库 element-ui
>
> 重复组件不写(快速完成!)
>
> 接口数据
>
> vue+element-ui+vue-router+axios

#### 02-项目-准备-项目准备素材说明

> 06-02-其他资源-项目素材

1. itcast.sql -> 启动 MySQL->打开 navicat.exe->新建数据库->导入.sql

2. 项目后台(服务器)->api-server 压缩包->node 项目-

   1. 修改 config/default.json 文件/修改为自己的数据库配置信息

      ```json
      "db_config" : {
      		"protocol" : "mysql",
      		"host" : "127.0.0.1",
      		"database" : "itcast",
      		"user" : "root",
      		"password" : "root",
      		"port" : 3306
      	}
      ```

2)  npm i

3)  node app.js -> 启动项目的服务器

4)  接口文档->docs/index.html

### day07-项目-重点

#### 01-项目-准备-批处理

> 不想每次进入目录 打开 cmd 输入指令

1. 来到指令执行的目录 新建 run.txt
2. 在 run.txt 文件中 输入想要执行的指令 node app.js(不要加回车空格)
3. 修改文件后缀 run.txt->run.bat
4. 双击打开 run.bat -> 自动打开 cmd ->执行指令

> .bat 文件的使用 -> 批处理!->计算机基础知识

#### 02-项目-准备-vue-cli 创建项目结构

1. vue init webpack 项目名

2. vue 编译方式->第一种 for most users

3. 是否安装 vue-router -> Y

4. 是否使用 ESLint 监测代码规范 -> Y

   > ESLint 检查代码是否符合规范

5. 选择要使用的代码规范 S -> (===/ 代码末尾不能有;等)

6. 单元测试 unit tests/e2e test -> N

7. cd 目录

8. npm run dev(默认不会打开浏览器)

   > 在 package.json 中的 scripts,修改 dev 的值 末尾--open -> 重启 npm run dev

#### 03-项目-准备-项目目录说明

1. build/ webpack 打包的结果->build.js 来源于 main.js
2. config/配置服务器
3. .eslintigonre ESLint 排除文件
4. .eslintrc 配置 eslint 规则
5. src/main.js

```js
  components: { App },
  template: '<App><App/>'
```

#### 04-项目-准备-代码规范-自定义指令-lintfix

> eslint 检查 js 代码规范
> package.json -> scripts ->

```json
"lintfix": "eslint --ext .js,.vue src --fix",
```

> npm run dev -> npm run lintfix
> 注意: 对于未使用的变量 eslint 无法 fix

#### 05-项目-准备-element-ui-文档分析

> element-ui PC vue 项目
> iView PC 端 vue ui 库
> mint-ui 移动端 vue ui 库

#### 06-项目-准备-element-ui-安装-引入

0. npm i element-ui
1. 完整引入(我们这里完整引入)
   `main.js`

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

2. 按需引入
   > 可以在任意组件的 template 中使用 element-ui 里面的组件了

#### 07-项目-准备-项目模板简化-调整

> 删除无用代码和文件

#### 08-项目-准备-git-版本控制

> 第一次用

1. git init
2. git status
3. git add .
4. git commit -m ""
5. 新建远程仓库
6. 关联仓库 git -----自己的 git 账号
7. 推送 git push -u origin master

> 第二次用
> 2/3/4/7(git push)

#### 09-项目-登录-新建分支-login 组件-配置路由

master:合并/推送/版本号更新

1. git branch
2. git checkout -b dev-login

```bash
1. develop(管理其他的功能分支的分支)  -> 功能(开发)分支 dev-
2. 生产(上线)分支 release-1.1
3. 测试分支 bug-0.1
4. 紧急修复(上线 发现bug)  hotfix-
```

3. 新建 login.vue
4. 配置路由 router.js
   > 路径中的@->src

#### 10-项目-登录-引入表单组件

```html
<el-form label-position="top" label-width="80px" :model="formdata">
  <h3>用户登录</h3>
  <el-form-item label="用户名">
    <el-input v-model="formdata.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formdata.password"></el-input>
  </el-form-item>
  <el-button type="primary">登录</el-button>
</el-form>
```

1. 找组件
2. 引入
3. 提供该组件的属性值和数据/方法
   > Web 前端助手->FEHelper

#### 11-项目-登录-样式调整

1. form 水平垂直居中
2. 背景色
3. 圆角
4. 按钮宽度
   > 注意: vue 项目重点是 vue
   > 弹性盒 flex

#### 12-项目-登录-axios 插件

> 目的: 把 axios(和 vue 没关系->不是 vue 插件)变成 Vue 插件
> 看文档->

1. 新建 http.js 模块->插件代码
2. 导入 axios
3. 按照文档开发插件

```js
import axios from 'axios'
const Http = {}
Http.install = function(Vue) {
  Vue.prototype.$http = axios
}
export default Http
```

4. main.js 导入插件
5. Vue.use(Http)
   > 在组件的 js 部分 可以用 this.\$http.get()

#### 13-项目-登录-发送登录请求

> 点击按钮发送请求
> 解构赋值->if 判断->使用 msg
> 注意: 成功和失败 服务端都已经处理完毕

#### 14-项目-登录-引入提示框组件

```js
// this.$message({
//   message: msg,
//   type: "success"
// });
this.$message.success(msg)
```

> type 的值控制的是组件的颜色 success/info/warning/error

#### 15-项目-登录-登录成功-进入 home 组件

> 登录成功->home.vue

1. status===200 编程式导航
2. index.js 路由配置中 导入组件 配置路由
3. 新建 home.vue

#### 16-项目-登录-简化登录请求代码-async 和 await

> 让异步代码看起来像同步(想在函数返回值位置获取异步操作结果)

```js
 async handleLogin() {
      // 让异步代码看起来像同步  -> ES7 async+await

      const res = await this.$http.post("login", this.formdata);
      console.log(res);


 }
```

1. 找到异步操作 在前面加 await
2. 找到距离异步操作外层最近的函数 前面加 async
   > 目的:只是为了代码看起来舒服!

#### 17-项目-登录-保存 token 值

> 登录成功后 后台会返回用户信息 token
> 将来在 home.vue 中要使用 token
> 保存 token

```js
localStorage.setItem('token', data.token)
```

> 注意: 暂时不用关心 token 怎么样!

#### 18-项目-首页-布局容器-使用-样式调整

1. 引入布局容器
   > el-container+el-header+el-aside+el-main

#### 19-项目-首页-头部-样式调整

> layout 布局

1. el-row 行 el-col 列
2. 调整样式 !
   > 注意: 样式不是重点!

#### 20-项目-首页-侧边栏-导航组件-文档

> el-menu
> 想要修改组件细节(大小/颜色/小功能) -> 看属性列表

#### 21-项目-首页-侧边栏-引入导航组件-调整

> 5 个一级导航 el-submenu
> 多个二级导航 el-menu-item
> 注意: 每个 index 值不要一样

#### 22-项目-首页-进入首页的权限验证

#### 23-项目-首页-头部-退出功能

#### 24-项目-首页-合并分支-新建用户分支

#### 25-项目-用户管理-用户列表-新建组件-路由配置
