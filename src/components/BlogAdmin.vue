<template>
<div>
    <div class="createBtn">
        <!-- Route pour aller sur la page /create -->
        <button type="submit"><router-link to="/create">Créer une page</router-link></button> 
    </div>

   

    <div class="post" v-for="(post, id) in allPost" :key="post" :id="id">
        <ul>
            <!-- Form -->
            <div class="postEdit">
                <img :src="post.image || 'https://i.stack.imgur.com/l60Hf.png'"   disabled :class="{view: !isEditing}">
                <input type="text"  v-model="post.title" disabled :class="{view: !isEditing}">
                <input v-show="seen" type="text"  v-model="post.metaTitle" disabled :class="{view: !isEditing}">
                <input v-show="seen" type="text"  v-model="post.description" disabled :class="{view: !isEditing}">
                <input v-show="seen" type="text"  v-model="post.contentPost" disabled :class="{view: !isEditing}">
            </div>
        </ul>

        <div class="buttons">
            <button @click="selectSwitch(); seen = !seen;" v-if="!isEditing" >Edit</button>
            <button @click="save; seen = !seen" v-if="isEditing && seen">Save</button>    
            <button class="delete" :key="post" @click="deletePost(post)">Supprimer</button>
        </div>
        <!-- Partie Edit -->
        <div class="postInput">
            <div v-show="seen">Image:<input type="text" v-model="post.image" :disabled="!isEditing" :class="{view: !isEditing}"></div>
            <div v-show="seen">Title:<input type="text" v-model="post.title" :disabled="!isEditing" :class="{view: !isEditing}"></div>
            <div v-show="seen">Meta title:<input type="text" v-model="post.metaTitle" :disabled="!isEditing" :class="{view: !isEditing}"></div>
            <div v-show="seen">Description: <input type="text" v-model="post.description" :disabled="!isEditing" :class="{view: !isEditing}"></div>
            <div v-show="seen">Content:<input type="text" v-model="post.contentPost" :disabled="!isEditing" :class="{view: !isEditing}"></div>
        </div>

    </div>    

</div>
</template>


 

<script>
export default {
    name: 'blogAdmin',

    data(){   
        return{
            allPost: this.$store.state.allItem,
            isEditing: false,
            seen:false,
        }
    },

    props : {
        post: {
            type: String
        },
        allItem : {
            type : Array
        },       
    },

    mounted() {
    this.cachedPost = Object.assign({}, this.title);
    
  },
  
    methods: {
        deletePost(post){
            this.$store.commit("deletePost",post);
        },
        
        save() {
            this.cachedTitle = Object.assign({}, this.title);
            this.isEditing = true;
        },
    
        selectSwitch(){
            this.isEditing = !this.isEditing;
        },

    }

}

</script>

<style scoped>


.post{
    border: 1px solid black;
    margin: 20px 150px 0 150px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post ul li{
    list-style: none;
}

button{
    margin-right: 20px;
    border: none;
    padding: 5px 10px;
    font-size: 15px; 
    outline: none;
}
.edit{
    background-color: rgb(255, 255, 140);
}
.delete{
    background-color: rgb(255, 85, 85);
}

.postEdit{
   display: flex;
   flex-direction: column;
}

.postInput{
    display: flex;
    flex-direction: column;
    text-align: end;
}

.createBtn button a {
    text-decoration: none;
    color: black;
}

</style>