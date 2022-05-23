<template>
  <div>
    <!--ui轮播图-->
    <div class="block">
      <el-carousel height="750px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img class="carouselImg" :src="item.src" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--ui 中部左右布局-->
    <div>
      <el-container>
        <el-aside width="37%"><img src="" />image</el-aside>
        <el-main width="57%">
          <h1>关于固泰</h1>
          <p>ABOUT US</p>
          <p>
            浙江固泰工程检测科技有限公司成立于2014年，注册资本壹仟万元整，公司所在地为浙江省宁波市国家高新区，是一家具备
          </p>
          <p>独立法人，且拥有独立第三方检测实验室的一家综合型检验检测机构。</p>
          <p>
            浙江固泰工程检测科技有限公司坚持：科学、公正、准确、及时的质量方针，严格执行和有效实施质量管理体系，对出具的
          </p>
          <p>
            检测数据及报告承担法律责任。本公司本着科学、严谨的精神，不断提升自身技术能力及服务水平，以公平、公正的态度为广大
          </p>

          <p>政企客户提供强有力的技术服务。</p>
        </el-main>
      </el-container>
    </div>

    <!--经营范围-->
    <div class="jyfw">
      <div class="jyfw-left">
        <span class="jyfw-left-zuo">固泰经营范围 </span>
        <span class="jyfw-left-zuo">SERVICE PROJECT </span>
        <p>
          经营范围为：见证取样检测（通用）（建筑材料、市政材料、节能材料、装修材料）、主体结构工程现场检测、钢结构工程
        </p>
        <p>
          检测、地基基础工程检测、建筑结构可靠性鉴定、市政桥梁检测、CCTV管道检测、房屋安全鉴定、建筑节能、建筑门窗幕墙检
        </p>
        <p>
          测、建筑室内环境质量检测、水利工程质量检测、公路水运工程检测等一系列工程类检测鉴定业务。并逐步发展壮大，扩展其他
        </p>
        <p>领域的检测业务。</p>
      </div>
      <div class="jyfw-right">
        <button>1</button>
        <button>1</button>
        <button>1</button>
      </div>
    </div>
    <!--仪器仪表范围-->
    <div class="yqyb">
      <h1>我们的仪器＆设备</h1>
      <p>OUR EQUIPMENT</p>
      <div class="tu">
        <!--单个图片内容-->
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
        <div class="img">
          <img src="../aaa.jpg" alt="无法显示图片" />
          <p>12</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { src: require('../aaa.jpg') },
        { src: require('../aaa.jpg') },
        { src: require('../aaa.jpg') },
        { src: require('../aaa.jpg') },
        { src: require('../aaa.jpg') },
      ],
    };
  },
};
</script>



<style scoped>
.carouselImg {
  width: 100vw;
}
/*轮播图样式*/
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */

/*中部左右布局样式*/
.el-aside {
  margin-left: 3%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;

  line-height: 20px;
  margin-right: 3%;
}
.el-main h1 {
  font-size: 36px;
  color: blue;
}
.el-aside,
.el-main {
  height: 600px;
}
/*经营范围样式*/
.jyfw {
  height: 600px;
  background-color: green;
  margin-top: 20px;
  margin: 0px 3%;
}
.jyfw-left {
  width: 50%;
  float: left;
}
.jyfw-right {
  width: 50%;
  float: right;
}
.jyfw-left-zuo {
  font-size: 32px;
  color: black;
}
.jyfw-left-you {
  font-size: 32px;
  color: blue;
}
/*仪器仪表范围样式*/
.yqyb {
  height: 900px;
  width: 94%;
  margin: 0 3%;
  background-color: cadetblue;
}

.yqyb h1,
p {
  text-align: center;
}
.yqyb .img img {
  height: 80%;
  width: 200px;
}
.tu {
  margin: 10px 10%;
}
.img {
  float: left;
  width: 14%;
  margin: 40px 40px;
}
.yqyb .img p {
  height: 20%;
  width: 200px;
  background-color: white;
  margin: 0;
  font-size: 22px;
}
</style>