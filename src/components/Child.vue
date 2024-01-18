<template>
    <div>
        <h3>Child Component</h3>
    </div>
</template>

<script>
    export default {
        name:'ChildComponent',
        beforeCreate(){
            console.log('Child beforeCreate()')
        },
        created(){
            console.log('Child CREATED()')
        },
        beforeMount(){
            console.log('Child Before Mount')
        },
        mounted(){
            console.log('Child Mounted')
        },
        beforeUpdate(){
            console.log('Child beforeUpdate')
        },
        update(){
            console.log('Child Update')
        },
        beforeUnmount(){
            console.log('Child beforeUnMount')
        },
        unmounted(){
            console.log('Child Unmounted')
        }

    }
</script>

<style scoped>

</style>