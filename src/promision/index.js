import router from '../router'
// 设置前置路由导航守卫
// 当路由发生变化时  这个方法里的回调函数就会执行
// to 即将进入的目标路由 from 当前导航正要离开的路由 next()必须执行 否则就会一直等待 死在跳转的的位置
// next()通过 next(false)中断当前的导航  next(地址)强制跳转（比如用来设置没有权限的时候跳转至登陆页）
router.beforeEach(function (to, from, next) {
  //   console.log(to)
  //   next()
  if (to.path.startsWith('/home')) {
    // 此处用到了（检索字符串是否以该内容开头）的方法 与其相反的是endwith方法
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
// https://www.cnblogs.com/WQLong/p/8135553.html
// 这里的思路是 设置路由守卫 vuerouter的钩子函数
// 如果要去的路径是该地址 => 在有token的情况下 放行通过 否则使其到登陆页
