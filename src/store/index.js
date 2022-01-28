import { createStore } from 'vuex'

export default createStore({
    // Tableau ou on récupère les infos du post et ou on stocke les datas
    state: {
        allItem: []
    },
    // Fonctions Ajouter et Supprimer
    mutations: {
        addPost(state, post) {
            state.allItem.push(post);
        },
        deletePost(state, check) {
            state.allItem.splice(state.allItem.indexOf(check), 1)
        }
    },
    actions: {},
    modules: {}
})