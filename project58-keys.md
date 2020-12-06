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

> 注意: 暂时不用关心 token 怎么用!

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

### day08-项目-重点

#### 01-项目-首页-头部-退出功能

```js
 handleLoginout() {
      // 1. 清除token
      localStorage.clear();
      // 2. 回到登录组件
      this.$router.push({
        name: "login"
      });

      // 3. 提示
      this.$message.success("退出成功");
    }
```

#### 02-项目-首页-进入首页的权限验证

> 如果没有登录 就无法进入 home.vue

```js

beforeCreate() {
    if (!localStorage.getItem("token")) {
      this.$message.warning("请先登录");
      this.$router.push({
        name: "login"
      });
    }
    // 之后会继续执行钩子函数 -> mounted(){}
  },
```

#### 03-项目-首页-合并分支-新建用户分支

```bash
git status
git add .
git commit -m ""
git branch
git checkout master
git status
git commit -m "调整笔记"
git merge dev-login
git checkout -b dev-users
```

#### 04-项目-用户管理-用户列表-新建组件-路由配置

1. el-menu 开启路由模式 router
2. home.vue el-main 里面是 router-view
3. 新建 users.vue
4. 配置路由(在 home 的路由配置里面 children)

#### 05-项目-用户管理-用户列表-面包屑和搜索框

1. el-card (小容器)
2. 面包屑
3. el-row>el-col>(搜索框+添加按钮)

#### 06-项目-用户管理-用户列表-引入表格组件

> :data 表格数据源
> label 列的表头
> prop 单元格的数据内容

```html
<el-table :data="tableData" style="width: 100%">
  <el-table-column prop="date" label="日期" width="180"></el-table-column>
  <el-table-column prop="name" label="姓名" width="180"></el-table-column>
  <el-table-column prop="address" label="地址"></el-table-column>
</el-table>
```

#### 07-项目-用户管理-用户列表-表头处理

> 快速调整列数(el-table-column)

#### 08-项目-用户管理-用户列表-请求数据

> 除了登录 其他所有请求都需要授权
> 在发送请求前 设置请求头->查 axios

```js
const AUTH_TOKEN = localStorage.getItem('token')
this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN
// 发送请求
// 成功 users
```

>

#### 09-项目-用户管理-用户列表-渲染数据-一般数据

> this.tableData = res.data.data.users
> 给 prop 赋值
> 表格数据内容两类

1. 一般数据(单元格的内容就是 prop 的值)
2. 特殊数据(单元格的内容不是 prop 的 key 对应的值,比如组件)

#### 10-项目-用户管理-用户列表-渲染数据-日期格式处理

1. 过滤器
2. 处理单元格日期
   2.1 prop 的值不支持过滤器的使用 X

```html
<el-table-column
  prop="create_time | fmtDate"
  label="创建日期"
  width="180"
></el-table-column>
```

2.2 当单元格内的内容不是 prop 的值 key 所对应的值时 X

```html
<el-table-column label="创建日期" width="180">
  {{create_time|fmtDate}}
</el-table-column>
```

2.3 给单元格内容外层包裹容器 template (vue 提供的组件) X

```html
<template
  >{{ create_time|fmtDate}}</template
>
```

2.4 通过 template 的属性 slot-scope 可以把上层数据 tableData 传递给里层进行使用 √
2.4.1 slot-scope 的值可以随便写 通常命名为 scope
2.4.2 "scope"会自动去找上一级数据 el-table :data 的值 tableData
2.4.3 scope.row 是数据源中的每个元素 这里是对象 (row 不能随便写)

```html
<template slot-scope="scope"
  >{{ scope.row.create_time|fmtDate}}</template
>
```

> 注意: slot-scope 和 element-ui 没任何关系 是 vue 的 API

#### 11-项目-用户管理-用户列表-渲染数据-用户状态开关

> 单元格内部是组件

1. 加容器 template
2. slot-scope="scope"
3. el-switch v-model="bool 值"

```html
<el-table-column label="用户状态" width="140">
  <template slot-scope="scope">
    <el-switch
      v-model="scope.row.mg_state"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
  </template>
</el-table-column>
```

#### 12-项目-用户管理-用户列表-渲染数据-操作

```html
<template slot-scope="scope">
  <el-button
    size="mini"
    plain
    type="primary"
    icon="el-icon-edit"
    circle
  ></el-button>
  <el-button
    size="mini"
    plain
    type="danger"
    icon="el-icon-delete"
    circle
  ></el-button>
  <el-button
    size="mini"
    plain
    type="success"
    icon="el-icon-check"
    circle
  ></el-button>
</template>
```

#### 13-项目-用户管理-用户列表-分页组件-文档-引入

