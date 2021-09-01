<template>
  <div id="home-page">
    <section class="section-home" ref="s1">
      <!-- <transition name="home"> -->
        <Home v-if="render1"></Home>
      <!-- </transition> -->
        <div v-if="runLoadingPage" class="spinner-container">
          <div class="lds-hourglass"></div>
        </div>
    </section>
    <section class="section-contact" ref="s2">
      <Contact></Contact>
    </section>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
 // transition: 'home',
  data: function(){
    return{
      render1: false
    }
  },
  mounted: function(){
      this.renderComponent();
  },
  updated: function(){
    this.scrollDetector();
  },
  computed: {
     ...mapState(['runLoadingPage'])
  },
  methods: {
    ...mapMutations(['setRunLoadingPage', 'setLayoutNav']),
    renderComponent: function(){
      let vm = this;
      setTimeout(function(){
        vm.render1 = true;
        vm.setRunLoadingPage();
      }, 500);
    },
    scrollDetector: function(){
      let timer = null;
      let vm = this
      document.body.onscroll = function (){
        if(timer != null){
          clearTimeout(timer)
        }
        timer = setTimeout(function (){
          if(window.scrollY > (document.body.scrollHeight /2)){
            window.scrollTo(0, document.body.scrollHeight);
            vm.setLayoutNav(true);
          }else{
            window.scrollTo(0, 0);
            vm.setLayoutNav(false);
          }
        }, 200)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#home-page{
  section{
    height: 100vh;
    &.section-home{

    }
    &.section-contact{
      position: absolute;
      top: 100vh;
      left:0;
      width: 100%;
    }
  }
}

.home-enter-active, .home-leave-active {
  transition: opacity .5s;
}
.home-enter, .home-leave-active {
  opacity: 0;
  }

</style>
