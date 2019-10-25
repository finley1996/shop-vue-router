<template>
  <div id="box">
    <h1 class="home">商城主页</h1>
    <ul>
      <li v-for="item in product_list" :key="item.productId">
        <div v-html="item.productImg"></div>
        <p>{{item.brandName}}</p>
        <b>{{item.productPrice}}</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn" @click="detail(item.productId)">查看详情</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { axios_show } from "@/api";
//mport { log } from 'util';
export default {
  data() {
    return {
      product_list: []
    };
  },
  created() {
    axios_show().then(res => {
      this.product_list = res.data.result;
      this.product_list.forEach(item => {
        let reg = /\\/g;
        item.productImg = item.productImg.replace(reg, "");
      });
    });
  },
  methods: {
    detail(id) {
      this.$router.push({ path: "detail", query: { id: id } });
    }
  }
};
</script>
<style>
ul {
  /* display: flex; */
  list-style: none;
  overflow: hidden;
}
li {
  width: 300px;
  float: left;
  padding: 30px;
  box-shadow: 10px 10px 10px #eee;
}
.btn {
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
