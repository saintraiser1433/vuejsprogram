<template>
    <div>
        <h3>Parent Component</h3>
        <button @click="showChild = !showChild">Toggle Child</button>
        <Child v-if="showChild"></Child>
    </div>
</template>

<script>
    import Child from './Child.vue';
    export default {
        name:'ParentComponent',
        components:{
            Child
        },
        data(){
            return {
                showChild:true
            }
        },
        beforeCreate(){
            console.log('Parent beforeCreate()')
        },
        created(){
            console.log('Parent CREATED()')
        },
        beforeMount(){
            console.log('Parent Before Mount')
        },
        mounted(){
            console.log('Parent Mounted')
        },
        beforeUpdate(){
            console.log('Parent beforeUpdate')
        },
        update(){
            console.log('Parent Update')
        },
        beforeUnmount(){
            console.log('Parent beforeUnMount')
        },
        unmounted(){
            console.log('Parent Unmounted')
        }
    }
</script>

<style  scoped>

</style>