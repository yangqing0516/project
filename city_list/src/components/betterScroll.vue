<template>
    <div class="scroll-wrap" ref="scrollWrap">
        <slot></slot>
    </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "",
  props: ["wraper"],
  mounted() {
    new Bscroll(this.$refs.scrollWrap, {
      click: this.isMoile()
    });
  },
  methods: {
    isMoile() {
      return document.body.width > 414 ? fasle : true;
    }
  }
};
</script>

<style scoped>
.scroll-wrap{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>