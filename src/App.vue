<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @font-face {
    font-family: NanumBarunGothic;
    src: url("./assets/fonts/NanumBarunGothic.eot"), url("./assets/fonts/NanumBarunGothic.ttf"), url("./assets/fonts/NanumBarunGothic.woff"), url("./assets/fonts/NanumBarunGothic.woff2")
  }

  html, body, #app {
    height: 100%;
    width: 100%;
  }

  #app {
    font-family: NanumBarunGothic;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
