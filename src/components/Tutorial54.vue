<template>
    <div>
        {{ name  }}
    </div>
</template>

<script>
import { reactive,toRefs } from 'vue'

    export default {
        name:'TutorialS',
        setup(){
            const state = reactive({
                name:'Gwapo',
            });
           

            setTimeout(()=>{
                state.name = 'Codevolution'
            },2000)
            return toRefs(state);
        }
    }
</script>

<style  scoped>

</style>