1. @size-change 每页条数改变时
2. @current-change 当前页码改变时
3. current-page 当前页
4. total 总条数

```html
<el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage4"
  :page-sizes="[100, 200, 300, 400]"
  :page-size="100"
  layout="total, sizes, prev, pager, next, jumper"
  :total="400"
></el-pagination>
```

#### 14-项目-用户管理-用户列表-分页组件-配置数据

> 配置分页组件所需的数据
> total 之前已经赋值

#### 15-项目-用户管理-用户列表-分页组件-分页请求

1. 点击页码时 发送新请求
2. 点击每页条数时 发送新请求

```js
 handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagenum = 1;
      this.pagesize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
      // val是当前页码

      //前提: 每页2条:  比如 点击2页 -> 获取数据中第三第四条
      this.pagenum = val;
      this.getTableData();
      console.log(`当前页: ${val}`);
    },
```

#### 16-项目-用户管理-用户列表-搜索用户

1. 点击搜索按钮->发送请求
2. 点击 X 重置 pagenum=1, 发送请求

#### 17-项目-用户管理-用户列表-添加用户-显示对话框

> 点击添加按钮->打开对话框

1. 找组件
2. 复制代码
3. 配置数据或者方法
4. 通过 bool 属性控制对话框显示与隐藏

#### 18-项目-用户管理-用户列表-添加用户-发送请求

1. 打开对话框时 清空 form
2. 点击对话框-确定->发送请求
   2.1 发送 post 请求
   2.2 关闭对话框
   2.3 重新刷新表格
   2.4 失败->提示框

#### 19-项目-用户管理-用户列表-删除用户-打开确认框

> 点击操作中的删除->打开确认框

1. 点击确定 -> 会执行.then 的 cb
2. 点击取消 -> 会执行.catch 的 cb

```js
this.$confirm('是否删我?再考虑考虑', '提示', {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  type: 'warning'
})
  .then(() => {
    this.$message.success('删除成功')
  })
  .catch(() => {
    this.$message.info('已取消删除')
  })
```

#### 20-项目-用户管理-用户列表-删除用户-处理响应

> 点击确认框中的确定按钮->发送请求

1. 重置 this.pagenum=1
2. 发送请求
3. 刷新表格
4. 如果删除失败 -> 提示
   > 注意: await 和 async 中 async 的位置(外层最近的函数前面)

#### 21-项目-用户管理-用户列表-编辑用户-显示对话框

> 点击操作中的编辑 -> 打开对话框

1. 复制添加对话框->修改
2. data 中提供的布尔数据
3. 调用方法时 传递了 scope.row

#### 22-项目-用户管理-用户列表-编辑用户-显示编辑数据

> 打开对话框时 获取用户数据

1. 打开对话框->传递 scope.row->user
2. 发送请求-> user.id
3. 请求成功后 this.form = res.data.data

```js
 async showDiaEdit(user) {
      this.dialogFormVisibleEdit = true;
      // 获取当前编辑的数据
      const res = await this.$http.get(`users/${user.id}`);
      console.log(res);
      const {
        meta: { msg, status },
        data
      } = res.data;
      if (status === 200) {
        // data
        this.form = data;
      }
    },
```

#### 23-项目-用户管理-用户列表-编辑用户-发送请求

> 点击对话框的确认->发送请求

```js

async editUser() {
      const res = await this.$http.put(`users/${this.form.id}`, this.form);
      console.log(res);
      const {
        meta: { msg, status }
      } = res.data;
      if (status === 200) {
        // 关闭对话框
        this.dialogFormVisibleEdit = false;
        // 刷新表格
        this.getTableData();
      } else {
        this.$message.warning(msg);
      }
    },
```

> 在打开对话框时 this.form 中已经有用户所有的数据(包括 id)

### day09-项目-重点

#### 01-项目-用户管理-用户列表-修改用户状态

> 点击开关->改用户状态
> 注意: el-switch 表单元素 -> v-model 双向绑定
> 发送请求 要看接口文档

#### 02-项目-用户管理-用户列表-分配角色-功能演示

> 点击操作的 check 按钮 -> 分配/设置/修改角色

1. 点击按钮 -> 打开对话框
2. 处理下拉框 select
3. 显示当前用户的名字和角色
4. 点击确定 修改角色

#### 03-项目-用户管理-用户列表-分配角色-显示对话框

> 点击操作中 check 按钮 -> 打开对话框

#### 04-项目-用户管理-用户列表-分配角色-显示对话框-下拉框

1. 请选择 :value="-1"
2. 显示 5 个角色的 el-option
3. 点击 check 获取角色数据 this.roles = res.data.data
4. v-for ="(v,i) in roles"
5. el-option :label="文本信息 v.roleName"
6. el-option :value="v.id"

