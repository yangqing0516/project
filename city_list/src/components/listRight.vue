<template>
     <div class="listRight col-xs-8">
       <bscroll>
         <div>
          <div class="cityRight" v-for="(item,index) in rightList.cities" :key="index">
            <h5 class="p5 bg-info text-center">{{item.name}}</h5>
            <ol>
                <li 
                v-for="(val,ind) in item.cities" 
                :key="ind" class="text-center" 
                @click="addCla(val.code,rightList.code,rightList.cities)"
                :class="{'act':isCheck.indexOf(val.code)!=-1}">
                    <span>{{val.name}}</span>
                </li>
            </ol>
        </div></div>
       </bscroll>
      </div>
</template>

<script>
import bscroll from "./betterScroll"
export default {
  data() {
    return {
      rightList: [],//存右侧数据
      isCheck: [],//存自身code码
    };
  },
  mounted() {
    //首次进入页面渲染的数据
    bus.$on("startData", res => {
      this.rightList = res;
    });
    //点击时渲染的数据
    bus.$on("getRightList", res => {
      this.rightList = res;
    });
  },
  methods: {
    //点击时获取到自身的code,省的code,省的所有数据
    addCla(Vcode, Icode, cities) {
      let sum=0;
      //判断数组中是否存在，不存在则添加，存在则删除
      if (this.isCheck.indexOf(Vcode) == -1) {
        this.isCheck.push(Vcode);
      } else {
        this.isCheck.splice(this.isCheck.indexOf(Vcode), 1);
      }
      //把获取到的数据去重
      this.isCheck = Array.from(new Set(this.isCheck));
      //遍历省数据
      cities.map((val, index) => {
        //遍历市的数据
        val.cities.forEach(file => {
          //县数据中判断一下数组中是否存在数据中的code,存在了就++  
          if (this.isCheck.indexOf(file.code)!=-1) {
              sum++;
          }
        });
      });
      //最后把得到的数据code和数量发送给左侧的组件
      bus.$emit("backArr", {code:Icode,mun:sum});
    }
  },
  components:{
    bscroll
  }
};
</script>

<style scoped>
.listRight {
  height: 100%;
  overflow: hidden;
  padding: 0;
}
.listRight ol {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.listRight ol li {
  width: 33.33%;
  height: 40px;
  padding: 5px;
}
.listRight ol li.act span {
  background: #f56;
  color: #fff;
}
.listRight ol li span {
  width: 100%;
  height: 100%;
  display: block;
  background: #fff;
  border-radius: 5px;
  line-height: 30px;
}
</style>