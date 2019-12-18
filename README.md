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