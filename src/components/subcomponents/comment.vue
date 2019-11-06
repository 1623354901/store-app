<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要输入的内容，少于120字" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <!-- 14.8 使用v-for 渲染 -->
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dataFormat}}
        </div>
        <div class="cmt-body">
          {{item.content==='underfined'?'此用户很懒，没有评论':item.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      comments:[],
      pageindex:1//默认展示第一页数据
    }
  },
  created(){
    this.getComment()
  },
  methods:{
    getComment(){
      //14.6 这里需要父组件的id,传过来。
      // 14.6.1 newsinfo中绑定id
      // 14.6.2 子组件中使用props定义id
      // 14.6.3 绑定id
      // 14.7 页码在data上定义
      this.$http.get("/msg1"+this.id+"?pageindex="+this.pageindex).then(result=>{
        if(result.body.status===0){
          // this.comments=result.body.message
          // 每当获取新数据的时候，不要把老数据清空，应该是老数据拼接上新数据。
          this.comments=this.comments.concat(result.body.message)
        }else{
          Toast("获取评论失败")
        }
      })
    },
    getMore(){
      this.pageindex++;
      // this.getComment();
      console.log("ok")
    }
  },
   // 14.6.2 子组件中使用props定义id
   props:["id"]
}
</script>
<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 18px;
  }
  textarea{
    font-size: 14px;
    height: 45px;
    margin: 0;
  }
  .cmt-list{
    margin: 10px 0;
    .cmt-item{
      .cmt-title{
        background-color: #ccc;
        line-height: 30px;
        font-size: 14px;
      }
      .cmt-body{
        line-height: 35px;
        text-indent: 2em; 
      }
    }
  }
}
</style>