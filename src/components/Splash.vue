<template>
  <div class="splash-container">
    <img src="../assets/images/splash.png"/>
  </div>
</template>
<script>
  export default {
    name: 'Splash',
    mounted() {
      const _this = this
      setTimeout(function () {
        _this.$router.push("/score")
      }, 3000)
    }
  }
</script>
<style>
  .splash-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