#### 05-项目-用户管理-用户列表-分配角色-显示当前用户角色

1. 显示当前用户名字 this.currUsername = user.username
2. 显示当前用户的角色名字
   > 角色名字->label->(v-model 绑定的值===option 的 value 值)
   > option 的 value (1,2,3,4,5)
   > 通过 get 请求获取当前用户的 rid(角色 id) this.currRoleId = rid;(2)
   > 角色 rid 接口文档写的是 role_id

#### 06-项目-用户管理-用户列表-分配角色-修改用户角色

> 点击对话框的确定->发送请求-改角色

```js

async setRole() {
      // id: 用户id->1看data 2. 看方法能不能传递user.id -> 在data中提供新数据currUserId
      // 请求体{rid:当前修改后的角色id}

      const res = await this.$http.put(`users/${this.currUserId}/role`, {
        rid: this.currRoleId
      });
      this.dialogFormVisibleRole = false;

      // console.log(res);
    },
```

#### 07-项目-用户管理-用户列表-合并分支-推送

1. git branch
2. git status
3. git add .
4. git commit -m ""
5. git checkout master
6. git status
7. git merge dev-users
8. git push

#### 08-项目-权限管理-新建分支-功能演示

1. 权限列表
2. 角色列表
   2.1 表格展示
   2.2 单元格可以展开
   2.3 点击操作中 check -> 树形结构
   > 新建分支

#### 09-项目-权限管理-权限列表-新建组件-路由配置

1. 配置侧边栏路由
2. 新建组件 rights.vue
3. 配置路由

#### 10-项目-权限管理-权限列表-自定义面包屑组件

> 每次使用面包屑 很麻烦-> 封装->自定义组件

1. 新建 cusBread.vue
2. template 中是之前的面包屑组件
3. props 声明数据
4. {{使用数据}}
5. main.js 导入 注册全局组件
6. 在任何组件中 template 可以使用组件(传值)

#### 11-项目-权限管理-权限列表-获取权限列表数据

1. 先布局 再交互(处理数据)
2. 先处理数据 再布局
   > 注意: 非登录请求 需要设置头部 token

#### 12-项目-权限管理-权限列表-axios-拦截器统一设置请求头

> 每次设置非登录请求的头部 麻烦->axios 拦截器统一处理头部

```js
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // 如果拦截到的请求不是登录 设置头部
    if (config.url !== 'login') {
      const AUTH_TOKEN = localStorage.getItem('token')
      config.headers.Authorization = AUTH_TOKEN
    }
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
```

#### 13-项目-权限管理-权限列表-表格展示

1. el-table-column type="index"
2. 除了层级之外的数据渲染完毕

#### 14-项目-权限管理-权限列表-表格展示-层级显示

> level==='0' -> 一级

```html
<el-table-column label="层级" width="200">
  <template slot-scope="scope">
    <span v-if="scope.row.level==='0'">一级</span>
    <span v-if="scope.row.level==='1'">二级</span>
    <span v-if="scope.row.level==='2'">三级</span>
  </template>
</el-table-column>
```

#### 15-项目-权限管理-角色列表-新建组件-配置路由

1. 侧边栏导航 配置标识
2. 新建组件 roles.vue
3. 配置路由

#### 16-项目-权限管理-角色列表-面包屑和添加按钮

1. el-card
2. 自定义面包屑
3. el-row>el-col>el-button

#### 17-项目-权限管理-角色列表-获取角色列表数据

> 每个角色都有自己的权限
> 权限三级 children

#### 18-项目-权限管理-角色列表-表格展示

> 把 users.vue 的 el-table 复制修改
> 操作里面的@click 删除

#### 19-项目-权限管理-角色列表-表格展示-展开行功能分析

1. el-table-column type="expand"
2. 展开之后的内容 需要 template slot-scope="scope"
3. 行列布局->for 循环嵌套 -> v-for 指令
4. el-row>(el-col>(一级权限)+el-col>el-row>(el-col>二级权限+el-col>三级权限))

```html
<el-row>
  <el-col> <span>一级权限</span> </el-col>
  <el-col>
    <el-row>
      <el-col> <span>二级权限</span> </el-col>
      <el-col> <span>三级权限</span> </el-col>
    </el-row>
  </el-col>
</el-row>
```

#### 20-项目-权限管理-角色列表-表格展示-展开行-一级权限

> v-for 遍历最外层的 el-row
> 一级权限展示的位置在第一行的第一列里面 span

```html
 <el-row v-for="(item1,i) in scope.row.children">
            <el-col>
              <span>{{item1.authName}}</span>
            </el-col>
            <el-col>
              </el-row>
```

