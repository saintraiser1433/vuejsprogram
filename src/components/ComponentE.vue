<template>
    <h2>ComponentE {{ username }}</h2>
    <ComponentF></ComponentF>
</template>

<script>
import ComponentF from './ComponentF.vue';
export default {
    name: 'ComponentE',
    components: {
        ComponentF
    },
    inject:['username']
}
</script>

<style scoped></style>