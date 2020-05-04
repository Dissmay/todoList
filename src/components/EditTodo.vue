<template>
 <div  class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
            </div>
            <div>
                <button  @click="addTodo">Добавить</button> 
            </div>
            <div class="modal-body">
              <input type="text"  v-model="todosMass.heading"> 
              <div  v-for="(todo, key) in todosMass.inputs" :key="key">
                <input type="text" 
               v-model="todo.value"
                v-bind:disabled="todo.checked"
                >
                <button @click="doneChecked(todo.idTodo)">нажмите, если задача выполнена</button>
                <button @click="openDeleteModal(todo.idTodo)">Удалить туду</button>
              </div>
            </div>
              <app-todo-delete
               v-if="deleteModal" 
               v-on:cancelModal="cancelModal"  
               v-on:deleteTodo="deleteTodo(idTodo)" 
               ></app-todo-delete>
               <app-todo-edit-cancel
                v-if="editModal"
                 v-on:openEditModal="openEditModal"
                 v-on:closeEditModal="closeEditModal"
                 v-on:editCancel="editCancel"
               ></app-todo-edit-cancel>

            <div class="modal-footer">
                <button @click="doneTodo()">Редактировать</button>
                <button @click="openEditModal()">Отменить редактирование</button>
                <button @click="repeatСanceled()">повторить отменное редактирование</button>
                <button @click="deleteTodoId()">Удалить ТУДУ</button>
            </div>
            </div>
        </div>
      
    </div>
   
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
  export default{
    props:['id'],
    data(){
      return {
          todos:{},
          deleteModal:false,
          editModal: false,
          idTodo: '',
          historyTodo:{},
          clone: {}
      }
    },
    methods:{
           openDeleteModal(id){
             this.deleteModal = true
             this.idTodo = id
           },
           openEditModal(){
              this.editModal = true
           },
           closeEditModal(){
             this.editModal = false
           },
           deleteTodo(id){
             this.todos.inputs = this.todos.inputs.filter(input=> input.idTodo.toString() !== id.toString())
           },
           doneChecked(id){
             const elem = this.todos.inputs.find(input => input.idTodo.toString() == id.toString() )
              elem.checked = !elem.checked            
           },
           cancelModal(){
             this.deleteModal = false
           },
           addTodo(){
             this.todos.inputs.push( { value:'', idTodo: uuidv4(), checked: false})
           },
           editCancel(){
             this.historyTodo = JSON.parse(JSON.stringify(this.todos))
             this.todos= {}
             this.todos = JSON.parse(JSON.stringify(this.clone))
           },
           repeatСanceled(){
             this.todos = {}
             this.todos = JSON.parse(JSON.stringify(this.historyTodo))
           },
           deleteTodoId(){
             this.$store.dispatch('deleteTodo', this.id)
              this.$router.push('/')
           },
           doneTodo(){
            this.$store.dispatch('editTodo', this.todos)
            this.$router.push('/')
           }
          
    },
    computed:{
      todosMass(){
        return this.todos
      },
      t(){
        return this.$store.getters.todoGet
      }
     
    },
    beforeMount(){
      const id = this.id;
      let todo = this.$store.getters.getTodoId(id)
      let clone = JSON.parse(JSON.stringify(todo))
      this.clone = JSON.parse(JSON.stringify(clone))
      this.todos = JSON.parse(JSON.stringify(clone))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .modal{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
</style>