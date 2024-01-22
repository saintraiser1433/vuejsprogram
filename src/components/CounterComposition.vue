<template>
    <div>{{ count }}</div>
    <button @click="incrementCount">Incrmentr</button>
</template>


<script>
    import useCounter from '../composable/useCounter.js'
    export default {
        name:'CounterComposition',
        setup(){

            const {count,incrementCount} = useCounter(10,1);
            


            return {
                count,
                incrementCount
            }
        }
    }
</script>

<style scoped>

</style>