<template>
  <span class="loader" :style="{width: width, 'height': height}"></span>
</template>

<script>
export default {
  name: "AppLoader",
  props: {
    width: {
      type: String,
      default: '10px'
    },
    height: {
      type: String,
      default: '10px'
    }
  }
}
</script>

<style scoped>
.loader {
  border-radius: 50%;
  display: block;
  margin: 8px auto;
  position: relative;
  color: black;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  25% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;
  }
  50% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;
  }
  75% {
    box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  100% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
}
</style>