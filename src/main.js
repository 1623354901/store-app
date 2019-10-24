//入口文件

//1、 将APP.vue渲染到html中：使用render函数
// 1.1 引入vue
import Vue from 'vue'
// 1.2 导入App.vue根组件
import app from './App.vue'

// 2、顶部区域 
// 2.1 按需导入 Mint-Ui组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
// 2.1在app.vue中加入代码
// 3、底部区域
// 3.1 使用MUI中的tabber
import './lib/mui/css/mui.min.css'
// 3.2 在app.vue中将tabber的代码弄过来



// 1.3 创建一个 vm 实例,在index.html中创建div#app
var vm =new Vue({
  el:'#app',
  render:c=>c(app)
})
// 到这，若App.vue中的内容渲染到页面，即成功