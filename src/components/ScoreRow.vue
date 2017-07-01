<template>
  <div class="other-rank">
    <div class="left">
      <img :src="randomFaceImage()"/>
      <span>Evan</span>
    </div>
    <div class="right">
      <img src="../assets/images/coffee.png"/>
      <span>x 12</span>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      randomFaceImage: () => {
          const randomNumberFromOneToTen = Math.floor(Math.random() * 10) + 1
          return require("../assets/images/face-"+randomNumberFromOneToTen+".svg")
      }
    }
  }
</script>
<style>
  .other-rank {
    display: flex;
    font-size: 3vh;
    padding: 0px 5vw;
    margin: 3vh 0px;
  }

  .other-rank img {
    width: 10vw;
  }

  .other-rank .left {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 0.5;
    margin-right: 13vw;
  }

  .other-rank .right {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 0.5;
  }
</style>
