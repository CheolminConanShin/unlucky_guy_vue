<template>
  <div class="first-rank">
    <div class="left">
      <img src="../assets/images/face-1.svg"/>
      <span>Jacky</span>
    </div>
    <div class="right">
      <img src="../assets/images/coffee.png"/>
      <span>x 12</span>
    </div>
  </div>
</template>
<style>
  .first-rank {
    height: 15.6vh;
    display: flex;
    border-radius: 10px;
    background-color: #eff0e6;
    box-shadow: 0 2px 4px 0 rgba(217, 226, 233, 0.3);
    padding: 0px 5vw;
    font-size: 3.5vh;
  }

  .first-rank img {
    width: 17vw;
  }

  .first-rank .left {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 0.5;
    margin-right: 5vw;
  }

  .first-rank .right {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 0.5;
  }

  .first-rank .left img {
  }

  .first-rank .right img {
    width: 6vh;
  }
</style>
