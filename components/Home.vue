<template>

   <div id="home">
      <div class="home-header">
         <span class="h-el">home</span>
      </div>
      <div class="home-body">
         <div class="col-md-3 showcase">
            <h1 class="h-el">Sami Kaba</h1>
            <p ref="p1" class="h-el">I'm a visual/UI designer <br />
               who passionately creates <br />
               and endlessly innovates</p>
         </div>
      </div>
      <a href="#contact"><img ref="arowd" id="arow-down" src="@/assets/icos/down.png" alt="down"></a>
   </div>
</template>

<script>
export default {
   transition:'home',
   mounted: function(){
   gsap.from('.h-el', {stagger: 0.1, x: '-30vw', duration: 0.3});
   this.arowAnimation();
   },
   methods: {
      arowAnimation: function(){
         const arowDown = this.$refs.arowd;
         let tl = new TimelineMax({repeat: -1})
         .from(arowDown, 1, {y: '-3vh'})
      }
   }

}
</script>

<style lang="scss">

#home{
   height: 100vh;
   .home-header{
      font-family: 'din-bold', Arial, Helvetica, sans-serif;
      padding-top: 9.8vh;
   }
   .home-body{
      height: 100%;
      padding-bottom: 30vh;
      .showcase{
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;

         h1{
            //font-size: 9.375rem;
            font-size: 80px;
            line-height: 7.25rem;
            font-family: 'kate', Arial, Helvetica, sans-serif;
            margin-bottom: 2rem;
         }
         p{
            font-size: 1.125rem;
         }

      }
   }
   #arow-down{
      position: absolute;
      bottom: 1vh;
      left: 49%;
      width: 35px;
      cursor: pointer;
   }
}

.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }

@media screen and (min-width:1024px){
   #home{
      .home-body{
         // padding-bottom: 10vh;
         .showcase{
            h1{

            }
            p{
            }
         }
      }
   }
}


@media screen and (min-width:1100px){
   #home{
      .home-body{
         // padding-bottom: 10vh;
         .showcase{
            h1{
              font-size: 85px;
              line-height: 7.25rem;
            }
            p{
            }
         }
      }
   }
}

@media screen and (min-width:1400px){
   #home{
      .home-body{
         // padding-bottom: 10vh;
         .showcase{
            h1{
              font-size: 100px;
              line-height: 8.25rem;
            }
            p{
            }
         }
      }
   }
}

@media screen and (min-width:1600px){
   #home{
      .home-body{
          padding-bottom: 27vh;
         .showcase{
            h1{
              font-size: 110px;
              line-height: 9.25rem;
            }
            p{

            }
         }
      }
   }
}

@media screen and (min-width:1800px){
   #home{
      .home-body{
         // padding-bottom: 10vh;
         .showcase{
            h1{
               font-size: 150px;
               line-height: 11.25rem;
            }
            p{
               font-size: 1.125rem;
            }
         }
      }
   }
}
</style>