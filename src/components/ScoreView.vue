<template>
  <div class="score-container">
    <img class="title-img" src="../assets/app-title.png"/>
    <div class="first-rank">
      <div class="left">
        <img src="../assets/face-1.svg"/>
        <span>Jacky</span>
      </div>
      <div class="right">
        <img src="../assets/coffee.png"/>
        <span>x 12</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    computed: mapGetters([
      'getTitle'
    ]),
    methods: mapActions([
      'setTitle'
    ])
  }
</script>

<style>
  .score-container {
    height: 90%;
    padding: 5vh 5vw;
  }

  .title-img {
    width: 55vw;
    height: 5.5vh;
  }

  .first-rank {
    height: 15.6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: #eff0e6;
    box-shadow: 0 2px 4px 0 rgba(217, 226, 233, 0.3);
    margin: 5vh 0px;
    padding: 0px 5vw;
    font-size: 3.5vh;
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
