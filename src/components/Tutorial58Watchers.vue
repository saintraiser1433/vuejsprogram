<template>
    <div>
        <input type="text" placeholder="Last Name" v-model="name" />
    </div>
</template>


<script>
import {ref} from 'vue'
    export default {
        name:'TutorialWatch',


        data(){
            return {
             name:''   
            }
        },
        watch: {
            name(newValue, oldValue){
                console.log("Old value",oldValue)
                console.log("New value",newValue)
            }
        },

    }
</script>

<style scoped>

</style>