#### 21-项目-权限管理-角色列表-表格展示-展开行-二级三级权限

> 渲染二级和三级

```html
<template slot-scope="scope">
  <!-- 展开之后的内容 -->
  <!-- 分析布局 -->
  <el-row v-for="(item1,i) in scope.row.children" :key="i">
    <el-col :span="4">
      <el-tag type="success">{{item1.authName}}</el-tag>
    </el-col>
    <el-col :span="20">
      <el-row v-for="(item2,i) in item1.children" :key="i">
        <el-col :span="4">
          <el-tag type="info">{{item2.authName}}</el-tag>
        </el-col>
        <el-col :span="20">
          <el-tag v-for="(item3,i) in item2.children" :key="i" type="warning"
            >{{item3.authName}}</el-tag
          >
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
```

> 第三级权限显示的位置是最里层的 el-tag 而不是 el-col
> el-tag 取代了之前 span

###day10-项目-重点

#### 01-项目-权限管理-角色列表-展开行-样式调整-处理无权限

1. el-tag 关闭符号 X closeable
2. 图标 > i 标签 class
3. el-tag 设置类名 margin-top
4. 处理未分配权限的显示 v-if

#### 02-项目-权限管理-角色列表-展开行-取消权限

> 点击 el-tag 的 X -> 取消权限
> 发送请求 role.id rights.id
> 三级权限的 el-tag 做法一样
> 刷新表格

#### 03-项目-权限管理-角色列表-展开行-取消权限-优化

> 取消权限成功后, 只更新当前角色的权限
> 前提 : 取消成功后, res 是该角色的剩余权限

```js
role.children = res.data.data
```

#### 04-项目-权限管理-角色列表-修改权限-显示对话框

> 分配/设置/修改权限
> 点击操作 check->打开对话框

#### 05-项目-权限管理-角色列表-修改权限-树形结构-文档分析

1. data 树形结构的数据源
2. node-key 每个节点唯一标识 通常是 data 里面的 id
3. default-expanded-keys =[想要展开的节点的 id]
4. default-checked-keys=[想要选中的节点的 id]
5. props 配置选项 ={label,children}
   > label 和 children 值来源于 data 数据中的 key 名
   > 每个节点都半选和全选的状态

#### 06-项目-权限管理-角色列表-修改权限-树形结构-配置数据

> 点击 check 发送请求 -> 获取树形结构的权限数据 get(`rights/tree`)

1. data treeData
2. el-tree :data="treeData"
3. props="{label:'authName',children:'children'}"
4. default-expand-all

#### 07-项目-权限管理-角色列表-修改权限-树形结构-显示已有权限

1. data 中提供数组
2. :default-checked-keys="checkedArr"
3. 点击 check 传递角色 role.children 遍历

#### 08-项目-权限管理-角色列表-修改权限-树形结构-分配权限-分析

1. 点击确定按钮- > 发送请求
2. 角色 id+权限 id 列表
3. currRoleId:-1 上一步已经赋值完毕
   > 权限 id 列表分 2 种
4. 全选节点 id
5. 半选的节点 id

#### 08-项目-权限管理-角色列表-修改权限-树形结构-分配权限-实现

> 目的: 给请求的参数赋值

1. 角色 id
2. rids:以,分割的权限 id 列表 arr
   > 注意: this.checkedArr = tempArr 只添加最里层的权限 id

```js
   // 分配权限 - 发送请求
    async setRights() {
      // 1. 获取节点中全选的节点的id
      // 标签中 el-tree getCheckedKeys()
      // el-tree->DOM元素 .js方法()      ->   vue中操作DOM元素  -> ref操作DOM
      // 步骤
      // 1. 给要操作的元素(标签)设置ref属性值
      // 2. js代码中 this.$refs.ref的值.js方法()
      const arr1 = this.$refs.tree.getCheckedKeys();
      // console.log(arr1);

      // 标签中 div#main
      // document.getElementById("main").getAttribute();

      // 2. 获取节点中半选的节点的id
      const arr2 = this.$refs.tree.getHalfCheckedKeys();
      // console.log(arr2);

      // ES6 展开操作运算符    ...容器名(数组或者对象)
      const arr = [...arr1, ...arr2];
      // console.log(arr);

      // 3. 发送请求
      const res = await this.$http.post(`roles/${this.currRoleId}/rights`, {
        rids: arr.join(",")
      });
      console.log(res);

      // 4. 关闭对话框
      this.dialogVisible = false;

      // 5. 更新表格
      this.getRoles();
    },

```

#### 09-项目-首页-侧边栏-动态导航

> 接口 1.4.2

