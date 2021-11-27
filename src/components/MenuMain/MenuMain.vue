<template>
  <div class="menu-main">
    <div class="menu-main__heading">{{ heading }}</div>
    <ul class="menu-main__list">
      <li
        class="menu-main__item"
        v-for="(item, index) of list"
        :key="index"
      >
        <router-link
          :to="getUrl(item.url)"
          class="menu-main__link"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '@/config'

export default {
  name: 'MenuMain',
  props: ['heading', 'list'],
  methods: {
    getUrl(url) {
      return url.replace(config.urlApi, '')
    }
  },
}
</script>

<style lang="scss">
  .menu-main {
    margin-bottom: 15px;

    &__heading {
      font-weight: bold;
      margin-bottom: 10px;
    }

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      margin: 0 0 10px 0;
      padding: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__link {
      text-decoration: none;
      color: #000000;

      &:hover,
      &.active {
        text-decoration: underline;
        color: #000000;
      }
    }
  }
</style>