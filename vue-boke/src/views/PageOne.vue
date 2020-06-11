<template>
<div>
      <div id="nav">
      <div class="left">
        <div class="head">
          <img src="../assets/picture/20205121.jpg" alt="" />
          <h4>我们的博客</h4>
        </div>
      </div>
      <div class="right">
        <div class="nava">
          <ul>
            <router-link tag="li" to="/home">首页</router-link>
            <router-link tag="li" to="/Learn">学习</router-link>
            <router-link tag="li" to="/Community">留言</router-link>
            <router-link tag="li" to="/About">关于</router-link>
            <router-link tag="li" to="/Mygit">GitHub</router-link>
          </ul>
          <div class="logo">
            <img src="../assets/picture/20205122.jpg" alt="图片" />
          </div>
        </div>
        <div class="content">
        <router-view />
        </div>
      </div>
    </div>
    <Loading :show="isLoading"/>
    </div>
</template>

<script>
import Loading from '../components/loading'
export default {
    data(){
     return {
       navList:[],
       isLoading:false, //是否正在远程获取数据
     }     
   },
   components:{
     Loading,
   },
   methods:{
      createNavList() {
        this.isLoading = true;  //正在获取
        this.$http.post('/index/getIndexTabs').then(res => {
          console.log(res)
          this.isLoading = false   //获取成功
        })
      }
   },
   created() {
    //  this.createNavList()
   }
 }

</script>

<style scoped>

#nav {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

/* 左边内容展示区域 */
.left {
  position: fixed;
  width: 35%;
  height: 100%;
  left: 0;
  border-right:1px solid #d6d6d6;
    /* box-shadow: 0px 3px 10px rgb(122, 122, 122) ; */
    background-color: #fff;

}
.left .head {
  position: absolute;
  height: 100px;
  width: 100px;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  /* background: #2c3e50; */
  /* border-radius: 50%; */
}

.left .head img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-bottom: 6px;
  cursor: pointer;
}


/* 右边内容展示区域 */
.right {
  position: absolute;
  right: 0;
  width: 65%;
  height: 100%;
}
.right .nava {
  width: 100%;
  border-bottom: 1px solid #d6d6d6;
  position: fixed;
  background-color: #fff;
  z-index: 1;
  box-shadow: 3px 0px 10px rgb(122, 122, 122) ;
}
.right .nava ul {
  display: flex;
  height: 50px;
  align-items: center;
}
.right .nava ul li {
  height: 100%;
  line-height: 50px;
  margin-right: 20px;
  margin-left: 5px; 
  display: inline-block;
}
.right .nava ul li:hover {
  border-bottom: 2px solid black;
  color: #2c3e50;
  cursor: pointer;
}
.right .logo {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 650px;
  top: 14px;
}
.right .logo img {
  width: 100%;
  height: 100%;

}

.right .nava ul li.active-exact {
  font-weight: bold;
    border-bottom: 2px solid black;

}


#app .content {
  margin-left: 6px;
  position: absolute;
  top: 55px;
  height: 88%;
}
</style>