<template>
    <h2>ComponentF</h2>
    <h3>Component F username {{ username }}</h3>
    <h3>Component Composition Username {{ childUsername }}</h3>


    <h2>Child Reactive to ref count {{ countprovide  }}</h2>
    <h2>Child Reactive to my hero  {{ myheroName.fname  }} {{ myheroName.lname }}</h2>
</template>

<script>
import { inject} from 'vue';
    export default {
        name:'ComponentF',
        setup(){

        const countprovide = inject('myCount','-1');
        const myheroName = inject('myHero',{});


        return {
            countprovide,
            myheroName
        }


        //   const childUsername =  inject('myName','Default');
        //     return {
        //         childUsername
        //     }
         
        },

        inject:['username']
    }
</script>

<style scoped>

</style>