<template>
  <ul>
    <li class="mb15 bdb1 p10" v-for="(product,index) in productList" :key="index">
      <span class="glyphicon glyphicon-remove delete" @click="deleteproduct(index)"></span>
      <div class="toggle">
        <label class="toggle-checkbox">
          <input type="checkbox" v-model="product.isCheck" @change="checkitem">
          <div class="track track-icon float-left mr15">
            <span class="glyphicon glyphicon-ok f14"></span>
          </div>
        </label>
      </div>
      <dl class="clearfix">
        <dt class="col-xs-4 text-center">
          <img :src="product.url" alt="">
        </dt>
        <dd class="col-xs-8">
          <h4 class="text-nowrap" v-text="product.name"></h4>
          <p class="text-orange mt10 text-nobr" v-text="product.describe"></p>
          <div class="mt10">
            <div class="float-right">
              <span class="p10" @click="minus(index)">-</span>
              <span v-text="product.count"></span>
              <span class="p10" @click="plus(index)">+</span>
            </div>
            价格:{{product.price}}元
          </div>
        </dd>
      </dl>
    </li>
  </ul>
</template>
<script>
export default {
  name: "",
  props: {
    productList: {
      type: Array
    }
  },
  data() {
    return {}
  },
  methods: {
    deleteproduct(index) {
      this.productList.splice(index, 1);
      this.$emit("update");
    },
    minus(index) {
      if (this.productList[index].count < 1) return;
      this.productList[index].count--;
      this.$emit("update");
    },
    plus(index) {
      this.productList[index].count++;
      this.$emit("update");
    },
    checkitem() {
      this.$emit("update");
    }
  }
}

</script>
<style scoped>
dt img {
  width: 100%;
  max-width: 120px;
}

li {
  position: relative;
}

.delete {
  position: absolute;
  right: 10px;
  top: 10px;
}

</style>
