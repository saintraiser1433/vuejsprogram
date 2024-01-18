<template>
    <h3 v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>

</template>


<script>
export default {
    name: 'NameList',
    data() {
        return {
            names: [
                {
                    firstName: 'Bruce',
                    lastName:'Wayne'
                },
                {
                    firstName: 'Janny',
                    lastName:'Yespapa'
                },
                {
                    firstName: 'Eating Sugar',
                    lastName:'No papa'
                },
                {
                    firstName: 'Telling lies',
                    lastName:'Papsy'
                }
            ]
        }
    }
}
</script>

<style scoped></style>