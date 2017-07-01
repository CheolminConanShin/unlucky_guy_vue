<template>
  <div class="other-rank">
    <div class="left">
      <img src="../assets/images/face-1.svg"/>
      <span>Evan</span>
    </div>
    <div class="right">
      <img src="../assets/images/coffee.png"/>
      <span>x 12</span>
    </div>
  </div>
</template>
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
