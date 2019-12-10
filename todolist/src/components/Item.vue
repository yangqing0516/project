<template>
    <li class="item">
        <input :checked="what" class="checkbox" type="checkbox" name="" id="" @change="change">
        <p>
            <b v-show="isShow" @click="showInput">{{text}}</b>
            <input  v-model="vtext" 
                    @keydown.enter="keydown" 
                    v-show="!isShow" 
                    type="text"
            >
            <a @click="del">-</a>
        </p>
    </li>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      vtext: this.text
    };
  },
  props: ["index", "text", "what"],
  methods: {
    showInput() {
      this.isShow = false;
    },
    // 可以修改
    keydown() {
      let { index, vtext, what } = this;
      this.$store.commit("todolist/editList", { index, vtext, what });
      this.isShow = true;
    },
    // 删除
    del() {
      let { index, what } = this;
      this.$store.commit("todolist/delList", { index, what });
    },
    // 改变
    change(ev) {
      let isChecked = ev.target.checked;
      let { index } = this;
      this.$store.commit("todolist/moveList", { isChecked, index });
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
  margin-top: 10px;
  background: #fff;
}

li input {
  margin-left: 5px;
}

li #text {
  width: 350px;
  margin-left: 10px;
  border: 0;
  height: 30px;
}

li p a {
  position: absolute;
  right: 0px;
  top: 5px;
  display: inline-block;
  width: 20px;
  height: 18px;
  border-radius: 14px;
  border: 4px double #fff;
  background: #ccc;
  line-height: 8px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}
</style>
