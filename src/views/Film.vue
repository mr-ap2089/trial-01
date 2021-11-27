<template>
  <div>
    <h1 class="heading">{{ heading }}</h1>
    <div class="info">Date: {{ date }}</div>
    <div class="info">Director: {{ director }}</div>
    <div class="info">Producer: {{ producer }}</div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Film',
  methods: {
    ...mapActions({
      updateFilm: 'films/update'
    }),
    ...mapMutations(['films/SET_FILM']),
  },
  watch: {
    $route() {
      this.updateFilm()
    }
  },
  computed: {
    ...mapState({
      heading: state => state.films.heading,
      date: state => state.films.date,
      director: state => state.films.director,
      producer: state => state.films.producer,
      description: state => state.films.description,
    })
  },
}
</script>

<style lang="scss" scoped>
  .heading {
    font-size: 30px;
    margin: 0 0 20px 0;
  }

  .info {
    margin-bottom: 20px;
  }

  .description {
    margin-bottom: 20px;
  }
</style>