```html
<el-menu router unique-opened default-active="2">
  <el-submenu
    :index="''+item1.order"
    v-for="(item1,i) in menus"
    :key="item1.id"
  >
    <template slot="title">
      <i class="el-icon-location"></i> <span>{{item1.authName}}</span>
    </template>
    <el-menu-item
      :index="item2.path"
      v-for="(item2,i) in item1.children"
      :key="item2.id"
    >
      <i class="el-icon-success"></i> {{item2.authName}}
    </el-menu-item>
  </el-submenu>
</el-menu>
```

#### 10-项目-效果演示-不同角色用户登录-显示对应权限

> 不同角色的用户登录后 -> token 不同->请求头不同->发送请求->服务端返回的响应不同

#### 11-项目-不同角色用户登录-显示对应权限-导航守卫

> 之前渲染 home 时 在渲染之前 判断 token
> 路由导航守卫-> 路由拦截

1. to 要去的路由配置
2. from 当前的路由配置
3. next() 继续执行匹配路由配置！

```js
router.beforeEach((to, from, next) => {
  console.log(to)

  // 如果要去的是登录  -> 该登录登录 -> next()
  if (to.name === 'login') {
    next()
  } else {
    // 如果要去的不是登录 -> 是否有token -> 如果有 -> next() 如果没有->login
    if (!localStorage.getItem('token')) {
      // 去登录

      // 提示
      // this.$message.warning();
      Message.warning('请先登录')

      router.push({
        name: 'login'
      })
    } else {
      next()
    }
  }
})
```

#### 12-项目-权限管理-合并分支-推送-新建分支

1. git branch
2. git status
3. git add .
4. git commit -m ""
5. git checkout master
6. git status
7. git merge dev-rights
8. git checkout -b dev-goods

#### 13-项目-商品管理-功能演示

1. 商品列表(准备好) -> 添加商品
2. 分类参数(动态/静态)
3. 商品分类(添加分类-层级展示)

#### 14-项目-商品管理-商品列表-显示(提前准备)

> 02-其他资源-goodslist.vue

1. 导入组件
2. 配置路由
3. 自定义面包屑名字 my-bread
   > 注意: v-loading 删除 -> 别着急!

#### 15-项目-商品管理-添加商品-新建组件-配置路由-布局

1. 新建 goodsadd.vue
2. 配置路由
3. goodslist.vue 添加商品-> 编程式导航
4. el-card>面包屑

#### 16-项目-商品管理-添加商品-步骤条

1. el-alert

```html
<el-steps :active="1" align-center>
  <el-step title="基本信息"></el-step>
  <el-step title="商品参数"></el-step>
  <el-step title="商品属性"></el-step>
  <el-step title="商品图片"></el-step>
  <el-step title="商品内容"></el-step>
</el-steps>
```

> active 要的是数字

#### 17-项目-商品管理-添加商品-tabs 标签

> 当选中某个 tab 时 v-model 绑定的 active 属性值 就会变成被选中的 tab 的 name 值

```html
<el-tabs tab-position="left" v-model="active">
  <el-tab-pane name="1" label="基本信息">基本信息基本信息基本信息</el-tab-pane>
  <el-tab-pane name="2" label="商品参数">商品参数商品参数商品参数</el-tab-pane>
  <el-tab-pane name="3" label="商品属性">商品属性商品属性商品属性</el-tab-pane>
  <el-tab-pane name="4" label="商品图片">商品图片商品图片商品图片</el-tab-pane>
  <el-tab-pane name="5" label="商品内容">商品内容商品内容商品内容</el-tab-pane>
</el-tabs>
```

###day11-项目-重点

#### 01-项目-商品管理-添加商品-基本信息-绑定表单数据

1. 给 tabs 外层包裹 el-form
2. data 提供 form 数据->看接口文档
3. 第一个 tab 对应的内容 设置了 4 个 el-input v-model="form.?"
4. 调整样式

#### 02-项目-商品管理-添加商品-基本信息-级联选择器-文档-引入

> 引入级联选择器 表单元素

1. options
2. v-model="[]"
3. props="{label/value/children}"
4. @change

#### 03-项目-商品管理-添加商品-基本信息-级联选择器-获取分类数据

1. 获取商品三级分类数据 type=3

#### 04-项目-商品管理-添加商品-基本信息-级联选择器-配置数据

1. options="options"
2. v-model selectedOptions [1,3,6]
3. props="defaultProp" {cat_id/cat_name/children}
4. 提供 handleChange 方法

#### 05-项目-商品管理-添加商品-商品参数-获取动态参数数据

> 选中第二个 tab 并且有三级分类 -> 获取动态参数数据
> attr_name 和 attr_vals 可能会使用

#### 06-项目-商品管理-添加商品-商品参数-复选框组-文档-引入

