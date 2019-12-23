<template>
  <el-card v-loading="loading">
      <!-- 面包屑 -->
      <breadcrumb slot="header">
      <div slot="title">素材管理</div>
      </breadcrumb>
      <!-- 上传组件 -->
      <el-row type="flex" justify="end"><el-upload :show-file-list="false" action="" :http-request="uploadFiles"><el-button type="primary" size="small">上传</el-button></el-upload></el-row>
      <!-- tab栏切换 -->
      <el-tabs v-model="activeName" @tab-click="otherTab">
           <el-tab-pane label="全部内容" name="all">
                 <!-- 全部素材展示区域 -->
      <div class="material">
          <el-card v-for="item of list" :key="item.id" class="cardImg">
              <img :src="item.url" alt="">
              <el-row class="card-choose">
                  <i class="el-icon-star-on" @click="collectItem(item)" :style="{color:item.is_collected ? 'red' : '#000'}"></i>
                  <i class="el-icon-delete" @click="delItem(item.id)"></i>
              </el-row>
          </el-card>
      </div>
           </el-tab-pane>
    <el-tab-pane label="我的收藏" name="collect">
          <!-- 收藏展示区域 -->
      <div class="material">
          <el-card v-for="item of list" :key="item.id" class="cardImg">
              <img :src="item.url" alt="">
          </el-card>
      </div>
    </el-tab-pane>
      </el-tabs>
      <!-- 分页区域 -->
      <el-row type="flex" justify="center" style="height:60px" align="middle">
          <el-pagination
            small
            layout="prev, pager, next"
            :total="page.total"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
             @current-change="changePage">
</el-pagination>
      </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      loading: false,
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    changePage (newPage) { //  分页切换 绑定当前页 重新拉取内容
      this.page.currentPage = newPage
      this.getMaterail()
    },
    getMaterail () { // 获取素材
      this.$http({
        url: '/user/images',
        params: {
          page: this.page.currentPage, // 当前页
          per_page: this.page.pageSize, // 总页
          collect: this.activeName === 'collect'
        }
      }).then(res => { // 绑定数据
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    },
    delItem (id) { // 删除项目
      this.$confirm('确定删除？').then(res => {
        this.$http({
          url: `/user/images/${id}`,
          method: 'delete'
        }).then(res => {
          this.getMaterail()
        })
      })
    },
    collectItem (item) {
      // console.log(item)接收到item 获取到里面is_collected的布尔值
      // 通过布尔值
      this.$http({
        url: `/user/images/${item.id}`,
        method: 'put',
        data: {
          collect: !item.is_collected // 取反 true的时候使其false 然后给collect的参值
        }
      }).then(res => {
        console.log(res)
        this.getMaterail()
      })
    },
    otherTab () { // tab切换 重置回第一页 重新拉取数据
      this.page.currentPage = 1 // 重置回第一页
      this.getMaterail()
    },
    uploadFiles (params) {
      this.loading = true
      //   let data = new FormData().append('image', params.file)
      let data = new FormData()
      data.append('image', params.file)
      this.$http({
        url: '/user/images',
        method: 'post',
        data
      }).then(res => {
        this.loading = false
        this.getMaterail()
      })
    }

  },
  created () { // 拉取数据
    this.getMaterail()
  }

}
</script>

<style lang="less" scoped>
.material {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .cardImg {
        position: relative;
    width: 200px;
    height: 220px;
    margin-top: 20px;
    img  {
        width: 100%;
    }
    .card-choose{
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        font-size: 20px;
        justify-content: space-around;
        background-color: #f4f5f6;
        width: 100%;
        height: 40px;
    }
}
}
</style>
