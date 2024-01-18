<template>
    <div>
        <input type="text" ref="inputRef" />
        <PostListHttp ref="postListRef"></PostListHttp>
        <button @click="accessChildData">Access Child Data</button>
    </div>
</template>


<script>
import PostListHttp from './PostListHttp.vue';
export default {
    name: 'TemplateRef',
    components: {
        PostListHttp
    },
    created(){
        this.accessChildData();
    },
    methods: {
        accessChildData() {
            const childComponent = this.$refs.postListRef;
            if (childComponent) {
                console.log(childComponent.posts);
                // You can now use childComponent.childData in the parent component
            }
        }
    },
    mounted() {
        // console.log(this.$refs.postListRef.posts[0].userId);
        this.$refs.inputRef.focus();
    }
}
</script>

<style scoped></style>    