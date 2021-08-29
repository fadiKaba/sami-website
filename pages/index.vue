<template>
  <Home v-if="render1"></Home>
</template>

<script>

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

  },
  methods: {
    renderComponent: function(){
      let vm = this;
      setTimeout(function(){
        vm.render1 = true;
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
