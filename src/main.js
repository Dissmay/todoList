import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
import addTotoModal from './components/shared/addTodoModal.vue'
import deleteModal from './components/shared/deleteModal.vue'
import deleteTodo from './components/shared/deleteTodo.vue'
import editCancel from './components/shared/editCancel.vue'
import store from './store/'

Vue.config.productionTip = false
Vue.component('app-modal-add-todo', addTotoModal)
Vue.component('app-modal-delete-todo', deleteModal)
Vue.component('app-todo-delete',deleteTodo)
Vue.component('app-todo-edit-cancel',editCancel)
new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
