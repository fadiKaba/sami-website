<template>
   <div id="portfolio">
      <div class="portfolio-header">
         <span>portfolio</span>
      </div>
      <div class="portfolio-body">
         <div class="col-md-3 showcase">
            <ul>
                <li>
                    <NuxtLink :class="layoutState ? 'link-light' : ''" to="#"><span></span>Ui-Design</NuxtLink>
                </li>
                <li>
                    <NuxtLink :class="layoutState ? 'link-light' : ''" to="#"><span></span>Print</NuxtLink>
                </li>
                <li>
                    <NuxtLink :class="layoutState ? 'link-light' : ''" to="#"><span></span>Video Animation</NuxtLink>
                </li>
                <li>
                    <NuxtLink :class="layoutState ? 'link-light' : ''" to="#"><span></span>Illustration</NuxtLink>
                </li>
            </ul>
         </div>
      </div>
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

<style lang="scss">

@import '@/assets/scss/colors.scss';

#portfolio{
   height: 100%;
   .portfolio-header{
      font-family: 'din-bold', Arial, Helvetica, sans-serif;
      padding-top: 9.8vh;
   }
   .portfolio-body{
      height: 100%;
      padding-bottom: 15vh;
      .showcase{
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         white-space: nowrap;
         ul{
             z-index: 3;
            li{
                a{
                    font-family: 'kate', Arial, Helvetica, sans-serif;
                    font-size: 60px;
                    line-height: 6rem;
                    color: $color-secondary;
                    transition: 0.3s;
                    position: relative;
                    span{
                       position: absolute;
                        top:60%;
                        left:0;
                        height: 10%;
                        width: 0%;
                        background-color: $color-secondary;
                        transition: width 0.5s;
                    }
                    &:hover span{
                            width: 110%;
                    }
                    &.link-light{
                        span{
                            background-color: $color-primary;
                        }
                        color: $color-primary;
                    }
                }
            }
        }
      }
   }
}

@media screen and (min-width:1024px){
   #portfolio{
      .portfolio-body{
         // padding-bottom: 10vh;
         .showcase{
            ul{
                li{
                    a{
                      font-size: 60px;
                      line-height: 5.5rem;
                    }
                }
            }
         }
      }
   }
}


@media screen and (min-width:1100px){
   #portfolio{
      .portfolio-body{
         // padding-bottom: 10vh;
         .showcase{
            ul{
                li{
                    a{
                      font-size: 65px;
                      line-height: 6rem;
                    }
                }
            }
         }
      }
   }
}

@media screen and (min-width:1440px){
   #portfolio{
      .portfolio-body{
         // padding-bottom: 10vh;
         .showcase{
            ul{
                li{
                    a{
                      font-size: 70px;
                      line-height: 6.7rem;
                    }
                }
            }
         }
      }
   }
}

@media screen and (min-width:1680px){
   #portfolio{
      .portfolio-body{
         .showcase{
            ul{
                li{
                    a{
                      font-size: 80px;
                      line-height: 8rem;
                    }
                }
            }
         }
      }
   }
}

@media screen and (min-width:1920px){
   #portfolio{
      .home-body{
          padding-bottom: 14vh;
         .showcase{
            ul{
                li{
                    a{
                      font-size: 100px;
                      line-height: 19vh;
                    }
                }
            }
         }
      }
   }
}
</style>