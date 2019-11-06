<template>
  <div>
    <!-- 获取id的方法 -->
    <!-- 也可以挂载到data上，方便以后调用 -->
    <!-- <h1>新闻标题---{{$route.params.id}}</h1> -->
    <!-- 13  实现 新闻详情 的 页面布局 和数据渲染 -->
    <!-- 13.1 页面布局 -->
    <!-- 13.3 渲染 -->
    <div class="newsinfo-container">
      <h1 class="title">{{newsinfo.title}}</h1>
      <p class="subTitle">
        <span>发表时间：{{newsinfo.add_time|dataFormat}}</span>
        <span>点击：{{newsinfo.click}}次</span>
      </p>
      <hr />
      <!-- 内容区域 -->
      <div class="content" v-html="newsinfo.content"></div>
      <!-- 14 评论功能  我们把它封装为一个子组件，在需要用的时候导入 -->
      <!-- 14.1 单独封装一个 comment.vue 评论子组件
                1. 先创建一个 单独的 comment.vue 组件模板
                2. 在需要使用 comment 组件的 页面中，先手动 导入 comment 组件
                   + `import comment from './comment.vue'`
                3. 在父组件中，使用 `components` 属性，将刚才导入 comment 组件，注册为自己的 子组件
                4. 将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可-->
      <!-- 评论区域 -->
      <comment-box :id=this.id></comment-box>
    </div>
  </div>
</template>
<script>
// 13.2 获取数据
// 14.2 导入 评论子组件
import comment from '../subcomponents/comment.vue'
import Toast from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id, //将URL地址传来的id值，挂载到data上，方便以后调用
      newsinfo: {} //新闻对象
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("/msg" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻失败！");
        }
      });
    }
  },
  // 14.3 创建component属性，用来注册子组件的节点
  // 14.4 设置评论组件，在comment.vue中
  components:{
    "comment-box":comment
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: green;
  }
  .subTitle {
    font-size: 14px;
    color: lightgreen;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
}
</style>