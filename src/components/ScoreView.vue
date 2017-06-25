<template>
  <div>
    <span>Score View</span>
    <span>{{getTitle}}</span>
    <button @click='setTitle("newTitle")'>change title</button>
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
