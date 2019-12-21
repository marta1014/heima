// 封装一个axios 引入第三方的包 并进行处理
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 设置常态值

// 在发送请求时对业务进行处理
axios.interceptors.request.use(function (config) {
  // config是发送请求的配置信息（默认选项）
  let token = window.localStorage.getItem('user-token')// 取token
  config.headers.Authorization = `Bearer ${token}`// 统一注入token到headers属性 因为所有接口要求的token格式是一样的
  return config// 用该config请求进行后台操作 实际是把数据拿过来注入token然后返回
  // 请求成功调用的函数
}, function (error) {
  // 请求失败调用的函数
  return Promise.reject(error)
})
export default axios// 导出 并引入至main.js
