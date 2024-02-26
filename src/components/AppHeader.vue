<template>
  <div class="header">
    <p class="header__logo">Жилфонд</p>
    <p class="header__user">Пользователь</p>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 50px 50px 0 50px;

  &__logo {
    font-size: 32px;
    font-weight: 700;
    line-height: 39px;
    color: #E31F24;
  }

  &__user {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
}
</style>