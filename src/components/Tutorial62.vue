<template>
    <div>
        <input type="text" ref="inputRef" value="dasdas" />
    </div>
</template>
  


<script>

import { ref, onMounted } from 'vue';

export default {
    name: 'TutorialT',
    setup() {
        const inputRef = ref(null)
        onMounted(() => {
            inputRef.value.focus()
        })

        return {
            inputRef
        }
    }
    // mounted(){
    //     console.log(this.$refs.inputRef);
    // this.$refs.inputRef.value = 'dasdaxx'


    // }
}
</script>

<style scoped></style>