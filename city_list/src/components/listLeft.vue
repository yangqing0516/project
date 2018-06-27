<template>
    <div class="listLeft col-xs-4 ">
        <bscroll>
          <ul class="text-center">
            <li v-for="(item,index) in leftList" :class="{'active':index==act}" :key="index" @click="getChangeRight(item,index)">
                {{item.name}} 
                <span v-show="codeArr.indexOf(item.code)!=-1" v-text="addnum(item.code)"></span>
            </li>
          </ul>
        </bscroll>
    </div>
</template>

<script>
import axios from "axios";
import bscroll from "./betterScroll"
export default {
  name: "",
  data() {
    return {
      leftList: [], //左侧城市数据
      act: 0, //活动的标签(点击选中)
      codeArr: [], //存接收过来的code码
      codeObj: [] //存接收过来的code码和选中的数量
    };
  },
  mounted() {
    this.getLeftList();
    //接收从右侧发送过来的数据
    bus.$on("backArr", res => {
      //判断数组中省级的code是否存在，不存在则添加，存在则覆盖让数组去重
      if (this.codeArr.indexOf(res.code) == -1) {
        this.codeObj.push(res);
      } else {
        this.codeObj.map((v, i) => {
          if (v.code == res.code) {
            this.codeObj.splice(i, 1, res);
          }
        });
      }
      this.codeArr.push(res.code); //把code码存到数组中
      this.codeArr = Array.from(new Set(this.codeArr)); //把数组去重由类数组转成数组
      //当选中的状态为0时,从大数组中删除并且从存放code码数组中删除
      this.codeObj.map((v, i) => {
        if (v.mun <= 0) {
          this.codeObj.splice(i, 1);
          this.codeArr.splice(this.codeArr.indexOf(v.code), 1);
        }
      });
    });
  },
  methods: {
    //span文本内容
    addnum(code) {
      let ss = 0; //设置初始值0
      this.codeObj.map((val, ind) => {
        //遍历总数据
        if (val.code == code) {
          //判断每条数据的code码和传送过来code进行比较，相等就输出
          ss = val.mun; //code码相等就把数据中选中数量赋值给ss
        }
      });
      return ss; //最后返回
    },
    //请求数据
    getLeftList() {
      axios.get("http://localhost:8080/api/list").then(res => {
        this.leftList = res.data; //把请求的数据进行赋值
        this.rightList = res.data[0]; //初次渲染右侧也需要渲染所以获取到第一组数据
        bus.$emit("startData", this.rightList); //把第一组数据发送给右侧组件
      });
    },
    getChangeRight(txt, index) {
      //每次点击把对应的内容下标传过来
      this.act = index; //点击谁给哪个下标添加活动类名
      bus.$emit("getRightList", txt); //点击获取到的内容传给右侧组件
    }
  },
  components:{
    bscroll
  }
};
</script>

<style>
.listLeft {
  padding-left: 0;
  padding-right: 0;
  height: 100%;
  overflow: hidden;
}
ul {
  width: 100%;
}
ul > li {
  line-height: 40px;
  background: #fff;
  border-radius: 5px;
  width: 80%;
  margin: 10px auto;
  position: relative;
}
ul > li span {
  position: absolute;
  top: 50%;
  right: 3px;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  border-radius: 50%;
  background: red;
  color: #fff;
}
ul > li.active {
  background: #f56;
  color: #fff;
}
</style>