<template>
  <div class="sidebar">
    <p class="sidebar__title">Поиск сотрудников</p>
    <input v-model.trim="search" class="sidebar__input" placeholder="Введите Id или username " @input="input(search)"/>
    <p v-if="errorMessage" class="sidebar__title sidebar__error">{{ errorMessage }}</p>
    <SideBarResult
        :users="users"
        :loadingUsers="loadingUsers"
        :isSearchNotFound="isSearchNotFound"
        @selectUser="selectUser"
    />
  </div>
</template>

<script>
import {computed, ref} from "vue";
import {store} from "@/store/store";
import SideBarResult from "@/components/SideBarResult";

export default {
  name: "SideBar",
  components: { SideBarResult },
  setup() {
    let search = ref('');
    let timeoutSearchUser = ref(null);

    const input = (val) => {
      if (!val) {
        store.commit('clearUsers');
        store.commit('clearUser');
      }
      if (timeoutSearchUser.value) clearTimeout(timeoutSearchUser.value);
      if (val) timeoutSearchUser.value = setTimeout(() => store.dispatch("requestUsers", val), 500);
    }

    const users = computed(() => {
      return store.state.users;
    });

    const loadingUsers = computed(() => {
      return store.state.loadingUsers;
    });

    const isSearchNotFound = computed(() => {
      return store.state.isSearchNotFound;
    });

    const errorMessage = computed(() => {
      return store.state.errorMessage;
    });

    const selectUser = (user) => {
      store.commit('setUser', user);
    }
    return {
      input,
      users,
      selectUser,
      search,
      timeoutSearchUser,
      loadingUsers,
      isSearchNotFound,
      errorMessage
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  max-width: 293px;
  background-color: #FDFDFD;
  padding: 27px 23px 0 23px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }

  &__error {
    color: red;
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