import Vue from 'vue'
import Vuex from 'vuex'
import films from '@/store/films'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    films
  }
})