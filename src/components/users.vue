<template>
  <el-card class="card">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索+添加 -->
    <el-row>
      <el-col>
        <el-input
          @clear="getAllUsers()"
          clearable
          placeholder="请输入内容"
          v-model="query"
          class="input-with-select"
        >
          <el-button
            @click="searchUser()"
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
        <el-button type="primary" @click="showDiaAdd()">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 data属性的值是表格的值  
        el-table-column 列 （每列行数是data绑定数据的长度）
        label="列的表头文本" 
        prop="每一列中每个单元格的数据  来源于tableData中的每个对象的key名"
    -->
    <!-- 
      id: id
      username: 用户名
      email: 邮箱
      mobile: 手机号
      create_time: 创建时间
      mg_state: 用户状态
      role_name: 角色名
     -->

    <el-table height="300px" :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="#" width="80"></el-table-column>
      <el-table-column prop="username" label="姓名" width="100">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="mobile" label="电话" width="120">
      </el-table-column>
      <el-table-column label="创建日期" width="180">
        <!-- 如果单元格的内容不是prop的值key对应的值，
      此时，需要给被显示内容的外层包裹容器template -->

        <!-- 
        目的：在里层使用外层tableData-》组件传值
        slot-scope作用：承上启下/传递数据
        slot-scope:"scope"
        "scope"会自动获取上层数据的值:data="tableData"
        在里层通过scope.row.create_time
       -->
        <template slot-scope="scope">
          {{ scope.row.create_time | fmtDate }}
        </template>
      </el-table-column>

      <el-table-column label="用户状态" width="140">
        <template slot-scope="scope">
          <el-switch
            @change="changeState(scope.row)"
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            plain
            type="primary"
            icon="el-icon-edit"
            circle
            @click="showDiaEdit(scope.row)"
          ></el-button>
          <el-button
            size="mini"
            plain
            type="danger"
            icon="el-icon-delete"
            circle
            @click="showDelConfig(scope.row)"
          ></el-button>
          <el-button
            size="mini"
            plain
            type="success"
            icon="el-icon-check"
            circle
            @click="showDiaRole(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- 添加用户  对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisibleAdd">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑用户  对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisibleEdit">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input
            disabled
            v-model="form.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="editUser()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分配角色  对话框 -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisibleRole">
      <el-form>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <span>{{ currUsername }}</span>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="currRoleId">
            <!-- 
              1、v-model写在select
              2、如果v-model绑定数据的值和option的value一样 -》 默认显示option（label）
              3、如果选择了某个option，此时，v-model绑定的数据值就是被选中的option的value值

             -->
            <!-- 数字-1和"-1" -->
            <el-option disabled label="请选择" :value="-1"></el-option>
            <el-option
              v-for="(v, i) in roles"
              :key="i"
              :label="v.roleName"
              :value="v.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleRole = false">取 消</el-button>
        <el-button type="primary" @click="setRole()">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      //   表格数据源
      tableData: [],
      query: "",
      pagenum: 1,
      pagesize: 2,
      total: -1,
      // 控制对话框显示/隐藏
      dialogFormVisibleAdd: false,
      dialogFormVisibleEdit: false,
      dialogFormVisibleRole: false,
      form: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      formLabelWidth: "100px",
      // select所绑定的数据
      currRoleId: -1,
      roles: [],
      currUsername: "",
      currUserId: -1,
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    async getTableData() {
      //   query 查询参数 可以为空
      //   pagenum 当前页码 不能为空
      //   pagesize 每页显示条数 不能为空

      // 请求头
      // 原因是 所有接口中，除了登录不需要授权- 》 其他所有的请求都需要授权 -》
      // 设置请求头-》Authorization=token -> 查看axiosAPI
      const AUTH_TOKEN = localStorage.getItem("token");
      this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}`
      );
      // console.log(res);
      const {
        meta: { status, msg },
        data: { total, users },
      } = res.data;
      if (status === 200) {
        // 获取成功
        this.tableData = users;
        this.total = total;
        // this.$message.success(msg);
      } else {
        this.$message.warning(msg);
      }
    },
    // 分页相关方法
    handleSizeChange(val) {
      this.pagenum = 1;
      this.pagesize = val;
      this.getTableData();
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      // val是当前页码
      this.pagenum = val;
      this.getTableData();
      // console.log(`当前页: ${val}`);
    },
    searchUser() {
      this.pagenum = 1;
      this.getTableData();
    },
    getAllUsers() {
      this.getTableData();
    },
    // 添加用户-打开对话框
    showDiaAdd() {
      this.form = {};
      this.dialogFormVisibleAdd = true;
    },
    // 添加用户-发送请求
    async addUser() {
      // 清空输入框数据
      // 1、发送请求
      const res = await this.$http.post(`users`, this.form);
      console.log(res);
      const {
        meta: { status, msg },
      } = res.data;
      if (status === 201) {
        // 2、关闭对话框
        this.dialogFormVisibleAdd = false;
        // 3、刷新表格
        this.getTableData();
        // 4、提示
      } else {
        this.$message.warning(msg);
      }
    },
    // 删除 - 打开确认框
    showDelConfig(user) {
      console.log(user);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          // 删除，发送请求
          const res = await this.$http.delete(`users/${user.id}`);
          console.log(res);
          const {
            meta: { msg, status },
          } = res.data;
          if (status === 200) {
            this.$message.success("删除成功");
            this.pagenum = 1;
            this.getTableData();
          } else {
            this.$message.warning(msg);
          }
        })
        .catch(() => {
          this.$message.info("已取消删除");
        });
    },
    // 编辑 - 对话框
    async showDiaEdit(user) {
      this.dialogFormVisibleEdit = true;
      const res = await this.$http.get(`users/${user.id}`);
      console.log(res);
      const {
        meta: { status, msg },
        data,
      } = res.data;
      if (status === 200) {
        this.form = data;
      }
    },
    // 编辑 - 发送请求
    async editUser(edit) {
      const res = await this.$http.put(`users/${this.form.id}`, this.form);
      console.log(res);
      const {
        meta: { status, msg },
      } = res.data;
      if (status === 200) {
        this.dialogFormVisibleEdit = false;
        this.getTableData();
      } else {
        this.$message.warning(msg);
      }
    },
    // 修改用户状态
    async changeState(user) {
      // uid  用户id
      // type 改之后的状态
      const res = await this.$http.put(
        `users/${user.id}/state/${user.mg_state}`
      );
      // console.log(res);
    },
    // 分配角色 - 打开对话框
    async showDiaRole(user) {
      // console.log(user);
      this.currUserId = user.id;
      this.currUsername = user.username;
      this.dialogFormVisibleRole = true;
      // 获取所有角色名字
      const res = await this.$http.get(`roles`);
      // console.log(res);
      const {
        meta: { status, msg },
        data,
      } = res.data;
      if (status === 200) {
        this.roles = data;
      }
      //根据用户id查询用户 -》 获取当前用户id
      const res1 = await this.$http.get(`users/${user.id}`);
      console.log(res1);
      this.currRoleId = res1.data.data.rid;
    },
    // 分配角色 - 发送请求
    async setRole() {
      const res = await this.$http.put(`users/${this.currUserId}/role`, {
        rid: this.currRoleId
      });
      this.dialogFormVisibleRole = false;
      console.log(res);
    },
  },
};
</script>

<style>
.card {
  height: 100%;
}

.input-with-select {
  margin-top: 20px;
  width: 350px;
}
</style>