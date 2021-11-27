import axios from  '@/axios'
import config from '@/config'
import router from '@/router'

export default {
  namespaced: true,
  state: {
    data: [],
    list: [],
    heading: '',
    description: '',
    director: '',
    producer: '',
    date: '',
  },
  getters: {
    getFilms(state) {
      return state.list
    },
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload
      state.list = payload.results
    },
    SET_FILM(state, payload) {
      state.heading = payload.heading
      state.description = payload.description
      state.director = payload.director
      state.producer = payload.producer
      state.date = payload.date
    },
  },
  actions: {
    load({ commit, dispatch }, payload) {
      axios.get('/films').then((response) => {
        commit('SET_DATA', response.data)
        dispatch('update');
      }).catch((error) => {
        console.log(error);
      });
    },
    update({ commit, state }) {
      const url = config.urlApi + '/films/' + router.currentRoute.params.id + '/'
      const data = state.list.filter((item) => item.url === url)

      if (data.length > 0) {
        const film = data[0];
        const [year, month, day] = film.release_date.split('-')
        const date = `${day}.${month}.${year}`

        commit('SET_FILM', {
          heading: film.title,
          description: film.opening_crawl,
          director: film.director,
          producer: film.producer,
          date: date,
        })
      }
    }
  }
}
