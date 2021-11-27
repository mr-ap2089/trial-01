<template>
  <div class="search-main">
    <div class="search-main__heading">Search</div>
    <input
      type="text"
      class="search-main__field"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchMain'
}
</script>

<style lang="scss">
  .search-main {
    &__heading {
      font-weight: bold;
      margin-block: 5px;
    }

    &__field {
      display: block;
      width: 400px;
      padding: 8px 10px;
      border: 1px solid black;
      border-radius: 3px;
      font-size: 14px;
    }
  }
</style>