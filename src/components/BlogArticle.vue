<template>
<div>
    <div>
        <h1>{{post.title}}</h1>
        <img :src="post.image || 'https://i.stack.imgur.com/l60Hf.png'">
        <h2> {{post.description}}</h2>
        {{post.contentPost}}
    </div>    
</div>
</template>

<script>
export default {
    name: "articles",

    data(){
        return{
            blogId:this.$route.params.Bid,
            allPost: this.$store.state.allItem,
            post: "",
        }
    },

    methods: {
        getPost(){
            this.post = this.allPost[this.blogId]
        },
    },

    beforeMount(){
        this.getPost()
    }
    
}
</script>

<style scoped>
img{
    width: 30%;
    height: 30%;
}
</style>