<template>
  <div class="wrapper">
    <SideBar/>
    <AppDivider/>
    <EmployeesList/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import EmployeesList from "@/components/EmployeesList";
import AppDivider from "@/UI/AppDivider";

export default {
  name: "SearchEmployees",
  components: {SideBar, EmployeesList, AppDivider}
}
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 296px min-content 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1100px){
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    justify-items: center;
    align-items: center;
  }
}
</style>