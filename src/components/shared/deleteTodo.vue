<template>
    <div class="wrapper">
        <button @click="cancelModal"> CANCEL</button>
        <button @click="deleteTodo">OK</button>
    </div>
</template>

<script>
 export default{
       methods:{
           cancelModal(){
               this.$emit('cancelModal')
           },
           deleteTodo(){
               this.$emit('deleteTodo')
               this.cancelModal()
           }
       }

   }

</script>
  
<style scoped>
    .wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        height: 300px;
        width: 300px;
        transform: translate( -50%, -50%);
        background-color:red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>