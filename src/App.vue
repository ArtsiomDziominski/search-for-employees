<template>
  <AppHeader/>
  <div class="page">
    <SearchEmployees/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import SearchEmployees from "@/views/SearchEmployees";

export default {
  name: 'App',
  components: {AppHeader, SearchEmployees}
}
</script>

<style>
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 1366px;
  height: 100vh;
}

body {
  margin: 0;
}

p {
  margin: 0;
}

.page {
  width: 1266px;
  height: 589px;
  border-radius: 10px;
  background-color: #FDFDFD;
  box-shadow: 0 0 10px 0 #0000001A;
  margin: 26px 53px 44px 47px
}
</style>
