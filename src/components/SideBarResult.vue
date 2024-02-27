<template>
  <div class="result">
    <div class="result__title">
      <p class="result__text">Результаты</p>
      <AppLoader v-if="loadingUsers" width="5px" height="5px"/>
    </div>
    <div v-if="users.length" class="result__users">
      <template v-for="user in users" :key="user.id">
        <ResultCard
            :name="user.name"
            :email="user.email"
            @click="$emit('selectUser', user)"
        />
      </template>
    </div>
    <p v-else-if="!users.length && isSearchNotFound">ничего не найдено</p>
    <p v-else>начните поиск</p>
  </div>
</template>

<script>
import ResultCard from "@/components/ResultCard";
import AppLoader from "@/UI/AppLoader";

export default {
  name: "SideBarResult",
  components: {ResultCard, AppLoader},
  props: {
    users: {
      type: Array,
      require: true,
      default: () => []
    },
    isSearchNotFound: {
      type: Boolean,
      default: false
    },
    loadingUsers: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectUser']
}
</script>

<style scoped lang="scss">
.result {
  &__title {
    display: flex;
  }

  &__text {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 10px;
  }

  &__users {
    width: 100%;
    height: 370px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px 10px 20px 10px;
  }
}
</style>