<template>
<div>
     <h1>PAGE ADMIN</h1>
     <blogAdmin :allPost="allPost" @deleteBlog="deletePost" @save="save"></blogAdmin>
</div>
</template>

<script>
import BlogAdmin from '../components/BlogAdmin'
export default {
    name: 'admin',

    components: {
        BlogAdmin,
    },

    data(){
        return {
              allPost: this.$store.state.allItem,
        }
    },
}
</script>

