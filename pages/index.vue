<template>
  <div id="home-page">
    <Home v-if="render1"></Home>
    <div v-if="runLoadingPage" class="spinner-container">
         <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  data: function(){
    return{
      render1: false
    }
  },
  mounted: function(){
      this.renderComponent();
  },
  computed: {
     ...mapState(['runLoadingPage'])
  },
  methods: {
    ...mapMutations(['setRunLoadingPage']),
    renderComponent: function(){
      let vm = this;
      setTimeout(function(){
        vm.render1 = true;
        vm.setRunLoadingPage();
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>

#home-page{
  height: 100%;
}
</style>
