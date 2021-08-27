<template>
<div class="svg-texture">
    <svg xmlns="http://www.w3.org/2000/svg" width="1709.41" height="1539.504" viewBox="0 0 1709.41 1539.504">
      <g id="Group_33" data-name="Group 33" transform="matrix(-0.966, 0.259, -0.259, -0.966, 1891.101, 1119.959)" opacity="0.5">
        <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(364)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <circle cx="628.5" cy="628.5" r="628.5" stroke="none"/>
          <circle cx="628.5" cy="628.5" r="628" fill="none"/>
        </g>
        <g id="Ellipse_15" data-name="Ellipse 15" transform="translate(318.417 632.508) rotate(-22)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <ellipse cx="626.998" cy="210.5" rx="626.998" ry="210.5" stroke="none"/>
          <ellipse cx="626.998" cy="210.5" rx="626.498" ry="210" fill="none"/>
        </g>
        <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(0 702)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <circle cx="206.5" cy="206.5" r="206.5" stroke="none"/>
          <circle cx="206.5" cy="206.5" r="206" fill="none"/>
        </g>
        <g id="Ellipse_10" data-name="Ellipse 10" transform="translate(1280.274 970.076)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <circle cx="127" cy="127" r="127" stroke="none"/>
          <circle cx="127" cy="127" r="126.5" fill="none"/>
        </g>
        <g id="Ellipse_11" data-name="Ellipse 11" transform="translate(1186.569 1099.826)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <circle cx="51" cy="51" r="51" stroke="none"/>
          <circle cx="51" cy="51" r="50.5" fill="none"/>
        </g>
        <g id="Ellipse_9" data-name="Ellipse 9" transform="translate(260 619)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <circle cx="53" cy="53" r="53" stroke="none"/>
          <circle cx="53" cy="53" r="52.5" fill="none"/>
        </g>
        <g id="Ellipse_14" data-name="Ellipse 14" transform="translate(972 792)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <circle cx="21" cy="21" r="21" stroke="none"/>
          <circle cx="21" cy="21" r="20.5" fill="none"/>
        </g>
        <g id="Ellipse_17" data-name="Ellipse 17" transform="translate(491 175)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <circle cx="33.5" cy="33.5" r="33.5" stroke="none"/>
          <circle cx="33.5" cy="33.5" r="33" fill="none"/>
        </g>
        <g id="Ellipse_16" data-name="Ellipse 16" transform="translate(1198 242)" fill="none" :stroke=" layoutState ? '#d8b281' :'#f8f0e3'" stroke-width="1">
          <circle cx="55.5" cy="55.5" r="55.5" stroke="none"/>
          <circle cx="55.5" cy="55.5" r="55" fill="none"/>
        </g>
      </g>
  </svg>
</div>
</template>

<script>

import { mapState } from 'vuex';

export default {

  computed: {
    ...mapState(['layoutState'])
  }

}
</script>

<style lang="scss" scoped>

.svg-texture{
  position: absolute;
  top:-48vh;
  left: 23vw;
  height: 148vh;
  width: 77vw;
  overflow: hidden;
  svg{
    width: 83vw;
  }
}


</style>
