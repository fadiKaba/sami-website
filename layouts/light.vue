<template>
<div id="layout-default">
    <TextureGold></TextureGold>
    <div class="row content">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <Nuxt />
        </div>
        <div class="col-md-1">
            <Navbar :light="true"></Navbar>
        </div>
    </div>

</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/colors.scss';

@font-face {
    font-family: 'kate';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~assets/fonts/Kate-Medium.otf') format('truetype');
  }

@font-face {
    font-family: 'din';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~assets/fonts/D-Din.otf') format('truetype');
}

@font-face {
    font-family: 'din-bold';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~assets/fonts/D-Din-Bold.otf') format('truetype');
}

#layout-default{
    background-color: $color-secondary;
    color: $color-primary;
    height: 100vh;
    overflow: hidden;
    font-family: 'din', Arial, Helvetica, sans-serif;
    .content{
        height: 100%;
    }
}

</style>