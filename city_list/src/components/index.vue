<template>
  <div class="wraper">
    <header class="header text-center bg-info">
      <h4>足迹地图</h4>
    </header>
    <section class="content">
      <list-left></list-left>
      <list-right></list-right>  
    </section>
  </div>
</template>

<script>
import listLeft from "./listLeft"
import listRight from "./listRight"
export default {
  name: '',
  data () {
    return {
      
    }
  },
  components:{
    listRight,
    listLeft,
  }
}
</script>

<style>
h4{
  color: #333;
}
</style>
