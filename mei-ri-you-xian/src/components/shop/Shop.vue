<template>
	<div class="shop">
		<div class="city">北京</div>
		<div class="box">
			<div class="shopBox" v-for="(item,index) in data" :key="index">
				<div class="product">
					<div class="left">
						<p><input type="checkbox" v-model="item.check" @click="selectItem(item)"></p>
            </div>
            <div class="right">
              <div class="img">
                <img :src="item.image">
              </div>
              <div class="detail">
                <p>{{item.name}}</p>
                <span>${{item.vip_price_pro && ((item.vip_price_pro.price_up.price)/100).toFixed(2)}}</span>
                <div class="count">
                  <span @click.stop="reduceFn(item,index)">-</span>
                  <span>{{item.count}}</span>
                  <span @click.stop="addFn(item,index)">+</span>
							  </div>
						  </div>
					</div>
				</div>
			</div>
		</div>
		<div class="allPrice">
			<h1>
				<input type="checkbox" v-model="isSelectAll" @click="selectAll">
				<span>全选</span>
			</h1>
			<p>
				<span><em>￥</em><b>{{totalPrice}}</b></span>
				<button>结算</button>
			</p>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      totalPrice: 0,
      isSelectAll: false
    };
  },
  mounted() {
    let data = JSON.parse(window.localStorage.getItem("shop"));
    data.forEach(item => {
    	// 默认不选中
      item.check = false;
      console.log(item);
    });
    // 购物车所有的数据
    this.data = data;
    console.log(this.data)
  },
  methods: {
    reduceFn(value, ind) {
    	// 等于1的时候删掉这个商品
      if (value.count < 2) {
        if (confirm("你确定要删除这个商品吗?")) {
          value.count = 0;
          // 截取|删掉
          this.data.splice(ind, 1);
          // 将删掉的数据存储到本地
          window.localStorage.setItem("shop", JSON.stringify(this.data));
        }
      } else {
        value.count--;
      }
      this.changePrice();
    },
    addFn(value) {
      value.count++;
      this.changePrice();
    },
    selectAll() {
      this.isSelectAll = !this.isSelectAll;
      this.data.forEach(item => {
        item.check = this.isSelectAll;
      });
      this.changePrice();
      this.$forceUpdate();
    },
    selectItem(item) {
    	// 选中变为不选中，不选中变为选中
      item.check = !item.check;
      // 判断有没有全选，默认全部选中，有一个为false就不全选
      let isSelectAll = true;
      this.data.forEach(item => {
        if (!item.check) {
          isSelectAll = false;
        }
      });
      this.changePrice();
      // 如果为true全选，false不全选
      this.isSelectAll = isSelectAll;
      this.$forceUpdate();
    },
    changePrice() {
      let price = 0;
      // 遍历所有的数据，如果选中，计算总价
      this.data.forEach(item => {
        if (item.check) {
        	// 总价 = 单价 * 数量
          price += (item.vip_price_pro.price_up.price / 100).toFixed(2) * item.count;
        }
      });
      // this.totalPrice = price;
      this.totalPrice = this.format(price + "");
      console.log(this.totalPrice);
    },
    format(num) { // num 就是 price
    	// 截取小数点
      let ind = num.indexOf(".");
      console.log(ind);
      // 如果有小数点截取小数点后两位，如果没有小数点则直接使用总价
      return ind ? num.slice(0, ind + 3) : num;
    }
  }
};
</script>

<style scoped>
.shop {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.city {
  width: 100%;
  height: 0.5rem;
  border-bottom: 1px solid #cccccc;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.14rem;
}

.box {
  overflow-y: scroll;
  flex: 1;
}

.shopBox {
  padding: 0.05rem 0;
  border-bottom: 1px solid #cccccc;
}

.shopBox:last-child {
  border-bottom: 0;
}

.product {
  width: 100%;
  height: 1.16rem;
  display: flex;
  padding: 0.05rem 0;
}

.left {
  width: 0.5rem;
  height: 100%;
  border-right: 1px solid #cccccc;
  padding-left: 0.2rem;
  line-height: 1.16rem;
}

.right {
  flex: 1;
  display: flex;
  align-items: center;
}

.right .img {
  width: 0.9rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right .img img {
  width: 0.7rem;
  height: 0.7rem;
  line-height: 1.16rem;
  display: block;
}

.detail {
  flex: 1;
  height: 100%;
  line-height: 2;
  padding-left: 0.05rem;
}

.count span {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.2rem;
  border: 1px solid #cccccc;
}

.allPrice {
  width: 100%;
  height: 0.5rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #cccccc;
}

.allPrice p button {
  width: 0.9rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  background: red;
  color: #ffffff;
  font-size: 0.14rem;
  border: 0;
}

.allPrice p span {
  padding-right: 0.2rem;
}

.allPrice p span b {
  font-size: 0.18rem;
}

.allPrice h1 {
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.2rem;
}

.allPrice h1 input {
  vertical-align: middle;
}

.allPrice h1 span {
  padding-left: 0.2rem;
  font-size: 0.14rem;
}
</style>