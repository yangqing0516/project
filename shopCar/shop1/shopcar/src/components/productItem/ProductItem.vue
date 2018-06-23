<template>
  <div class="product">
    <ul>
      <li v-for="(item, index) in product" :key="index">
        <div class="check">
          <input type="checkbox" class="select" v-model="item.isChecked" @change="checkItem">
          <!-- <input type="button"  value="×"> -->
          <button class="delete" @click="delItem(index)">×</button>
        </div>
        <dl>
          <dt>
            <img :src="item.url" alt="">
          </dt>
          <dd>
            <h2>{{item.title}}</h2>
            <h3>{{item.describe}}</h3>
            <h5>
              <span>{{item.price}}</span>元
            </h5>
            <h4>
              <span @click="reduce(item,index)">
                <i class="icon iconfont icon-jiajian-"></i>
              </span>
              <span>{{item.count}}</span>
              <span @click="add(item,index)">
                <i class="icon iconfont icon-jiajian-1"></i>
              </span>
            </h4>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      product: {
        type: Array
      }
    },
    methods: {
      checkItem() {
        // 与父组件之间进行通讯,两者关联,正选反选进行判断
        this.$emit("update");
      },
      // 数量减
      reduce(item, index) {
        if (this.product[index].count < 2) {
          if (confirm("你确定要删除这个商品吗?")) {
            item.count = 0;
            this.product.splice(index, 1);
          }
        };
        this.product[index].count--;
        this.$emit("update")
      },
      // 数量加
      add(item, index) {
        this.product[index].count++;
        this.$emit("update")
      },
      delItem(index) {
        this.product.splice(index, 1);
        this.$emit("update")
      }
    },
    mounted() {}
  }

</script>

<style lang="scss" scoped>
  .product {
    width: 100%;
    height: auto;
    ul {
      width: 100%;
      height: auto;
      li {
        width: 100%;
        height: auto;
        display: flex;
        border-bottom: 1px solid #eeeeee;
        .check {
          flex-basis: .5rem;
          border-right: 1px solid #eeeeee;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .delete {
            width: .2rem;
            height: .2rem;
            font-weight: bolder;
          }
          .select {
            width: .2rem;
            height: .2rem;
          }
        }
        dl {
          flex: 1;
          height: auto;
          display: flex;
          padding: .05rem;
          dt {
            img {
              width: 1rem;
              height: 1rem;
            }
          }
          dd {
            padding-left: .03rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: relative;
            h2 {
              width: 1.5rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              font-weight: 800;
              font-size: .14rem;
              color: #444444;
            }
            h3 {
              font-size: .13rem;
              color: #666666;
              font-weight: 600;
            }
            h5 {
              span {
                color: #CA0C16;
                font-size: .14rem;
              }
            }
            h4 {
              position: absolute;
              right: .1rem;
              bottom: .08rem;
              &>span {
                display: inline-block;
                width: .2rem;
                height: .2rem;
                text-align: center;
                line-height: .2rem;
                border: 1px solid #444444;
                vertical-align: middle;
                .icon {
                  font-weight: 800;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