1. 确定要使用的组件
2. 复选框组
   > 注意: 外层需要 el-form-item
3. v-for arrDy
4. v-for item1.attr_vals -> "abc,mn"
5. 获取数据后 把字符串->数组

```html
<el-form-item
  :label="item1.attr_name"
  v-for="(item1,i) in arrDy"
  :key="item1.attr_id"
>
  <!-- 复选框组 -->
  <el-checkbox-group v-model="checkList">
    <el-checkbox
      v-for="(item2,i) in item1.attr_vals"
      :key="i"
      :label="item2"
    ></el-checkbox>
  </el-checkbox-group>
</el-form-item>
```

```js
item.attr_vals =
  item.attr_vals.trim().length === 0 ? [] : item.attr_vals.trim().split(',')
```

#### 07-项目-商品管理-添加商品-商品参数-调整样式-默认全选中

1. 边框 border
2. 默认全选中 -> v-model=[被选中的 el-checkbox 的 label]

#### 08-项目-商品管理-添加商品-商品属性-获取静态参数数据

> 选中第三个 tab 并且有三级分类-> 获取该三级分类的静态参数了

```js
if (this.active === '3') {
  if (this.selectedOptions.length === 3) {
    //获取静态参数数据
    const res = await this.$http.get(
      `categories/${this.selectedOptions[2]}/attributes?sel=only`
    )
    this.arrStatic = res.data.data
    console.log(this.arrStatic)
  } else {
    this.$message.warning('请选择商品的三级分类')
  }
}
```

#### 09-项目-商品管理-添加商品-商品参数-布局

> 把获取的静态参数数据 arrStatic 布局展示在页面
> v-for

#### 10-项目-商品管理-添加商品-图片上传-文档-引入

1. 引入 el-upload 组件
2. action 上传地址
3. headers 设置头部
4. 钩子函数 :on-remove/success

#### 11-项目-商品管理-添加商品-图片上传-配置属性

> 之前 axios 设置 baseURL 和请求头 -> 针对是 axios

1. action->全路径
2. headers 需要设置
3. 此时 图片上传->服务器目录 tmp_uploads 临时路径
4. 图片移除/上传临时路径将来可能会用

#### 12-项目-商品管理-添加商品-商品内容-富文本编辑器

1. 商品内容->富文本->看 element-ui->vue 开源库->搜索富文本->确定组件
2. 局部引入组件->使用->调整样式->v-model="form.goods_introduce"

#### 13-项目-商品管理-添加商品-表单数据分析

> 在添加商品请求发送之前 ,处理参数

1. 分类 id form.goods_cat
2. pics:[{pic:临时路径}]
3. attrs:[{attr_id:?,attr_value:?}]

#### 14-项目-商品管理-添加商品-表单数据处理-分类和图片

> 在发送添加商品请求之前 处理三个参数

1. goods_cat
2. pics:[{pic:临时路径}]
   > findIndex()

#### 15-项目-商品管理-添加商品-表单数据处理-attrs

> attrs->动态和静态

```js
// 动态参数数组
const arr1 = this.arrDy
const arr1New = arr1.map(item => {
  return { attr_id: item.attr_id, attr_value: item.attr_vals }
})

// 静态参数数组
const arr2 = this.arrStatic
const arr2New = arr2.map(item => {
  return { attr_id: item.attr_id, attr_value: item.attr_vals }
})
// 合并数组
const arr = [...arr1New, ...arr2New]
```

#### 16-项目-商品管理-添加商品-发送请求-回到商品列表页

> 添加商品->发送请求->回到列表

#### 17-项目-商品管理-分类参数-新建组件-路由配置

1. 新建组件 params.vue
2. 配置路由

#### 18-项目-商品管理-分类参数-动态参数-布局-配置级联选择器

> 根据 goodsadd.vue 代码复制 修改

### day12-项目-重点

#### 01-项目-商品管理-分类参数-动态参数-获取动态参数数据

1. 选中级联选择器 @change -> 获取动态参数数据
2. 选中第一个 tab 时 @tab-click -> 获取动态参数数据
   > 条件: 三级分类 + this.active==="1"

#### 02-项目-商品管理-分类参数-动态参数-表格渲染

1. el-button 设置动态参数 :disable
2. el-table -> 渲染动态参数的数据 sttr_name

#### 03-项目-商品管理-分类参数-动态参数-动态编辑-文档-引入

> 表格展开后-> 显示动态属性的 attr_vals->el-tag 动态编辑

1. 组件
2. 样式
3. js(data+methods)

#### 04-项目-商品管理-分类参数-动态参数-动态编辑-配置-完成

> 把数组换成 attr_vals
> 编辑->移除+添加

#### 05-项目-商品管理-分类参数-动态参数-动态编辑-发送请求

