<template>
  <div>{{ desc }}</div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          id: 1,
          text: "第一个项目",
          desc: "123",
        },
        {
          id: 2,
          text: "第二个项目",
          desc: "456",
        },
        {
          id: 3,
          text: "第三个项目",
          desc: "789",
        },
        {
          id: 4,
          text: "第四个项目",
          desc: "555",
        },
      ],
      id: "",
      desc: "",
    };
  },

  created() {
    this.init()
  },

  methods: {
    init() {
      console.log(this.$route, 'this.$route')
      this.id = this.$route.query.id;
      this.imgList.forEach((item) => {
        if (item.id == this.id) {
          this.desc = item.desc;
        }
      });
    },
  },
};
</script>

<style scoped>
</style>