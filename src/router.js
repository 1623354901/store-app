import VueRouter from 'vue-router'
// 5.3 导入对应的路由组件
import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import ShopContainer from './components/tabber/ShopContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
// 9.4 导入组件，添加路由
import NewsList from './components/news/NewsList.vue'
// 12.2 导入newsinfo组件，添加路由
import newsinfo from './components/news/newsinfo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由对象
    // 5.4 配置路由规则
    {path:'/',redirect:'/home'},
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopContainer },
    { path: '/search', component: SearchContainer },
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsinfo',component:newsinfo}
    

  ],
  // 4.4 
  linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router