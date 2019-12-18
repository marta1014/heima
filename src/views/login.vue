<template>
<div class="login">
    <el-card class="login-card">
        <div class="title"><img src="../assets/img/logo_index.png" alt=""></div>
        <el-form>
        <el-form-item>
            <el-input placeholder="请输入号码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="请输入验证码" style="width:65%"></el-input><el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
            <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
        </el-form>
        </el-card>
</div>
</template>

<script>
// 单文件组件中如果需要在style标签中使用less sass
// 需要给标签上添加一个lang = “less”
// 且默认单文件的组件的style样式是全局的
// 如果使用相同的选择器 为想通过的style设置样式 默认后者会覆盖前者
// 若只想对自身的组件起作用 需要添加一个scope属性
// 这样就只对当前html起作用
// 给每个style标签都设置一个`scoped`属性
// 这样各个单文件组件的html标签解析出来后都会带有一个与其他单组件标签不同的`data-v-xxx`的唯一属性
// style样式设定也会自动与本身组件的`data-v-xxx`联系起来，这样就使得style样式只针对自己的组件起作用了
export default {

}
</script>

<style lang='less' scope>
.login {
background-image: url('../assets/img/background.jpg');
background-size: cover;
height:100vh;// 把当前可是区域分成100份
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
// element 表单是有固定格式的 表单是为了采集和校验数据
// el-form 是表单的容器 如果要放置表单 需要放置在el-form里面
// 如果要放置一个input组件到表单里 需要放置el-form-item里面
// 这样就代表一行
</style>
