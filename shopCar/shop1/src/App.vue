<template>
  <div id="app">
    <div class="header">我的购物车</div>
    <div class="section">
      <ProductItem :product="product" @update="onUpdate"></ProductItem>
    </div>
    <div class="footer">
      <p>
        <label for="checkAll" v-text="checkValue"></label>
        <input id="checkAll" type="checkbox" v-model="checkAll" @change="checkAllItem">
      </p>
      <p>
        <strong>
          <span>数量:</span>
          <em>{{allCount}}</em>
        </strong>
        <i>
          <span>总价:</span>
          <em>￥{{totalPrice}}</em>
        </i>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import ProductItem from "./components/productItem/ProductItem"
  export default {
    name: 'App',
    data() {
      return {
        allCount: 0,
        totalPrice: 0,
        product: [],
        checkValue: "全选",
        checkAll: false
      }
    },
    components: {
      ProductItem
    },
    watch: {
      // 监听选中||非选中,选中则是全选,反之是反选
      checkAll(val) { // 第一个旧值,第二个新值,判断新值val
        this.checkValue = val === true ? "反选" : "全选";
      }
    },
    methods: {
      // 选中所有的产品
      checkAllItem() {
        this.product.map(item => {
          // 选中的商品v-model与全选中的v-model进行关联，全选时全部选中，反选是全不选
          item.isChecked = this.checkAll;
          this.countResult();
        })
      },
      onUpdate(data) {
        // 判断全选还是非全选
        let temp = [];
        this.product.map(item => {
          // 将选中的产品,存放到数组中
          if (item.isChecked) {
            temp.push(item)
          }
        });
        // 判断添加到temp中的长度,如果与product的长度相等,则是全选,相反则是不全选
        if (temp.length === this.product.length) {
          this.checkAll = true;
        } else {
          this.checkAll = false;
        }
        this.countResult();
      },
      countResult() {
        let num = 0;
        let sum = 0;
        // 遍历所有的数据，并且判断选中的计算，没有选中的不计算
        this.product.map(item => {
          if (item.isChecked) {
            num += item.count;
            sum += item.count * item.price;
          }
        })
        this.allCount = num;
        this.totalPrice = this.format(sum + '');
      },
      // 截取小数点
      format(num) {
        // 截取
        let ind = num.indexOf('.');
        console.log(ind)
        // 如果有小数点截取小数点后两位，如果没有小数点则直接使用总价
        return ind ? num.slice(0, ind + 3) : num;
      }
    },
    mounted() {
      axios.get('/shopData').then(res => {
        this.product = JSON.parse(res.data);
        this.countResult()
        console.log(this.product)
      }).catch(err => {
        console.log('error')
      })
    }
  }

</script>
<style lang="scss">
  @import url("../static/iconshop/font_671215_rt68p76clms/iconfont.css");
  @import url("../static/css/style");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header {
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    font-size: .14rem;
    border-bottom: 1px solid #eeeeee;
  }

  .section {
    flex: 1;
    overflow-y: scroll;
  }

  .footer {
    width: 100%;
    height: .5rem;
    border-top: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    padding: 0 .05rem;
    align-items: center;
    p {
      &:nth-of-type(1) {
        display: flex;
        input {
          width: .2rem;
          height: .2rem;
          margin-left: .03rem;
        }
      }
      &:nth-of-type(2) {
        strong {
          margin-right: .2rem;
        }
      }
    }
  }

</style>
