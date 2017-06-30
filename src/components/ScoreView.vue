<template>
  <div class="score-container">
    <img class="title-img" src="../assets/small-title.png"/>
    <div class="score-contents">
      <span>{{getTitle}}</span>
      <button @click='setTitle("newTitle")'>change title</button>
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
    display: block;
    width: 100%;
    height: 100%;

  }

  .title-img {
    width: 100vw;
    height: 16vh;
  }

  .score-contents {
    width: 100%;
  }
</style>
