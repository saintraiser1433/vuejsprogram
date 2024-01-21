<template>
    <div>{{ refs }}</div>
</template>
  

<script>
import { ref } from 'vue';
    export default {
        name:'Tutorial54V2',
        setup(){
            const refs = ref('Gwapos');


            setTimeout (()=>{
                refs.value = 'GwapoMe';
            },2000);

            return {
                refs
            }
        }
        
    }
</script>

<style scoped>

</style>