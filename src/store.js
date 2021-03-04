// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    url: "https://media.giphy.com/media/lRXY41yFFi9RfNXyPN/giphy.gif",

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