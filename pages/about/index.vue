<template>
  <div>
      About
  </div>
</template>

<script>

import {mapMutations} from 'vuex';

export default {
 mounted: function(){
      this.setLayoutState();
  },
  methods: {
    ...mapMutations(['setLayoutState'])
  }
}
</script>

<style>

</style>