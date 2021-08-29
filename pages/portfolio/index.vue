<template>
  <Portfolio v-if="render"></Portfolio>
</template>

<script>

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


</style>