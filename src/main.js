//入口文件

//1、 将APP.vue渲染到html中：使用render函数
// 1.1 引入vue
import Vue from 'vue'
// 1.2 导入App.vue根组件
import app from './App.vue'

// 2、顶部区域 
// 2.1 按需导入 Mint-Ui组件
import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
// 2.1在app.vue中加入代码
// 3、底部区域
// 3.1 使用MUI中的tabber
import './lib/mui/css/mui.min.css'
// 3.2 在app.vue中将tabber的代码弄过来
// 3.3 更改底部内容和图标，扩展图标需要引入相应的css文件和ttf文件
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

// 4、配置路由，配置底部链接
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 4.1 导入自己的router.js模块
import router from './router.js'
// 6.首页项目轮播图
// 6.1 用mintUI中的swipe实现，引入，和header放在一起
// 6.2 将代码放到home div部分
// 在home页面为轮播图设置高度

// 7.加载首页轮播图数据
// 7.1 获取数据，使用vue-resource
import Vueresource from 'vue-resource'
Vue.use(Vueresource)
// 7.2 在相应组件内(HomeContainer)，使用 vue-resource 的this.$http.get 获取数据
// 下面是全局配置根路径的方法
// Vue.http.options.root='http://vue.studyit.io'
import Mock from 'mockjs'
import mockdata from './mock'
// 11.2 导入格式化时间的插件 moment
import moment from 'moment'
// 11、定义全局过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  // 11.1安装moment
  return moment(dataStr).format(pattern)
})


// 1.3 创建一个 vm 实例,在index.html中创建div#app
var vm =new Vue({
  el:'#app',
  render:c=>c(app),
  // 4.2 挂载路由对象到vm实例上
  router
})
// 到这，若App.vue中的内容渲染到页面，即成功