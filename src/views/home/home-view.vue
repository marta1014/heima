<template>
  <!-- <el-carousel :interval="6000" arrow="always" height="100vh">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>-->
  <el-row class="img">
    <img :src="homeImg" alt />
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      list: [''],
      homeImg: require('../../assets/img/5aa88fbbbc7c5.jpg')// 动态绑定图片
    }
  }
}
</script>

<style lang="less" scoped>
.img{
  img {
    width: 100%;
  }
}
</style>
