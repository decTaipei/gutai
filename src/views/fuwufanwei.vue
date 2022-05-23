<template>
  <div class="fuwufanwei">
    <div class="header">
      <div class="header-qiehuan">
        <router-link to="/fuwufanwei/gongchengjiance">
          <div class="qiehuan-box">
            <img src="" />
            <h2>工程检测</h2>
          </div>
        </router-link>
      </div>
      <div class="header-qiehuan">
        <router-link to="/fuwufanwei/anquanjianding">
          <div class="qiehuan-box">
            <img src="" />
            <h2>房屋安全鉴定</h2>
          </div>
        </router-link>
      </div>
      <div class="header-qiehuan">
        <router-link to="/fuwufanwei/jishuzixun">
          <div class="qiehuan-box">
            <img src="" />
            <h2>技术咨询</h2>
          </div>
         
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 90%;
  margin: 0px 5%;
  display: inline-block;
  display: inline-block;
}
.header-qiehuan {
  width: 30%;
  height: 300px;
  border: 1px solid black;
  float: left;
  margin: 0px 20px;
}
</style>