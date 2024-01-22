import { ref } from "vue";

function useCounter(first,second){
    const count = ref(first);

    function incrementCount(){
        count.value+=second;
    }
    return {
        count,
        incrementCount
    }
}
export default useCounter