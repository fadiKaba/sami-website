<template>
  <Home v-if="render"></Home>
</template>

<script>

import {mapMutations} from 'vuex'

export default {
  data: function(){
    return{
      render: false
    }
  },
  mounted: function(){
      this.renderComponent();
  },
  computed: {

  },
  methods: {
    renderComponent: function(){
      let vm = this;
      setTimeout(function(){
        vm.render = true;
      }, 500)
    }
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
