<template>

   <div id="contact">
      <div class="row contact-body">
         <div class="col-md-1">
         </div>
         <div class="col-md-3 showcase">
            <div class="contact-header">
              <span class="tit">Contact</span>
            </div>
            <div class="cont">
              <span >Hello!</span>
              <p>Let's get in touch, and Step up your vision!</p>
            </div>
         </div>
         <div class="col-md-8">
           <Form></Form>
         </div>
         <TextureGold :mini="true" :islight="true"></TextureGold>
      </div>
   </div>
</template>

<script>
export default {
   mounted: function(){
     this.animateChoices('.contact-header', 0.5, -200);
     this.animateChoices('.cont span', 0.7, '-58vh');
     this.animateChoices('.cont p', 1, -200);
   },
   methods: {
      animateChoices: function(el, scrub, x){
        gsap.from(el, {
         scrollTrigger: {
            trigger: el,
            start: 'center 90%',
            end: 'center bottom',
          //  markers: true,
            toggleActions: "restart none none none",
            scrub: scrub
         },
         x: x,
         duration: 0.5
         });
      }
   }

}
</script>

<style lang="scss">

@import '@/assets/scss/colors.scss';

#contact{
   height: 100vh;
   overflow: hidden;
   .contact-body{
      height: 100%;
      padding-bottom: 30vh;
      background-color: $color-secondary;
      color: $color-primary;
     // width: 100%;
      margin-right: 0;
      .showcase{
        height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
        .contact-header{
          margin-top: 9.8vh;
            .tit{
              font-family: 'din-bold', Arial, Helvetica, sans-serif;
            }
        }
        .cont{
          span{
            font-size: 80px;
            line-height: 7.25rem;
            font-family: 'kate', Arial, Helvetica, sans-serif;
            display: inline-block;
            padding-bottom: 5vh;
          }
          p{
          margin-bottom: 6vh;
          font-size: 18px;
          }
         }
      }
   }
}

@media screen and (min-width:1024px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
              font-size: 80px;
            }
          }
        }
      }
   }
}


@media screen and (min-width:1100px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
               font-size: 90px;
            }
          }
        }
      }
   }
}

@media screen and (min-width:1400px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
              font-size: 110px;
            }

          }
        }
      }
   }
}

@media screen and (min-width:1600px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
              font-size: 130px;
            }

          }
        }
      }
   }
}

@media screen and (min-width:1800px){
   #contact{
      .contact-body{
        .showcase{

          .contact-header{
            .tit{
            }
          }
          .cont{
            span{
              font-size: 150px;
            }
          }
        }
      }
   }
}
</style>