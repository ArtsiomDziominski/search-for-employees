<template>
  <div class="card">
    <img src="@/assets/img-small.png" alt="img"/>
    <AppDivider/>
    <div class="card__info info">
      <p class="info__name">{{ name }}</p>
      <p class="info__mail">{{ email }}</p>
    </div>
  </div>
</template>

<script>
import AppDivider from "@/UI/AppDivider";

export default {
  name: "ResultCard",
  components: {AppDivider},
  props: {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 240px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 70px min-content 1fr;
  grid-template-rows: 70px;
  justify-items: flex-start;
  align-items: center;
  box-shadow: 0 0 10px 0 #0000001A;
  cursor: pointer;

  &:hover {
    .info {
      width: 100%;
      background-color: #E0E0E0;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 0 15px;
    max-width: 140px;
    width: 100%;
    height: 100%;
    border-radius: 0 10px 10px 0;

    &__name {
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
      color: #333333;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }

    &__mail {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: #76787D;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>