// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    url: "https://media.giphy.com/media/6f6HMJ2iGNLyM/giphy.gif"
 },
 getters: {},
 mutations: {
     changeURL (state, payload) {
         this.state.url = payload
     }
 },
 actions: {
    changeURL (context, payload) {
        context.commit('changeURL', payload)
      }
 }
});