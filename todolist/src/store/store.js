import Vue from "vue";
import createLogger from "vuex/dist/logger";
import modules from "./modules";
import rootActions from "./rootAction";
import rootMutation from "./rootMutation";
import rootGetter from "./rootGetter";
import rootState from "./rootState";
// 其他的几个文件同理
import Vuex, {
  Store
} from "vuex";
Vue.use(Vuex);
const store = new Store({
  // 存放共享的数据 
  state: rootState,
  // state的派生,相当于子类，可以在这个对象里面对数据进行修改，也可以理解成子类继承父类，对付元素的属性进行膝盖
  getters: rootGetter,
  // 相当于redux中的reducer， 计算的结果
  mutations: rootMutation, // 纯函数：接受相同的参数，返回相同的结果,
  // 相当于redux中的中间件
  actions: rootActions,
  // 严格模式
  strict: true,
  modules,
  plugins: [createLogger()]
});
// 在开发环境下有好处,在生产环境下没有
window.store = store;
// 抛出
export default store;
