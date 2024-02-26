<template>
  <div class="sidebar">
    <p class="sidebar__title">Поиск сотрудников</p>
    <input class="sidebar__input" placeholder="Введите Id или имя "/>
    <p class="sidebar__title">Результаты</p>
    <ResultCard/>
  </div>
</template>

<script>
import ResultCard from "@/components/ResultCard";

export default {
  name: "SideBar",
  components: {ResultCard}
}
</script>

<style scoped lang="scss">
.sidebar {
  max-width: 293px;
  background-color: #FDFDFD;
  padding: 27px 23px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }

  &__input {
    width: 208px;
    height: 46px;
    border-radius: 8px;
    padding: 0 16px;
    border: 1.5px solid #E9ECEF;
    font-size: 14px;
  }
}
</style>