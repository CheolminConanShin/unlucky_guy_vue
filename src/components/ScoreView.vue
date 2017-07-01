<template>
  <div class="score-container">
    <img class="title-img" src="../assets/images/app-title.png"/>
    <first-rank></first-rank>
    <score-row></score-row>
    <score-row></score-row>
    <score-row></score-row>
    <score-row></score-row>
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
</style>
