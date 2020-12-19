// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    url: "",

 },
 getters: {
     url: state => state.url,
 
 },
 mutations: {
     changeURL (state, payload) {
         this.state.url = payload
     },
 },
 actions: {

 }
});