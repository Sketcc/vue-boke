<template>


</template>

<script>
import Loading from "../components/loading";

export default {
  data() {
    return {
      isLoading: false //是否正在远程获取数据
    };
  },
  components: {
    Loading
  },
  methods: {
    createNavList() {
      this.isLoading = true; //正在获取
      this.$http.post("/index/getBlogList").then(res => {
        console.log(res);
        this.isLoading = false; //获取成功
      });
    }
  },
  created() {
    this.createNavList();
  }
};
</script>

<style scoped>
</style>