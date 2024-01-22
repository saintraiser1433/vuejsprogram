<template>
    <div>
        <input type="text" placeholder="Last Name" v-model="myFname" />
        <input type="text" placeholder="Name" v-model="myLname" />

        <input type="text" placeholder="Reactive Name" v-model="firstName" />
        <input type="text" placeholder="Reactive Lname" v-model="lastName" />

        <input type="text" placeholder="Reactive Object Name" v-model="option.heroName" />
        <input type="text" placeholder="Reactive Object Lname" v-model="option.pcName" />

    </div>
</template>


<script>
import { ref, watch, reactive, toRefs } from 'vue'
import _ from 'lodash'
export default {
    name: 'TutorialWatch',
    setup() {
        const myFname = ref('');
        const myLname = ref('');




        const state = reactive({
            firstName: '',
            lastName: '',
            option: {
                heroName: '',
                pcName: '',
            }

        });

        watch(() => _.cloneDeep(state.option),
            function (newValue, oldValue) {
                console.log('First New Values', newValue);
                console.log('First Old Values', oldValue);
                console.log('Last New Values', newValue);
                console.log('Last Old Values', oldValue);
            },{
                deep:true, //use deep when u execute arrays
                // immediate:true//use immediate when you need to execute automatic
            });




        //all reactive
        // watch(() => {
        //     return { ...state }
        // },
        //     function (newValue, oldValue) {
        //         console.log('First New Values', newValue.firstName);
        //         console.log('First Old Values', oldValue.firstName);
        //         console.log('Last New Values', newValue.lastName);
        //         console.log('Last Old Values', oldValue.lastName);
        //     });

        //uses single reactive
        // watch(() =>
        //     state.firstName,
        //     function (newValue, oldValue) {
        //         console.log('First New Values', newValue);
        //         console.log('First Old Values', oldValue);
        //     });


        // watch(state,function(newValue,oldValue){
        //     console.log('First New Value',newValue.firstName);
        //     console.log('First Old Value',oldValue.firstName);
        //     console.log('Last New Value',newValue.lastName);
        //     console.log('Last Old Value',oldValue.lastName);
        // });




        // watch([myFname, myLname], function (newValue, oldValue) {
        //     console.log("FIRST Old Value", oldValue[0]);
        //     console.log("FIRST New Value", newValue[0]);
        //     console.log("LAST Old Value", oldValue[1]);
        //     console.log("LAST New Value", newValue[1]);
        // })







        return {
            myFname,
            myLname,
            ...toRefs(state)
        }

    },

    data() {
        return {
            name: ''
        }
    },
    watch: {
        name(newValue, oldValue) {
            console.log("Old value", oldValue)
            console.log("New value", newValue)
        }
    },

}
</script>

<style scoped></style>