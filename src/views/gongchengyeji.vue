<template>
  <div>
    <h1>工程业绩</h1>
    <h4>PROJECT PERFORMANCE</h4>

    <div class="header">
      
        <div class="header-box" v-for="item in imgList" :key='item'>
          <!--上部分图片-->
          <div>
            <h3>{{src}}</h3>
          </div>
          <!--下部分文字-->
          <div>
            <h3>{{ item.text }}</h3>
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
        {
          id: 1,
          text: "第一个项目",
          src: require('../aaa.jpg'),
        },
        
        {
          id: 2,
          text: "第二个项目",
          src: require('../aaa.jpg'),
        },
        {
          id: 2,
          text: "第二个项目",
          src: require('../aaa.jpg'),
        },
        {
          id: 2,
          text: "第二个项目",
          src: require('../aaa.jpg'),
        },
        {
          id: 2,
          text: "第二个项目",
          src: require('../aaa.jpg'),
        },
       
      
      ],

    };
  },
};
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
.header {
  width: 94%;
  height: 300px;
  margin: 0 3%;
  border: 1px solid black;
  display: flex;
   flex-direction: row;
   justify-content: space-around;
  flex-wrap:  wrap ;
}
.header-box{
  justify-content: center;
  flex: 1;
  height: 300px;
  
  border: 1px solid black;

}
</style>