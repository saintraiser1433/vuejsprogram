<template>
    <ComponentC />
    <h2>Parent Component {{ name }}</h2>

    <h2>Parent Reactive to ref count {{ count  }}</h2>
    <h2>Parent Reactive to my hero  {{ fname  }} {{ lname }}</h2>
    <button @click="incrementValue">Increment</button>
</template>

<script>
import ComponentC from './ComponentC.vue';
import { provide,ref,reactive,toRefs } from 'vue';
export default {
    name: 'Tutorial60X',
    components: {
        ComponentC
    },
    setup() {
        // provide("myName",'John');



        const count = ref(0);

        function incrementValue(){
            count.value+=1;
        }
        const state = reactive({
            fname :'Lodash',
            lname: 'Jobert'
        });

        provide("myCount",count);
        provide("myHero",state);

        return {
            count,
            incrementValue,
            ...toRefs(state)
        }



    },
    data() {
        return {
            name: 'Janny',
        }
    },
    provide() {
        return {
            username: this.name
        }
    }
}
</script>

<style scoped></style>