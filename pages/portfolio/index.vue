<template>
  <div class="section-portfolio">
    <transition name="portfolio">
    <Portfolio v-if="render"></Portfolio>
    </transition>
  </div>    
</template>

<script>

  export default {
    transition: 'portfolio',
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

.section-portfolio{
  height: 100vh;
}

.portfolio-enter-active, .portfolio-leave-active { 
  transition: opacity .5s; 
}
.portfolio-enter, .portfolio-leave-active { 
  opacity: 0; 
  }

</style>