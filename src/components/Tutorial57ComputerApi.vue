<template>
    <div>
        <!-- option api -->
        <input type="text" placeholder="First Name" v-model="fName" />
        <input type="text" placeholder="Last Name" v-model="lName" />
        <h2>Options Fullname is {{ fullName }}</h2>

        <input type="text" placeholder="First Name" v-model="refFirstName" />
        <input type="text" placeholder="Last Name" v-model="refLastName" />
        <h2>Composition Api Fullname is {{ refs }}</h2>


        <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
        <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
        <h2>Reactive Fullname is {{ reactiveFullname }}</h2>
    </div>
</template>
 

<script>
import { ref,computed,reactive,toRefs } from 'vue'
export default {
   
    name: 'ComputedApi',
    setup(){
        const refFirstName = ref('')
        const refLastName = ref('')

        const refs = computed(function(){
            return `${refFirstName.value} ${refLastName.value}`
        })

        const state = reactive({
            reactiveFirstName : '',
            reactiveLastName : ''
        });

        const reactiveFullname = computed(function(){
            return `${state.reactiveFirstName} ${state.reactiveLastName}`
        })

        return {
            refFirstName,
            refLastName,
            refs,
            reactiveFullname,
            ...toRefs(state),
        }
    },
    data(){
        return {
            fName : '',
            lName : ''
        }
    },
    computed: {
        fullName(){
            return `${this.fName} ${this.lName}`
        }
    }

}
</script>

<style scoped></style>