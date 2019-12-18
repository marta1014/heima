<template>
<div class="login">
    <el-card class="login-card">
        <div class="title"><img src="../assets/img/logo_index.png" alt=""></div>
        <el-form :model="loginForm" :rules="rules" ref="myForm">
        <el-form-item prop="mobile">
            <el-input placeholder="请输入号码" v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
            <el-input placeholder="请输入验证码" style="width:65%" v-model="loginForm.code"></el-input><el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
            <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" style="width:100%" @click="sbmLogin">登录</el-button>
        </el-form-item>
        </el-form>
        </el-card>
</div>
</template>

<script>

export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: ''
      },
      // 验证规则对象:{ key(字段名)：value(规则=>[])}
      rules: {
        mobile: [{ required: true, message: '请输入手机号' }, { pattern: /^1[3456789]\d{9}$/, message: '格式不正确' }],
        code: [{ required: true, message: '请输入验证码' }, { pattern: /^\d{6}$/, message: '格式为6位数字' }],
        check: [{ validator: function (rules, value, callback) {
          if (value) { // 勾选
            callback()// 当前校验通过
          } else {
            callback(new Error('请确认勾选条款'))
            // new Error 实例化了一个错误对象并传出 里面输入提示msg
          }
        } }]
      }
    }
  },
  methods: {
    sbmLogin () {
      // 手动校验
      // validate 对整个表单进行校验的方法 方法中传入一个函数 函数内两个参数（是否成功/未成功的字段） 若不传入回调函数，则会返回一个 promise
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          // 校验通过 => 发送请求
        }
      })
    }
  }

}
// element表单是有固定格式的 表单是为了采集和校验数据
// el-form 是表单的容器 如果要放置表单 需要放置在el-form里面
// 如果要放置一个input组件到表单里 需要放置el-form-item里面
// 这样就代表一行
// 表单校验-两种-自动校验`(校验单个表单数据)-`手动校验`-提交整个表单时,校验整个表单数据
// 数据校验需要给   ---el-form---组件绑定--model--属性 用来绑定表单数据对象
// 需要给  ----el-form---- 绑定----rules----属性 建立校验规则
// 给   ------form-item--------配置-----prop-------属性 需要校验的表单组件字段名
// 用v-model完成表单数据的双向绑定
// required必填项 pattern正则 validator自定义校验函数（它是校验规则的一个属性）
// 注意： required只校验 null undefined 空串 不校验true/false
// validator自定义校验函数 其中有三个参数 (rule(当前规则),`value`(当前需要校验的字段值),callback`(回调函数))
// 点击登陆时 激活手动验证 同时通过获取dom实例 通过validate方法进行校验

// 关于给style 设置 lang 以及 scooped的说明
// 单文件组件中如果需要在style标签中使用less sass
// 需要给标签上添加一个lang = “less”
// 且默认单文件的组件的style样式是全局的
// 如果使用相同的选择器 为想通过的style设置样式 默认后者会覆盖前者
// 若只想对自身的组件起作用 需要添加一个scoped属性
// 这样就只对当前html起作用
// 给每个style标签都设置一个`scoped`属性
// 这样各个单文件组件的html标签解析出来后都会带有一个与其他单组件标签不同的`data-v-xxx`的唯一属性
// style样式设定也会自动与本身组件的`data-v-xxx`联系起来，这样就使得style样式只针对自己的组件起作用了
</script>

<style lang='less' scope>
.login {
background-image: url('../assets/img/background.jpg');
background-size: cover;
height:100vh;// 把当前可视区域分成100份
display: flex;
justify-content: center;
align-items: center;
.login-card {
    height: 300px;
    width: 400px;
    opacity: .8;
    .title {
        text-align: center;
        margin-bottom: 10px;
        img {
            height: 30px;
        }
    }
}
}
</style>
