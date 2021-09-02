<template>
   <div class="section-about">
        <div v-if="!rendered" class="spinner-container">
          <div class="lds-hourglass"></div>
        </div>
        <About v-if="rendered && render"></About>
  </div>
</template>

<script>

import {mapMutations} from 'vuex';

export default {
    data: function(){
      return{
        render: false,
        rendered: false,
      }
    },
    mounted: function(){
        this.renderComponent();
        this.$nextTick(function () {
          this.rendered = true;
        })
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

<style>

.section-about{
  height: 100vh;
}
.about-enter-active, .portfolio-leave-active {
  transition: opacity .5s;
}
.about-enter, .portfolio-leave-active {
  opacity: 0;
}

</style>