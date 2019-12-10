let getters = {
  httpHOst(state, getters) {
    return 'http://' + state.host
  }
}
export default getters;
