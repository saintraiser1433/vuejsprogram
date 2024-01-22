<template>
    <div>
        Reactive Names {{ fullname }}
        <button @click="addEvent">Submit</button>

    </div>
</template>
  


<script>
import { computed } from 'vue';

export default {
    name: 'Tutorial63T',
    props: ['fname', 'lname'],
    // emits: ['myValue'],
    setup(props, context) {

        const fullname = computed(function () {
            return `${props.fname} ${props.lname}`
        })

        function addEvent() {
            context.emit('myValue',fullname.value);
        }

        return {
            fullname,
            addEvent
        }
    }


    // mounted(){
    //     console.log(this.$refs.inputRef);
    // this.$refs.inputRef.value = 'dasdaxx'


    // }
}
</script>

<style scoped></style>