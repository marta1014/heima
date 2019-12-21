<template>
  <el-card>
      <breadcrumb slot="header">
      <!-- 插槽内容 -->
      <template slot="title">评论管理</template>
      </breadcrumb>
      <el-table :data="list">
          <!-- label 表头 -->
          <el-table-column prop="title" label="标题" width="600"></el-table-column>
          <el-table-column :formatter="fmtBoolean" prop="comment_status" label="评论状态"></el-table-column>
          <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
          <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
          <el-table-column  label="操作">
              <template slot-scope="obj">
                <!-- {{obj.row}} 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据-->
                  <el-button type="text" size="small">修改</el-button>
              <!-- 需要根据状态进行操作是否关闭 -->
              <el-button type="text" size="small" @click="openOrClose(obj.row)">{{obj.row.comment_status ? '关闭' : '打开'}}评论</el-button>
              </template>
          </el-table-column>
      </el-table>
  </el-card>
</template>

<script>
// el-table无法处理请求回来的数据布尔值（状态） 用到了formatter属性
export default {
  data () {
    return {
      list: []// 定义数组接受返回数据
    }
  },
  methods: {
    getMsg () {
      this.$http({
        url: '/articles',
        // query参数放在axios的params里
        params: { response_type: 'comment' }
      }).then(res => {
        this.list = res.data.results
      })
    },
    // 格式化布尔值
    fmtBoolean (row, column, cellValue, index) {
      console.log(cellValue)
      // 当前行数据 当前列信息 当前单元格的值 索引
      return cellValue ? '正常' : '关闭'
    },
    openOrClose (row) {
      let mes = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否确定要${mes}评论吗`, '提示').then(() => {
        // 调用接口
        this.$http({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id },
          data: { allow_comment: !row.comment_status } // 因为当前如果是打开 ,就要关闭 如果是关闭 就要打开
        }).then(result => {
          //  表示执行成功
          this.getComment() // 重新拉取评论管理数据
        })
      })
    }
  },
  created () {
    this.getMsg()
  }

}
</script>

<style>

</style>
