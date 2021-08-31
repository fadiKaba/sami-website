<template>
   <div id="about">
      <div class="img-container"></div>
      <div class="about-header">
         <span>about</span>
      </div>
      <div class="about-body">
         <div class="showcase">
             <div class="row">

             </div>
         </div>
      </div>
   </div>
</template>

<script>
//<img src="@/assets/imgs/sami_photo.png" alt="Sami photo">
import { mapState } from 'vuex';

export default {

computed: {
    ...mapState(['layoutState'])
}

}
</script>

<style lang="scss">

@import '@/assets/scss/colors.scss';

#about{
   height: 100%;
   .img-container{
      position: absolute;
      top: -9vh;
      left: 27vw;
      width: 608px;
      height: 788px;
      overflow: hidden;
      border-radius: 0 0 0 565px;
      background-image: url('@/assets/imgs/sami_photo.png');
      background-color: $color-primary;
      background-blend-mode: multiply;
      background-size: cover;
      background-position: center;
    //   &::after{
    //       content: '';
    //       background-color: rgba($color-primary, 0.4);
    //       width: 100%;
    //       height: 100%;
    //       position: absolute;
    //       top:0;
    //       left:0;
    //   }
        img{
            width: 100%;
        }
    }
   .about-header{
      font-family: 'din-bold', Arial, Helvetica, sans-serif;
      padding-top: 9.8vh;
   }
   .about-body{
      height: 100%;
      padding-bottom: 20vh;
      .showcase{
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         white-space: nowrap;
      }
   }
}

@media screen and (min-width:1024px){
   #about{
    .img-container{
      max-width: 608px;
      overflow: hidden;
      border-radius: 0 0 0 565px;
        img{
            width: 100%;
        }
      }
      .about-body{

      }
   }
}


@media screen and (min-width:1100px){
   #about{
    .img-container{
      max-width: 608px;
      overflow: hidden;
      border-radius: 0 0 0 565px;
        img{
            width: 100%;
        }
      }
      .about-body{
         .showcase{

         }
      }
   }
}

@media screen and (min-width:1440px){
   #about{
    .img-container{
      max-width: 608px;
      overflow: hidden;
      border-radius: 0 0 0 565px;
        img{
            width: 100%;
        }
      }
      .about-body{
         .showcase{

         }
      }
   }
}

@media screen and (min-width:1680px){
   #about{
    .img-container{
      max-width: 608px;
      overflow: hidden;
      border-radius: 0 0 0 565px;
        img{
            width: 100%;
        }
      }
      .about-body{
         .showcase{

         }
      }
   }
}

@media screen and (min-width:1920px){
   #about{
    .img-container{
      max-width: 608px;
      overflow: hidden;
      border-radius: 0 0 0 565px;
        img{
            width: 100%;
        }
      }
      .about-body{
         .showcase{

         }
      }
   }
}
</style>