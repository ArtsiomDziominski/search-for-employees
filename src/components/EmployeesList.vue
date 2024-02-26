<template>
  <div class="wrapper-list">
    <!--    <p class="wrapper-list__text">Выберите сотрудника, чтобы посмотреть его профиль</p>-->
    <CardInfo/>
  </div>
</template>

<script>
import CardInfo from "@/components/CardInfo";

export default {
  name: "EmployeesList",
  components: {CardInfo}
}
</script>

<style scoped lang="scss">
.wrapper-list {
  &__text {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  }
}
</style>