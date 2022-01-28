<template>
    <div>
        <div class="post" v-for="post in allPost" :key="post">
            <ul>
                <!-- Gestion de l'image -->
                <li> <img :src="post.image || 'https://i.stack.imgur.com/l60Hf.png'"><p><router-link :to="{name:'articles', params:{Bid:post.id}}">{{post.description}}</router-link></p></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blogList',

    data(){
        return{
            allPost: this.$store.state.allItem,   
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

}
</script>

<style scoped>

.post{
    border: 1px solid black;
    margin: 20px 150px 0 150px; 
}

.post ul li{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

img{
    max-height: 150px;
    max-width: 150px;
    padding-right: 100px;
}

p a{
    text-decoration: none;
    color: black;
}

</style>