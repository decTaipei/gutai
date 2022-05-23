<template>
  <div>
    <!--工程检测-->
    <div class="gcjc">
      <h1>工程检测</h1>
      <h4>ENGINEERING TEST</h4>
      <p>
        工程检测介绍：工程检测是为了保障已建、在建、将建的建筑工程安全，在建设全过程中对与建筑物有关的地基基础、建筑材料、施工工艺、建筑结构进行测试的一项重要工作。
      </p>
    </div>
    <!--工程检测结构项目-->
    <div>
      <span>工程检测结构项目</span>
      <hr />
      <div class="gcjc-header">
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>

        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
        <div class="gcjc-header-box">
          <img src="" />
          <p>123</p>
        </div>
      </div>
      <span>工程检测结构内容</span>
      <hr />

      <p>
        1．见证取样（通用）：水泥物理力学性能检验；钢筋（含焊接与机械连接）力学性能检验；砂、石常规检验；混凝土、砂浆检验；简易土工试验；混凝土掺加剂检验；预应力钢绞线、锚夹具性能；沥青、沥青混合料检验等。
      </p>
      <p>
        2．地基基础工程检测：地基及复合地基承载力静载检测；桩基承载力检测；桩身完整性检测；锚杆锁定力检测等。
      </p>
      <p>
        3．主体结构工程现场检测：混凝土、砂浆、砌体现场检测；钢筋保护层厚度检测；混凝土构件结构性能检测；后置埋件力学性能检测等。
      </p>
      <p>
        4．钢结构工程检测：钢结构材料及焊接质量无损检测；钢结构防腐及防火涂装检测；钢结构节点、机械连接用紧固标准件及高强度螺栓力学性能检测；钢结构变形检测等。
      </p>
      <p>5．室内环境质量检测：氡、甲醛、氨、苯、TVOC五项指标等。</p>
      <p>
        6．市政桥梁检测：桥梁结构定期检测；桥梁结构特殊检测；桥梁施工监测及运营监测等。
      </p>
      <p>7．市政管道检测：管道破损检测；管道渗漏检测；管道疏通检测等。</p>
      <p>8．基坑监测：基坑支护监测；基坑施工监测等。</p>
    </div>
    <!--专业设备模块-->
    <jianceshebei></jianceshebei>
  </div>
</template>

<script>

import Jianceshebei from '../components/jianceshebei.vue'
export default {
  components: {
    Jianceshebei
  }
}
</script>

<style scoped>
.gcjc {
  width: 100%;
  height: 300px;
}
h1 {
  text-align: center;
  color: blue;
}
h4 {
  text-align: center;
  color: gray;
}
p {
  margin-left: 200px;
}
span {
  margin: 0px 90px;
}
hr {
  margin: 0px 90px;
}

/*工程检测样式*/
.gcjc-header {
  width: 90%;
  margin: 20px 5%;
  margin-top: 20px;
  display: inline-block;
}
.gcjc-header-box {
  height: 300px;
  width: 18%;
  border: 1px solid black;
  float: left;
  margin-right: 20px;
  margin-top: 30px;
}
</style>