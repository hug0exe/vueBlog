<template>
    <div id="newBlog">
        <div class="inputs">
            <label for="newImage">Lien de votre image</label>
            <input type="text" v-model="newImage">
        </div>
        <div class="inputs">
            <label for="newTitle">Titre de la page</label>
            <input type="text" v-model="newTitle" required>
        </div>
        
        <div class="inputs">
            <label for="newMetaTitle">Meta Title</label>
            <input type="text" v-model="newMetaTitle" required>
        </div>
        
        <div class="inputs">
            <label for="newMetaDesc">Meta Description</label>
            <input type="text" v-model="newMetaDesc" required>
        </div>
        <div class="inputs">
            <label for="newPost">Corps du post</label>
            <textarea v-model="newPost" required></textarea>
        </div>

        <button @click="addPost();" :disabled='!newTitle.length || !newMetaTitle.length || !newMetaDesc.length || !newPost.length'>Créer la page</button>
    </div>  
</template>

<script>
export default {
name: 'newBlog',
    
    data(){
        return {
            newTitle:'',
            newMetaTitle:'',
            newMetaDesc:'',
            newPost:'',
            newImage:'',
        }
    },

    methods: {
        addPost() {
            let post = {
                title: this.newTitle,
                metaTitle: this.newMetaTitle,
                description: this.newMetaDesc,
                contentPost: this.newPost,
                image: this.newImage,
                id: this.$store.state.allItem.length
            }
            this.$store.commit('addPost',post);
            this.$router.push('/blog');
        },
            
    }
}
</script>
    
<style scoped>

#newBlog{
    width: 30%;
    height: 75%;
    display: flex;
    flex-direction: column;
}
label{
    text-align: left;
}
.inputs{
    margin: 5% 0 5% 20%;
    text-align: left;
    display: flex;
    justify-content: space-between;
}
button{
    width: 40%;
    margin-top: 30px;
    margin-left: 200px;
}

</style>