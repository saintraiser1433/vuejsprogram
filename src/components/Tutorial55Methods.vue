<template>
    <div>
        <h2>{{ name }}</h2>
        <button @click="setName">Change Name</button>
        <h2>{{ count }}</h2>
        <button @click="incrementCount">Increment Count</button>

        <h2>{{ first }} {{ last }}</h2>
        <button @click="changeHero">Change Name</button>
    </div>
</template>
   

<script>
import { ref,reactive,toRefs } from 'vue';
    export default {
        name:'MyMethods',
        setup(){
            const count  = ref(0);
            function incrementCount(){
                count.value++
            }

            function changeHero(){
                state.first = 'Clark',
                state.last = 'Kent'
            }
            const state = reactive({
                first:'Bruce',
                last:'Name'
            });
            return {
                count,
                incrementCount,
                changeHero,
                ...toRefs(state)
            }
     
        },
        data(){
            return {
                name:'Vishwas',
            }
        },
        methods: {
            setName(){
                this.name = 'CodeEvolution'
            }
        }
    }
</script>

<style scoped>

</style>