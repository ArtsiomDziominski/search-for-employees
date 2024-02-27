<template>
  <div class="wrapper-list">
    <p v-if="!user" class="text">Выберите сотрудника, чтобы посмотреть его профиль</p>
    <CardInfo
        v-else
        :name="user?.name"
        :email="user?.email"
        :phone="user?.phone"
    />
  </div>
</template>

<script>
import CardInfo from "@/components/CardInfo";
import {computed} from "vue";
import {store} from "@/store/store";

export default {
  name: "EmployeesList",
  components: {CardInfo},
  setup() {
    const user = computed(() => {
      return store.state.user;
    });
    return {user}
  }
}
</script>

<style scoped lang="scss">
.wrapper-list {
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  }
}
</style>