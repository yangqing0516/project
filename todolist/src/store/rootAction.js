let actions = {
  test(context, action) { //context 上下文，是一个对象，与store有相同的方法
    // **action就是那边传递来的数据
    //   console.log(action)  //{msg: "vue 学习"}
    setTimeout(() => {
      context.commit('changeMsg', action)
    }, 2000)
  }
}
export default actions;
