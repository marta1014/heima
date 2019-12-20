<template>
  <div class="aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt="">
    </div>
    <!-- 开启路由 设置路由为true（布尔值） 或者直接写router-->
    <!-- 配置路由就是给子项设置index -->
    <el-menu :router='true' background-color="#eeeeee" text-color="#999" active-text-color="#008c8c">
      <!-- 没有折叠选项的栏 el-menu-item -->
      <el-menu-item>首页</el-menu-item>
      <!-- submenu可以生成二级菜单 二级下需要继续放el-menu-items以实现选项 -->
      <el-submenu index="1">
        <template slot="title">
        <!-- 具名插槽 -->
          <span>文章管理</span>
        </template>
          <el-menu-item index='/home/publish'>发布文章</el-menu-item>
          <el-menu-item index='/home/articles'>文章列表</el-menu-item>
          <el-menu-item index='/home/comment'>评论</el-menu-item>
          <el-menu-item index='/home/material'>闹啥子</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>粉丝管理</span>
        </template>
          <el-menu-item index='/home/pic'>图文数据</el-menu-item>
          <el-menu-item index='/home/fans'>粉丝概况</el-menu-item>
          <el-menu-item index='/home/ftu'>粉丝画像</el-menu-item>
          <el-menu-item index='/home/flist'>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index='/home/publish'>账户信息</el-menu-item>

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
