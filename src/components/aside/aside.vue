<template>
  <div class="aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <el-menu background-color="#eeeeee" text-color="#999" active-text-color="#008c8c">
      <!-- 没有折叠选项的栏 el-menu-item -->
      <el-menu-item>首页</el-menu-item>
      <!-- submenu可以生成二级菜单 二级下需要继续放el-menu-items以实现选项 -->
      <el-submenu index="1">
        <template slot="title">
        <!-- 具名插槽 -->
          <span>导航一</span>
        </template>
        <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>
          <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
         <template slot="title">
          <span>导航er</span>
        </template>
        <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>
          <el-menu-item>选项1</el-menu-item>
          <el-menu-item>选项2</el-menu-item>
      </el-submenu>
      <el-menu-item>账户信息</el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.aside {
     width: 230px;
     .el-menu {
       border-right:none;
     };
     .title {
         background-color: #ccc;
         text-align: center;
         padding: 10px 0;
         img {
             height: 35px;
         }
     }
 }
</style>
