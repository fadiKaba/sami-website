<template>
 <Home></Home>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
  mounted: function(){
      this.setLayoutState();
  },
  computed: {

  },
  methods: {
    ...mapMutations(['setLayoutState'])
  }
}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/colors.scss';

  h1{
    color: $color-primary;
    font-family: 'din', Arial, Helvetica, sans-serif;
  }
</style>
