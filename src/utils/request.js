// 封装一个axios 引入第三方的包 并进行处理
import axios from 'axios'
import { Message } from 'element-ui'// 引入ele的message对象 就可以使用options参数
import router from '../router'
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

// 响应拦截 响应数据 回来 到达then方法之前
axios.interceptors.response.use(function (response) {
  // 对响应数据做处理 执行成功时进入
  return response.data ? response.data : {}
  // 此处设置三元是为避免读取对象是null或者是undefined时报错
  // 增加非空判断
}, function (error) {
  // 在失败进入catch之前进行处理
  // 执行失败时执行
  // error => config => url地址  + 状态码 来判别对应的业务需求
  // 此处只进行简单的判断
  let status = error.response.status // 获取失败的状态码
  let message = '未知错误'
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '403 refresh_token未携带或已过期'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      message = 'token过期或未出'
      window.localStorage.clear() // 清空缓存或者removeItem（‘user-token’）
      router.push('/login') // this.$router.push()
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  //   Message({ message })
  Message({ type: 'warnig', message })
  //   希望 在异常处理函数中将所有的错误都处理完毕 不再进入catch  终止错误
  return new Promise(function () {}) // 终止当前的错误
})
export default axios// 导出 并引入至main.js
// **`思路-步骤`**

// - **axios 请求拦截器  => 统一注入token**
// - **axios  响应拦截器 => 成功返回 => 数据解构  =>result.data.data =>result.data**
// - **axios 响应拦截器 => 失败返回 => 进行所有错误的处理 =-> 提示消息,跳转**
// - 只有状态码 OK时 才会进入then=>状态码 200/201/204  否则 catch
// - axios => then(成功),catch(失败)
// - axios => 响应拦截器 => 成功函数 =>then  ,失败函数 => catch
// - 统一处理失败 => 拦截器里统一处理失败 => 响应拦截器 => 响应拦截器中有状态码
