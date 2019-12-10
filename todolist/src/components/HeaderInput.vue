<template>
    <div class="header">
        <form action="" @submit.prevent>
           <section>
                <label for="title">ToDoList</label>
                <input v-model="val" type="text" @keydown.enter="keydown" placeholder="添加ToDo"/>
           </section>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      val: ""
    };
  },
  methods: {
    keydown() {
      let { val } = this;
      this.$store.commit("todolist/addTodo", { todo: { text: val } });
      this.val = "";
    }
  }
};
</script>

<style>
.header {
  height: 50px;
  background: #333;
  background: rgba(47, 47, 47, 0.98);
}

form {
  width: 100%;
  height: 50px;
}

section {
  position: relative;
  width: 650px;
  height: 50px;
  margin: 0 auto;
}

label {
  width: 100px;
  line-height: 50px;
  color: #ddd;
  font-size: 24px;
  margin-left: 80px;
  cursor: pointer;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.header section input {
  width: 300px;
  height: 24px;
  margin-top: 12px;
  text-indent: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
    0 1px 6px rgba(0, 0, 0, 0.45) inset;
  border: none;
  position: absolute;
  right: 80px;
  top: 0;
}
</style>
