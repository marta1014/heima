<template>
   <el-carousel :interval="6000" arrow="always" height="90vh">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: ['http://pic.netbian.com/uploads/allimg/170415/192100-14922552602b64.jpg']
    }
  }
}
</script>

<style lang="less" scoped>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
