<template>
  <div class="card">
    <img class="card__img" src="@/assets/img.png" alt="img"/>
    <div class="info">
      <p class="info__name">Ervin Howell</p>
      <div class="info__contact">
        <p>email:</p>
        <p>Shanna@melissa.tv</p>
      </div>
      <div class="info__contact">
        <p>phone:</p>
        <p>010-692-6593 x09125</p>
      </div>
      <p class="info__about-title">О себе:</p>
      <p class="info__about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardInfo"
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: row;
  gap: 61px;
  padding: 30px 30px 30px 21px;

  &__img {
    width: 424px;
    height: 286px;
    border: 1px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &__name {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
    }

    &__contact {
      display: flex;
      flex-direction: row;
      gap: 4px;

      p:first-child {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }

      p:nth-child(2) {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }
    }

    &__about-title {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      color: #333333;
      margin: 10px 0 15px 0;
    }

    &__about-description {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: #76787D;
    }
  }
}
</style>