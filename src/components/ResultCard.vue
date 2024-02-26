<template>
  <div class="card">
    <img src="@/assets/img-small.png" alt="img"/>
    <AppDivider/>
    <div class="card__info info">
      <p class="info__name">Bret</p>
      <p class="info__mail">Sincere@april.biz</p>
    </div>
  </div>
</template>

<script>
import AppDivider from "@/UI/AppDivider";

export default {
  name: "ResultCard",
  components: {AppDivider}
}
</script>

<style scoped lang="scss">
.card {
  width: 240px;
  height: 70px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 70px min-content 1fr;
  justify-items: center;
  align-items: center;
  box-shadow: 0 0 10px 0 #0000001A;

  &__info {
    display: flex;
    flex-direction: column;

    .info {
      &__name {
        font-size: 14px;
        font-weight: 600;
        line-height: 17px;
        color: #333333;
      }

      &__mail {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #76787D;
      }
    }
  }
}
</style>