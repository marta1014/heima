# toutiao

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

按需安装了elementUI以及注册、引用样式并导入于main.js、
对目录的整理以及对默认样式的初始化index.less
新建路由并配置路由

## 知识点

>style中的lang属性以及scoped属性
>关于校验：required只校验 null 、 '空串' 、undefined 和空字符串 ,但是不校验false/true
>点击登陆提交激活手动校验、获取组件实例并通过一个validate的方法进行（整个表单）校验
>校验通过发送请求（携带输入到的参数信息）
>响应成功结果中有个token令牌，把其保存在本地localStotage中 失败则提示
>成功后登入 发送请求 携带记录的token 获取到个人信息渲染至页面
>ele组件布局中用到的dropdown下拉菜单、message消息提示、el-menu导航菜单、container、layout布局以及其一些方法、
>关于axios      安装依赖 -> 引入包 -> 常态值(请求地址)的提取优化 -> axios赋值给Vue全局对象的原型属性使其共享
>关于ele的install方法
>vue.use()实际上是调用了ele里面的install方法，该方法是接收了vue对象，完成了组件的全局注册，利用该方法，实现全局注册
>模拟ele 新建js文件 先export default一个对象 然后利用install方法
>示例如下：
import asideIn from './aside/aside.vue'
import headerIn from './header/heaeder.vue'

export default {
  install (Vue) {
    Vue.component('asideIn', asideIn)
    Vue.component('headerIn', headerIn)
  }
}
然后就可以main.js引入该js