<template>
  <img src="../assets/splash.png"/>
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