1. 接口 1.7.5 有问题 没有请求体

```json
{
  "attr_name": "",
  "attr_sel": "",
  "attr_vals": ""
}
```

2. attr_vals 要求不是数组->字符串类型
   > 移除和回车 ->发送编辑参数的请求

#### 06-项目-商品管理-分类参数-静态参数-布局-获取数据

1. 获取静态参数数据 arrStatic sel=only
2. el-table 渲染数据

#### 07-项目-商品管理-商品分类-准备组件-路由配置

1. 02-其他资源/goodscate.vue 商品分类组件
2. 添加分类+表格展开后树形结构

#### 08-项目-商品管理-商品分类-element-tree-grid-文档-引入

> 需求->element-ui->el-table->展开->template->X ->找新插件

1. 替换 element-ui -> X
2. 找 element-ui 扩展表格 xx-table-> 替换了 el-table
3. 找 element-ui 中的 el-table 的扩展->element-xx-table-tree 插件
   > 怎么找?
4. 百度
5. github
6. npm
7. vue 资源->富文本
   > 确定了组件 element-tree-grid
8. npm 安装
9. 局部引入注册
10. 使用

#### 09-项目-商品管理-商品分类-element-tree-grid-配置

> 树形表格插件有很多 代码最少的!
> 每个 key 的值都来源于 el-table 绑定的数据

```html
<el-tree-grid
  prop="cat_name"
  label="分类名称"
  treeKey="cat_id"
  parentKey="cat_pid"
  levelKey="cat_level"
  childKey="children"
></el-tree-grid>
```

#### 10-项目-商品管理-商品分类-添加分类-打开对话框

1. 点击按钮->获取二级分类数据(type=2)+打开对话框
2. 配置对话框中的级联选择器的数据
   > 注意: 添加分类->只能添加一二三级分类

#### 11-项目-商品管理-商品分类-添加分类-发送请求

1. data 中准备 form->请求体数据
2. 对话框中的 el-input 绑定 attr_name
3. 根据不同情况处理 cat_pid 和 cat_level
4. 发送请求
5. 清空+刷新+关闭对话框

```js
if (this.selectedOptions.length === 0) {
  this.form.cat_pid = 0
  this.form.cat_level = 0
}
if (this.selectedOptions.length === 1) {
  this.form.cat_pid = this.selectedOptions[0]
  this.form.cat_level = 1
}
if (this.selectedOptions.length === 2) {
  this.form.cat_pid = this.selectedOptions[1]
  this.form.cat_level = 2
}

const res = await this.$http.post(`categories`, this.form)
```

#### 12-项目-合并分支-推送分支-新建分支

1. 合并 dev-goods 分支
2. 新建 dev-order

#### 13-项目-订单管理-订单列表-准备组件-路由配置

1. 02-其他资源/order.vue 订单列表
2. 配置路由
   > 点击编辑->打开对话框->省市区的显示(级联选择器)

#### 14-项目-订单管理-订单列表-省市区引入

> 省市区数据->web/苹果/安卓->接口中没有->.json 文件->.js 模块
> 级联选择器 props label/value/children -> .js 文件中的 key 名
> 授课目的:.vue 组件中可以引入其他的.js 模块, 比如 swiper

#### 15-项目-数据统计-数据报表-Echarts-文档-引入

> 图表

1. flash
2. html5 canvas -> 画画
3. 库
   3.1 C3.js
   3.2 Charts.js
   3.3 ECharts.js(百度)
   > Echarts.js BAT TMDJ(300 亿)
   > 底层其实是 canvas
   > 使用
4. npm
5. 引入
6. 提供有宽高的容器
7. 初始化(mounted())

#### 16-项目-数据统计-数据报表-Echarts-配置

1. 初始化
2. 提供 option
   2.1 请求获取 reports/type/1
   2.2 假数据 option2
3. 使用 option

#### 17-项目-优化-加载动画

> v-loading ="loading" bool

#### 18-项目-优化-拦截器统一处理响应

> 统一处理请求返回的响应状态不是 200 和 201 的情况
> 利用 axios 拦截器(响应)->提示框->发送请求时->解构赋值->else 都不用写!

#### 19-项目-优化-路由懒加载

> 首屏加载慢->一次性加载所有组件的代码
> 使用哪个组件->加载哪个组件->路由懒加载
> router/index.js -> 导入自己组件

```js
const Login = () => import('@/components/login.vue')
```

> 如果不处理->打包后->项目的所有组件->一个.js 文件
> 如果路由懒加载 -> 打包后->项目的每个组件->自己的.js 文件
> npm run build 打包

### day13-项目-重点

