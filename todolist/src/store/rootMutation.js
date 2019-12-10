let mutations = {
  changeHost(state, action) {
    state.host = action.host;
  },
  changeMsg(state, action) {
    state.msg = action.msg;
  },
  changeVuex(state, action) {
    state.useVuex = action.useVuex
  }
}
export default mutations;
