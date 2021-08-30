<template>
<nav>
    <div class="burger-menu" @click="showNavbar()">
        <span
        :class="
        ['burger-top',
        layoutStateNave ? 'humburger-light' : '',
        isBurgerTransformed ? 'burger-top-transform' : 'burger-top-transform-reverse']"></span>
        <span
        :class="
        ['burger-bottom',
        layoutStateNave ? 'humburger-light' : '',
        isBurgerTransformed ? 'burger-bottom-transform' : 'burger-bottom-transform-reverse']"></span>
    </div>
    <div
    :class="['navbar-collapsible',
    isNavbar != null ? isNavbar ? 'show' : 'hide' : '',
    isFullNav ? 'show-full' : '',
    layoutStateNave ? 'light' : '']">
      <div class="inner-navbar-container">
          <div class="close-btn" @click="showNavbar()">
                <div class="burger-menu-in">
                    <span
                    :class="
                    ['burger-top',
                    !layoutStateNave ? 'humburger-light' : '',
                    isBurgerTransformed ? 'burger-top-transform' : 'burger-top-transform-reverse']"></span>
                    <span
                    :class="
                    ['burger-bottom',
                    !layoutStateNave ? 'humburger-light' : '',
                    isBurgerTransformed ? 'burger-bottom-transform' : 'burger-bottom-transform-reverse']"></span>
                </div>
          </div>
          <div class="nav-links">
              <ul>
                  <li @click="showFullNavbar(false)">
                      <NuxtLink :class="layoutStateNave ? 'link-light' : '' " exact to="/">Home</NuxtLink>
                  </li>
                  <li @click="showFullNavbar(true)">
                      <NuxtLink :class="layoutStateNave ? 'link-light' : '' " to="/portfolio">portfolio</NuxtLink>
                  </li>
                  <!-- <li @click="showFullNavbar()">
                      <NuxtLink :class="layoutStateNave ? 'link-light' : '' " to="/contact">contact</NuxtLink>
                  </li> -->
                  <li @click="showFullNavbar(false)">
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
            isBurgerTransformed: false,
        }
    },
    mounted: function(){
        this.navStateOnScroll();
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
            this.isBurgerTransformed = !this.isBurgerTransformed;
        },
        showFullNavbar: function(changeState){
            let vm = this;
            if(this.isFullNav == null){
                this.isFullNav = true;
                this.isNavbar = null;
            }else{
                this.isFullNav = !this.isFullNav;
            }
            setTimeout(function(){
            vm.setLayoutNav(changeState);
            }, 500)
            setTimeout(function(){
                vm.setLayoutState(changeState);
            }, 500)
            this.isBurgerTransformed = !this.isBurgerTransformed;
        },
        navStateOnScroll: function(){
            let vm = this;
            let height = document.body.clientHeight
            window.onscroll = function(){
            console.log(((height * 2) / 3))
            if(window.scrollY > ((height * 2.7) / 3)){
                vm.setLayoutNav(true)
            }else{
                vm.setLayoutNav(false)
            }
          }
        }
    }

}
</script>

<style lang="scss" scoped>

@import '@/assets/scss/colors.scss';

$links-font-size: 1rem;

nav{
    height: 100%;
    position: fixed;
    z-index: 3;
    .burger-menu{
        position: fixed;
        top: 10.5vh;
        right: 4.375vw;
        cursor: pointer;
        .burger-top, .burger-bottom{
            display: block;
            height: 4px;
            width: 35px;
            border-radius: 5px;
            margin-bottom: 5px;
            background-color: $color-secondary;
            &.humburger-light{
                background-color: $color-primary;
            }
        }
        .burger-top-transform{
            animation: menu-animation-top 1s ease forwards;
        }
        .burger-bottom-transform{
            animation: menu-animation-bottom 1s ease forwards;
        }
        .burger-top-transform-reverse{
            animation: menu-animation-top-reverse 1s ease forwards;
        }
        .burger-bottom-transform-reverse{
            animation: menu-animation-bottom-reverse 1s ease forwards;
        }
    }
    .navbar-collapsible{
    box-shadow: 5px 0px 15px $color-ancor ;
    background-color: $color-secondary;
    height: 100vh;
    color: $color-primary;
    width: 100vw;
    position: fixed;
    display: flex;
    right: -100;
    top: 0;
    transition: 1s;
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
        animation: collapsible-show-full 0.5s ease-out forwards;
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
                li{
                    transform: rotate(-90deg);
                    margin: 70px 0;
                    &:hover{
                        animation: shake 0.3s forwards;
                    }
                    a{
                        font-size: $links-font-size;
                        color: $color-svg;
                        font-family: 'din';
                        transition: 0.2s;
                        &:hover{
                            color: $color-primary;
                            font-family: 'din-bold';
                        }
                        &.nuxt-link-active{
                            color: $color-primary;
                            font-family: 'din-bold';
                        }
                        &.link-light{
                            color: $color-ancor;
                            &.nuxt-link-active{
                                color: $color-secondary;
                            }
                            &:hover{
                                color: $color-light;
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

.burger-menu-in{
    cursor: pointer;
    .burger-top, .burger-bottom{
        display: block;
        height: 4px;
        width: 35px;
        border-radius: 5px;
        margin-bottom: 5px;
        background-color: $color-secondary;
        &.humburger-light{
            background-color: $color-primary;
        }
    }
    .burger-top-transform{
        animation: menu-animation-top 1s ease forwards;
    }
    .burger-bottom-transform{
        animation: menu-animation-bottom 1s ease forwards;
    }
    .burger-top-transform-reverse{
        animation: menu-animation-top-reverse 1s ease forwards;
    }
    .burger-bottom-transform-reverse{
        animation: menu-animation-bottom-reverse 1s ease forwards;
    }
}

@keyframes hover-animation{
    0%{
        transform: rotate(-5deg);
        color: red;
    }
    100%{
        transform: rotate(5deg);
        color: green;
    }
}

@keyframes menu-animation-top {
   from{
       transform: rotate(0);
   }
   to{
       transform: rotate(47deg)
   }
}

@keyframes menu-animation-bottom {
   from{
       transform: translateY(0) rotate(0);
   }
   to{
       transform: translateY(-8.5px) rotate(-47deg);
   }
}

@keyframes menu-animation-top-reverse {
   from{
       transform: rotate(50deg);
   }
   to{
       transform: rotate(0)
   }
}

@keyframes menu-animation-bottom-reverse {
   from{
       transform: translateY(-8.5px) rotate(-50deg);
   }
   to{
       transform: translateY(0) rotate(0);
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
      right: -90vw;

    }
    98%{
      opacity: 1;
      right: 0vw;
    }
    100%{
      right: -100vw;
      opacity: 0;
    }
}


</style>