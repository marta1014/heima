<template>
  <div class="header">
    <el-row type="flex" justify="space-between">
      <el-col :span="12" class="left">
        <i class="el-icon-alarm-clock"></i>
        <span>为数不多的黑马奋斗时光</span>
      </el-col>
      <el-col :span="12" class="right">
        <el-row type="flex" justify="end" align="middle">
          <img :src="userInfo.photo" alt />
          <el-dropdown @command="commands">
            <span class="el-dropdown-link">
              {{userInfo.name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="info">周思涵</el-dropdown-item>
              <el-dropdown-item command="adds">git地址</el-dropdown-item>
              <el-dropdown-item command="leave">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        name: '',
        photo: ''
      }
    }
  },
  methods: {
    commands (command) {
      if (command === 'info') {
      } else if (command === 'adds') {
        window.location.href = 'https://baidu.com'
      } else {
        window.localStorage.removeItem('user-token') // 删除令牌 token
        this.$router.push('/login') // 回到登录页
      }
    }
  },
  created () {
    let token = localStorage.getItem('user-token')// 获取缓存用户令牌
    this.$http({// 发送请求 获取用户信息 携带令牌
      url: '/user/profile',
      // type: 'get', // 默认是get类型 所以可以不写
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      console.log(res, res.data.data)//  请求回来的数据信息 给它放到定义好的userInfo里 插值渲染至页面
      this.userInfo = res.data.data
    })
  }
}
</script>

<style lang='less' scoped>
.header {
  height: 64px;
  text-shadow: 1px 1px 2px #008c8c;
  background-color: #eeeeee;
  color:#999;
  .left {
    margin-top: 20px;
    padding-left: 20px;
    i {
      vertical-align: middle;
      font-size: 18px;
    }
    span {
      vertical-align: middle;
      margin-left: 16px;
      font-weight: 200;
    }
  }
  .right {
    margin-top: 14px;
    img {
      width: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    span {
      font-weight: 200;
      font-size: 16px;
      color: #666;
      margin-right: 6px;
    }
  }
}
</style>
