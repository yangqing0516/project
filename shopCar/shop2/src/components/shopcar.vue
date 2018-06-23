<template>
  <div class="wraper">
    <div class="p10">
      <div class="toggle">
        <label class="toggle-checkbox">
          <input type="checkbox" id="checkall" v-model="checkall" @change="checkallitem">
          <div class="track track-icon float-left mr15">
            <span class="glyphicon glyphicon-ok f14"></span>
          </div>
          <span v-text="checkvalue"></span>
        </label>
      </div>
      <hr>
    </div>
    <shopcarItem :productList="productList" @update="onUpdate"></shopcarItem>
    <div>
      <span class="float-left">合计数量：{{totle}}</span>
      <span class="float-right">合计金额:{{summary}}</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import shopcarItem from "./shopcarItem.vue"
export default {
  name: "",
  data() {
    return {
      totle: 0,
      summary: 0,
      checkvalue: "全选",
      checkall: false,
      productList: []
    }
  },
  mounted() {
    this.getProductList();
  },
  watch: {
    checkall(val) {
      this.checkvalue = val == true ? "反选" : "全选";
    }
  },
  methods: {
    onUpdate() {
      let temp = [];
      this.productList.map(item => {
        if (item.isCheck) {
          temp.push(item);
        }
      });
      if (temp.length == this.productList.length) {
        this.checkall = true;
      } else {
        this.checkall = false;
      }
      this.calculate();
    },
    calculate() {
      let tot = 0;
      let sum = 0;
      this.productList.map(item => {
        if (item.isCheck) {
          tot += item.count;
          sum += item.count * item.price
        }
      });
      this.totle = tot;
      this.summary = sum;
    },
    getProductList() {
      axios.get("http://localhost:8080/product").then(res => {
        this.productList = res.data;
        this.calculate();
      });
    },
    checkallitem() {
      this.productList.map(item => {
        item.isCheck = this.checkall;
      });
      this.calculate();
    }
  },
  components: {
    shopcarItem
  }
}

</script>
<style>


</style>
