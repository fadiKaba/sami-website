<template>
   <div id="home">
      <div class="home-header">
         <span>home</span>
      </div>
      <div class="home-body">
         <div class="col-md-3 showcase">
            <h1>Sami Kaba</h1>
            <p>I'm a visual/UI designer
               who passionately creates
               and endlessly innovates</p>
         </div>
      </div>
   </div>
</template>

<script>
export default {


}
</script>

<style lang="scss">

#home{
   height: 100%;
   .home-header{
      display: flex;
      height: 10vh;
      align-items: flex-end;
      font-family: 'din', Arial, Helvetica, sans-serif;
   }
   .home-body{
      height: 100%;
      .showcase{
         height: 100%;
         display: flex;
         flex-direction: column;
         justify-content: flex-end;
         padding-bottom: 10rem;
         h1{
            font-size: 9.375rem;
            line-height: 11.25rem;
            font-family: 'kate', Arial, Helvetica, sans-serif;
            margin-bottom: 2rem;
         }
         p{
            font-size: 1.125rem;
         }

      }
   }
}

</style>