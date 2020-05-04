<template>
    <div class="wrapper">
        <button @click="openEditModal"> CANCEL</button>
        <button @click="editCancel">OK</button>
    </div>
</template>

<script>
 export default{
       methods:{
           openEditModal(){
               this.$emit('openEditModal')
               this.$emit('closeEditModal')
           },
          
           editCancel(){
               this.$emit('editCancel')
               this.$emit('closeEditModal')
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