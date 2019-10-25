<template>
  <div class="show">
     <h1 class="home">商品详情</h1> 
    <p>{{details.productName}}</p>
    <div v-html="details.productImg"></div>
    <div v-html="details.bjShop"></div>
    <button class="btn" @click="back">返回</button>
  </div>
</template>
<script>
import { axios_detail } from "@/api";
export default {
  data() {
    return {
      details: {}
    };
  },
  created() {
    const _this = this;
    const id = this.$route.query.id;
    axios_detail(id).then(res => {
      _this.details = res.data.result[0];
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.show{
    box-shadow: 10px 10px 10px #eee;
}
.btn{
    border: 0px;
    padding: 3px;
    border-radius: 5px;
    color: whitesmoke;
    background-color: tomato;

}
.home {
  text-align: center;
  color: tomato;
  text-shadow:5px 2px 6px #ccc;
}
</style>