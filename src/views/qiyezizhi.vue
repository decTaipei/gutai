<template>
    <div>
      <h1>企业资质</h1>
      <h4>ENTERPRISEP QUALIFICATION</h4>
       <div class="qyzz-header">

        <div class="qyzz-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="qyzz-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="qyzz-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="qyzz-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="qyzz-header-box">
          <img src="" />
          <p>123</p>
        </div>


    </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
  color: blue;
}
h4 {
  text-align: center;
  color: gray;
}
/*企业资质样式*/
.qyzz-header {
  width: 90%;
  margin: 20px 5%;
  margin-top: 20px;
  display: inline-block;
  
}
.qyzz-header-box {
  height: 300px;
  width: 18.5%;
  border: 1px solid black;
  float: left;
  margin-right: 20px;
  margin-top: 30px;
}
.qyzz-header-box{
    position: relative;
}
.qyzz-header-box p{
 position: absolute;
 top: 264px;
 background-color: blueviolet;
 text-align: center;
 
}
</style>