#### 01-项目-优化-路由懒加载
打包->所有自己的.vue组件的代码->同一个大的.js文件
打包->每个自己的.vue组件的代码->对应的.js文件(小)
> 

#### 02-项目-补充-nextTick
> 改变数据->经过时间->渲染视图
```js
 this.$nextTick(() => {
                        // 操作dom
                        console.log(this.$refs.p.innerText);

                    })

```

#### 03-项目-优化-cdn-配置
> 项目中的一些资源/vue-router/vue/moment/echarts/axios从哪引入?->node_modules
> 打包时 这些.js资源会变成项目源码的一部分->项目包很大?
> 改成cdn->从网络获取

1. 找到package.json中使用的包
2. 找包的对应cdn网址->官网+bootcdn
3. 引入 index.html  src=""
4. 修改webpack打包配置
```json
 // 配置cdn
    externals: {
        // key->包名->package.json
        // value-> 该包源码中暴露在全局中的变量名
        "vue": "Vue",
        "vue-router": "VueRouter",
        "element-ui": "ELEMENT",
        "axios": "axios",
        "moment": "moment",
        "echarts": "echarts"
    },

```
> 注意:配置js的cdn资源->全局变量名->源码前几行define/exports/require/global
> 注意: VueRouter->router/index.js
> main.js改成 ELEMENT 
> link的src不需要单独配置->在main.js中 把之前引入.css文件的代码删除掉

#### 04-项目-打包
> npm run build
> 把项目所有资源(.vue .png. 字体 .css)->对应html/css/js
> dist/
1. index.html
2. static/
2.1 css/
2.2 js/
2.2.1 序号.随机数.js  ->  自己的组件   <- 路由懒加载
2.2.2 app.随机数.js  -> 公共js代码

> 目的:打包->dist/->把dist文件夹放在上线的服务器(阿里/自己)目录下
-> 自己的服务器(http-server)
2.2.3 vender.随机数.js -> 第三方.js  <- cdn引入+配置
> 问题: 样式冲突+覆盖->所有css->
1. 保证类名都不一样
2. style scoped(不要忘记App.vue的style)
> 上线完成
> 序号.随机数.js ->防止用户无法使用网站新特性

#### 05-基础-组件通信-父子组件通信-子传父

> 回忆

> 父->子 (props)

1. 在子组件props:["msg"]
2. 使用组件时 <child-a :msg="父组件data的数据">
3. 在子组件的template {{msg}}

> 子传父

1. 在子组件中 this.$emit(自定义事件名xxx,数据a)
2. 在使用子组件时 child-a @xxx="父组件methods中的方法fnx"
3. 在父组件的methods中fnx(argv){此时 argv就是数据a}

> 自定义事件 this.$emit()

#### 06-基础-组件通信-兄弟组件通信

> 需求: 把A的数据传给B

1. A 触发事件 vm.$emit(事件名,数据a)
2. B 绑定事件 vm.$on(事件名,(argv)=>{此时 argv就是数据a})

> 问题->不同组件的this -> 不同组件共用一个vm实例->.js模块->导出vm实例
>
> 中央事件总线



#### 07-基础-vuex-状态管理流程

> vuex->状态管理->数据管理->组件数据通信->组件传值

> vuex:state/actions/mutations

1. state 数据(组件之间需要共享/传值)声明
2. actions 异步操作->和后台交互的异步操作->ajax
3. mutations 改变state的方法

#### 08-基础-vuex-state 和 mapState

> 配置

1. npm i vuex
2. 导入
3. Vue.use(Vuex)
4. 实例化仓库store
5. 通过选项挂载仓库 store

> 使用

1. state写数据声明
2. state中的数据是响应式的
3. state中的数据可以在任意组件使用->怎么用?
4. 配置计算属性和mapState

```js
computed:{
 
        
    ...mapState({count:"count"}),
    ...mapState(["msg"])
}
```



#### 09-基础-vuex-getters 和 mapGetters

> 场景:如果state中的数据A复杂->依赖了其他state,此时把A写在getters

```js
getters:{
    a(state){return state.数据+"xyz"}
}

```

`在组件中使用`

```js
computed:{
    ...mapGetters(["a"])
}
```



#### 10-基础-vuex-mutations 和 mapMutations

> mutations作用:修改state的数据

`store/mutations`

```js
    mutations: {
        fn1(state,obj){修改state}
    }
```

`组件/methods`

```js
methods:{
    // 在methods中增加同名的方法fn1
    ...mapMutations(["fn1"])
}
```

> state->组件的计算属性
>
> getters->组件的计算属性
>
> mutations->组件的methods



> 删除文件夹时  无权限->利用工具rimraf(全局命令行工具)->来到上层目录->打开cmd->rimraf 文件夹名













