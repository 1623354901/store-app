<template>
  <div>
    <!-- 10 绘制新闻资讯页面-->
    <!-- 10.1  绘制页面 样式 使用 MUI 中的media-list -->
    <!-- 10.3  渲染到页面 -->
    <!-- 12 实现 新闻资讯列表 点击跳转到新闻详情  -->
    <!-- 12.1 把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的Id标识符 -->
    <!-- 12.2 创建newsinfo组件，配置路由 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id1">
        <router-link to="'/home/newsinfo/'+item.id">
          <img
            class="mui-media-object mui-pull-left"
            src="https://www.gravatar.com/avatar/b2df97999f948c7046c6c8d71b2424a4?s=80&d=identicon"            
          />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <!-- 11.3 使用定义好的dataFormat -->
              <span>发表时间：{{item.time|dataFormat}}</span>
              <span>点击：{{item.num}}</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img
            class="mui-media-object mui-pull-left"
            src="https://www.gravatar.com/avatar/b2df97999f948c7046c6c8d71b2424a4?s=80&d=identicon"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://www.gravatar.com/avatar/b2df97999f948c7046c6c8d71b2424a4?s=80&d=identicon"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://www.gravatar.com/avatar/b2df97999f948c7046c6c8d71b2424a4?s=80&d=identicon"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// 10.2 使用vue-resource 获取数据，我们获取mock假数据
import{Toast} from "mint-ui";
export default {
  data(){
    return{
      newslist:[]
    }
  },
  created(){
    this.getNewsList();
  },
  methods:{
    getNewsList(){//获取新闻列表
      this.$http.get('/msg1').then(result=>{
        if(result.body.status===0){
          // 如果没有失败，把数据保存到data上
          this.newslist=result.body.message;
        }else{
          Toast('获取新闻列表失败')
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226a;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>