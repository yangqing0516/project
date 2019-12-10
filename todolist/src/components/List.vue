<template>
    <div class="list">
        <h2>
            <span>正在进行</span> 
            <span>{{this.$store.state.todolist.todolist.length}}</span>
        </h2>
        <ol>
            <Item 
            v-for="(item, index) in this.$store.state.todolist.todolist" 
            :key="index"
            :text="item.text"
            :index="index"
            :what="false"
            />
        </ol>
        <h2>
            <span>已经完成</span>
            <span>{{this.$store.state.todolist.donelist.length}}</span>
        </h2>
        <ol>
            <Item
            v-for="(item, index) in this.$store.state.todolist.donelist" 
            :key="index"
            :text="item.text"
            :index="index"
            :what="true"
            />
        </ol>
    </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  data() {
    return {};
  },
  components: {
    Item
  }
};
</script>

<style>
h2 {
  position: relative;
  width: 650px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
}

h2 span:first-child {
  margin-left: 85px;
  display: inline-block;
  font-size: 20px;
  font-weight: 800;
}

h2 span:last-child {
  position: absolute;
  right: 80px;
  top: 15px;
  display: inline-block;
  padding: 0 5px;
  height: 20px;
  border-radius: 20px;
  background: #e6e6fa;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-size: 14px;
}

ol {
  width: 490px;
  margin: 0 auto;
}
</style>
