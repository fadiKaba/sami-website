<template>
   <div class="section-about">
      <transition name="about">
        <About v-if="render"></About>
      </transition>
  </div>
</template>

<script>

import {mapMutations} from 'vuex';

export default {
     transition: 'about',
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