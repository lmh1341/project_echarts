<template>
  <div >
    <Header></Header>
    <div class="box">
      <div class="nav">
        <ul>
          <li><router-link to="/aboutschool">四川高校分布</router-link></li>
          <li><router-link to="/people">历年高考人数分析</router-link></li>
          <li><router-link to="/sousuo">学校查询</router-link></li>
        </ul>    
      </div>
      <div class="main-box">
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default{
  components:{
    Header,
  }
}

</script>

<style lang="less" scoped>
.box{
  display: flex;
  height: 700px;
  overflow: hidden;
  
}
.nav{
  flex: 1;
  // height: 100%;
  background-color: #eee;
  align-items: stretch;
  border-right:1px solid #999;
  padding-top:50px ;
}
.main-box{
  flex: 5;
}

.nav>ul>li{
  height: 30px;
  list-style: none;
  border-bottom:1px solid #ccc;
  margin: 10px 0;
}
.nav>ul>li>a{
  // font-style: oblique;
  text-decoration: none;
  text-align: center;
  display: block;
 color: #333;
  height: 30px;
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
}
.nav>ul>li:hover{
background-color:#999;
}
.nav>ul>li>a:hover{
  color: #fff;
}
</style>
