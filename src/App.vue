<template>
  <div id="app" class="wrap">
    <div class="sidebar">
      <menu-main
        heading="Menu"
        :list="getFilms()"
      />
    </div>
    <div class="main">
      <div class="header">
        <search-main
        />
      </div>
      <div class="content">
        <router-view />
      </div>
      <div class="footer">
        <menu-basic
        />
      </div>
    </div>
  </div>
</template>

<script>
import MenuMain from '@/components/MenuMain/MenuMain'
import SearchMain from '@/components/SearchMain/SearchMain'
import MenuBasic from '@/components/MenuBasic/MenuBasic'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    MenuMain,
    SearchMain,
    MenuBasic,
  },
  methods: {
    ...mapGetters({
      getFilms: 'films/getFilms',
    }),
    ...mapActions({
      filmsLoad: 'films/load',
    }),
  },
  mounted() {
    this.filmsLoad()
  }
}
</script>

<style lang="scss">
  @import '~normalize.css/normalize.css';
  @import '@/styles/general.scss';
</style>
