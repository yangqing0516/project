<template>
    <div class="wrapper" ref="wrapper">
      <ul class="contents">
        <li v-for="(items, index) in list" :key="index">{{items.name}}</li>
      </ul>
      <p><i class="icon iconfont icon-gengduoneirong"></i></p>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      require: true,
      scrollbars: true
    }
  },
  methods: {
   
  },
  mounted() {
    setTimeout(() => {
      const ul = document.querySelector(".contents");
      const content = ul.childNodes;
      const newContent = [...content];
      let num = 0;
      newContent.map(ele =>{
      	num += ele.clientWidth;
      });
      ul.style.width = num + "px";
      new BScroll('.wrapper', {
      	scrollX: true,
      	scrollY: false
      });
    }, 1000);
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 0.45rem;
  overflow: hidden;
  display: flex;
  overflow-x: scroll;
  justify-content: space-between;
}
p {
  width: 0.45rem;
  height: 0.45rem;
  line-height: 0.5rem;
  text-align: center;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
}
p .icon {
  color: #aeaeae;
}
.contents {
  flex: 1;
  height: 0.45rem;
  display: flex;
  align-items: center;
}
.contents li {
  flex-shrink: 0;
  padding: 0.05rem;
}
</style>
