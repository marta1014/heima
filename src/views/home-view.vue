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
      list: ['http://pic.netbian.com/uploads/allimg/170415/192100-14922552602b64.jpg', 'http://pic.netbian.com/uploads/allimg/170601/164714-1496306834f54a.jpg', 'http://pic.netbian.com/uploads/allimg/190822/203056-1566477056ce1e.jpg', 'http://pic.netbian.com/uploads/allimg/180605/172027-1528190427fa3a.jpg']
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
