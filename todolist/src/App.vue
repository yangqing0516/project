<template>
    <div id="app">
        <Index/>
    </div>
</template>

<script>
import Index from "./components/index.vue"
export default {
  data() {
    return {};
  },
  components:{
    Index
  }
};
</script>

<style>
@import url("./common/default.css");
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
