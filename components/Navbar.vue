<template>
<nav>
    <div class="burger-menu" @click="showNavbar()">
        <span :class="['burger-top', layoutStateNave ? 'humburger-light' : '']"></span>
        <span :class="['burger-top', layoutStateNave ? 'humburger-light' : '']"></span>
    </div>
    <div
    :class="['navbar-collapsible',
    isNavbar != null ? isNavbar ? 'show' : 'hide' : '',
    isFullNav ? 'show-full' : '',
    layoutStateNave ? 'light' : '']">
      <div class="inner-navbar-container">
          <div class="close-btn" @click="showNavbar()">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="25.91" height="25.91" x="0" y="0" viewBox="0 0 329.26933 329" style="enable-background:new 0 0 512 512"
              xml:space="preserve">
              <g><path xmlns="http://www.w3.org/2000/svg" d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
              :fill="layoutStateNave ? '#f8f0e3' : '#f13e16'" data-original="#000000" style="" class=""/></g></svg>
          </div>
          <div class="nav-links">
              <ul>
                  <li @click="showFullNavbar()">
                      <NuxtLink :class="layoutStateNave ? 'link-light' : '' " exact to="/">Home</NuxtLink>
                  </li>
                  <li @click="showFullNavbar()">
                      <NuxtLink :class="layoutStateNave ? 'link-light' : '' " to="/portfolio">portfolio</NuxtLink>
                  </li>
                  <li @click="showFullNavbar()">
                      <NuxtLink :class="layoutStateNave ? 'link-light' : '' " to="/contact">contact</NuxtLink>
                  </li>
                  <li @click="showFullNavbar()">
                      <NuxtLink :class="layoutStateNave ? 'link-light' : '' " to="/about">about</NuxtLink>
                  </li>
              </ul>
          </div>
          <div class="linkedin">
              <svg id="Layer" enable-background="new 0 0 64 64" height="39.9" viewBox="0 0 64 64" width="39.9"
              xmlns="http://www.w3.org/2000/svg">
                <path :class="layoutStateNave ? 'svg-light': 'svg-linked'" d="m42 8h-20c-7.72 0-14 6.28-14 14v20c0 7.72 6.28 14 14 14h20c7.72 0 14-6.28 14-14v-20c0-7.72-6.28-14-14-14zm10 34c0 5.514-4.486 10-10 10h-20c-5.514 0-10-4.486-10-10v-20c0-5.514 4.486-10 10-10h20c5.514 0 10 4.486 10 10z"/>
                <path :class="layoutStateNave ? 'svg-light': 'svg-linked'" d="m24 27c-1.104 0-2 .896-2 2v15c0 1.104.896 2 2 2s2-.896 2-2v-15c0-1.104-.896-2-2-2z"/>
                <path :class="layoutStateNave ? 'svg-light': 'svg-linked'" d="m38 29h-2c-.702 0-1.373.128-2 .35v-.35c0-1.104-.896-2-2-2s-2 .896-2 2v6 9c0 1.104.896 2 2 2s2-.896 2-2v-9c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v9c0 1.104.896 2 2 2s2-.896 2-2v-9c0-3.309-2.691-6-6-6z"/>
                <path :class="layoutStateNave ? 'svg-light': 'svg-linked'" d="m24 18c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
              </svg>
          </div>
      </div>
    </div>
</nav>


</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
    data: function(){
        return {
            isNavbar: false,
            isFullNav: null,
        }
    },
    computed: {
        ...mapState(['layoutStateNave'])
    },
    methods: {
        ...mapMutations(['setLayoutNav', 'setLayoutState']),
        showNavbar: function(){
            if(this.isNavbar == null){
                this.isNavbar = true;
                this.isFullNav = null;
            }else{
                this.isNavbar = !this.isNavbar;
            }
        },
        showFullNavbar: function(){
            let vm = this;
            if(this.isFullNav == null){
                this.isFullNav = true;
                this.isNavbar = null;
            }else{
                this.isFullNav = !this.isFullNav;
            }
            setTimeout(function(){
                vm.setLayoutNav();
            }, 1400)
            setTimeout(function(){
                vm.setLayoutState();
            }, 300)

        }
    }

}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/colors.scss';
nav{
    height: 100%;
    position: relative;
    .burger-menu{
        position: absolute;
        top: 10.8vh;
        right: 4.375vw;
        cursor: pointer;
        .burger-top, .burger-bottom{
            display: block;
            height: 5px;
            width: 31px;
            border-radius: 5px;
            margin-bottom: 5px;
            background-color: $color-secondary;
            &.humburger-light{
                background-color: $color-primary;
            }
        }
    }
    .navbar-collapsible{
    background-color: $color-secondary;
    height: 100vh;
    color: $color-primary;
    width: 100vw;
    position: absolute;
    display: flex;
    right: -100;
    top: 0;
    &.light{
        background-color: $color-primary;
        color: $color-secondary;
    }
    &.show{
        animation: collapsible-show 0.5s forwards;
    }
    &.hide{
        animation: collapsible-hide 0.5s forwards;
    }
    &.show-full{
        animation: collapsible-show-full 1.4s forwards;
    }
    .inner-navbar-container{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 10vw;
        padding: 10.2vh 0;
        .close-btn{
          cursor: pointer;
        }
        .nav-links{
            color: $color-svg;
            ul{
                padding: 0;
                li{
                    transform: rotate(-90deg);
                    margin: 70px 0;
                    a{
                        font-size: 1rem;
                        color: $color-svg;
                        font-family: 'din-bold';
                        &.nuxt-link-active{
                            color: $color-primary;
                        }
                        &.link-light{
                            color: $color-ancor;
                            &.nuxt-link-active{
                                color: $color-secondary;
                            }
                        }
                    }
                }
            }
        }
        .linkedin{
            svg{
                .svg-linked{
                    fill: $color-primary;
                }
                .svg-light{
                    fill: $color-secondary;
                }
            }
        }
    }

   }
}

@keyframes collapsible-show{
    0%{
      right: -100vw;
    }
    100%{
        right: -90vw;
    }
}

@keyframes collapsible-hide{
    0%{
      right: -90vw;
    }
    100%{
        right: -100vw;
    }
}

@keyframes collapsible-show-full{
    0%{
      right: -100vw;
    }
    100%{
        right: 100vw;
    }
}


</style>