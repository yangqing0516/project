<template>
	<div id="app">
		<div class="section">
			<router-view></router-view>
		</div>
		<Foot></Foot>
	</div>
</template>

<script>
import Foot from "./view/foot/foot.vue";
import Dispatch from "./dispatch.js";
export default {
  name: "App",
  data() {
    return {
      carts: []
	  };
  },
  components: {
	  Foot
  }
};
</script>

<style>
@import "common/css/default.css";
@import './common/fonts(1)/iconfont.css';
@import "./common/font/iconfont.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.section {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>