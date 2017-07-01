<template>
  <div class="score-container">
    <img class="title-img" src="../assets/images/app-title.png"/>
    <first-rank></first-rank>
    <score-row></score-row>
    <score-row></score-row>
    <score-row></score-row>
    <score-row></score-row>
    <div class="buy-coffee">나만 아니면 돼</div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import FirstRank from './FirstRank.vue'
  import ScoreRow from './ScoreRow.vue'

  export default{
    computed: mapGetters([
      'getTitle'
    ]),
    methods: mapActions([
      'setTitle'
    ]),
    components: {
        FirstRank,
        ScoreRow
    }
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
    margin-bottom: 5vh;
  }

  .buy-coffee {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70vw;
    height: 10vh;
    border-radius: 20vw;
    background-color: rgba(242, 187, 5, 0.3);
    margin: 0px 10vw;
    font-size: 3vh;
    color: white;
  }
</style>
