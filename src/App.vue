<template>
  <div id="app">
    <div class="header">
      <span class="left">logo</span>
      <div class="right">
        <router-link to="/home">首页</router-link>
        <router-link to="/fuwufanwei">服务范围</router-link>
        <router-link to="/qiyezizhi">企业资质</router-link>
         <router-link to="/gongchengyeji">工程业绩</router-link>
        <router-link to="/zhuanyeshebei">专业设备</router-link>
        <router-link to="/lianxi">联系我们</router-link>
      </div>
    </div>

     <router-view />
     
     <div>
       这里是底部栏
     </div>
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0px;
  height: 0px;
}
.header {
  height: 200px;
  width: 100%;
  background-color: grey;
}
.left {
  float: left;
}
.right {
  float: right;
  margin-top: 20px;
  margin-right: 250px;
}
a {
  text-decoration: none;
  font-size: 22px;
  margin: 10px 20px;
  color: white;
}
a:hover {
  color: orange;
}
.home{
  height: 600px;
  width: 100%;
  background-color: green;
}
</style>

