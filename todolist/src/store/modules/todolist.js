let todolist = {
  namespaced: true,
  state: {
    todolist: [],
    donelist: []
  },
  getters: {

  },
  mutations: {
    // 添加列表
    addTodo(state, action) {
      // 去重，防止添加相同的信息
      let findIndex = state.todolist.findIndex(item => {
        item.text === action.todo.text
      });
      if (findIndex === -1) {
        state.todolist.push(action.todo);
      }
    },
    // 修改列表
    editList(state, action) {
      let {
        index,
        vtext,
        what
      } = action;
      let str = what ? 'donelist' : 'todolist';
      let findIndexToDo = state.todolist.findIndex(item => {
        vtext === item.text
      })
      if (findIndexToDo !== -1) {
        return
      }
      let findIndexDone = state.donelist.findIndex(item => {
        vtext === item.text
      })
      if (findIndexDone !== -1) {
        return;
      }
      state[str][index].text = vtext;
    },
    // 删除
    delList(state, action) {
      let {
        index,
        what
      } = this;
      let str = what ? 'donelist' : 'todolist';
      state[str].splice(index, 1);
    },
    moveList(state, action) {
      let {
        isChecked,
        index
      } = action;
      if (isChecked) {
        state.donelist.push(state.todolist[index]);
        state.todolist.splice(index, 1);
      } else {
        state.todolist.push(state.donelist[index]);
        state.donelist.splice(index, 1)
      }
    }
  },
  actions: {

  }
}
export default todolist;
