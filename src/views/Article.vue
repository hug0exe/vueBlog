<template>
<div>
  <h1>Tout les articles</h1>
  <blog-article/>
</div>
</template>

<script>
import BlogArticle from '../components/BlogArticle.vue'

export default {
  name: 'details',

  components: { BlogArticle },

  data(){
    return{
      allPost: this.$store.state.allItem,
    }
  }
    
}
</script>
<style scoped>

</style>