<template>
   
    <ComponentE></ComponentE>
</template>

<script>
    import ComponentE from './ComponentE.vue';
    export default {
        name: 'ComponentC',
        components :{
            ComponentE
        },
        inject:['username']
    }
</script>

<style scoped>

</style>