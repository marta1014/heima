<template>
<!-- 面包屑组件 -->
  <el-breadcrumb separator=">">
      <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
      <!-- 定义具名插槽 -->
      <el-breadcrumb-item><slot name='title'></slot></el-breadcrumb-item>
      <!-- <el-breadcrumb-item><slot name='title'></slot></el-breadcrumb-item> -->
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
