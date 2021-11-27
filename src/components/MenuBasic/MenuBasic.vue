<template>
  <div class="menu-basic">
    <div class="menu-basic__heading">Menu</div>
    <ul class="menu-basic__list">
      <li class="menu-basic__item">
        <a href="#" class="menu-basic__link">Item</a>
      </li>
      <li class="menu-basic__item">
        <a href="#" class="menu-basic__link">Item</a>
      </li>
      <li class="menu-basic__item">
        <a href="#" class="menu-basic__link">Item</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuBasic'
}
</script>

<style lang="scss">
  .menu-basic {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }

    &__heading {
      font-weight: bold;
      margin-right: 10px;
    }

    &__list {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      margin: 0 10px 0 0;
      padding: 0;

      &:last-child {
        margin-right: 0;
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