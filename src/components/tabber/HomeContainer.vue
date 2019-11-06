<template>
  <div>
    <!-- 6.2 将代码放到home div部分 -->
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.Random.increment()">
        <img :src="item.Random.image" alt />
      </mt-swipe-item>

      <!-- <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
    <!-- 8 六宫格 -->
    <!-- 8.2 MUI中的grad -->
    <!-- 9.改造新闻资讯的路由连接 点击进入新闻列表-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <!-- 9.2 将a href 改为router-link to,并将to后面改为新闻资讯路由地址 -->
        <!-- 9.3 在conponents 文件夹下新建文件夹news，并新建NewList 组件 -->
        <!-- 9.4 在router.js中添加路由 -->
        <router-link to="/home/newslist">
          <img src="../../img/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu5.png" alt />
          <div class="mui-media-body">视频分区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// 7.2 在相应组件内(HomeContainer)，使用 vue-resource 的this.$http.get 获取数据，箭头函数，将数据返回给result函数的参数
// 7.3 在生命周期created()阶段调用getLunbotu函数
// 7.4 在函数中加入判断
// 7.4 引入 Toast 提示框
// 7.5 在组件中，使用 v-for 将数据渲染到页面
// 由于没有接口，使用mock模拟数据
import{Toast} from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的数组
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("/msg1").then(result => {
        console.log(result);
        if (result.body.status === 0) {
          this.lunbotuList = result.body.message;
        } else {
          Toast("加载轮播图失败。。。")
        }
      });
    }
  }
};
</script>
    <!-- 6.3 在home页面为轮播图设置高度,样式 -->
<style lang="scss" scorpd>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: lightblue;
    }
    &:nth-child(2) {
      background-color: lightgreen;
    }
    &:nth-child(3) {
      background-color: lightyellow;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>