<template>
  <div id="form-container">
    <form>
        <div class="mb-3" id="name-container">
            <label for="exampleInputName1" id="name-label" class="form-label">Name</label>
            <input type="text" class="form-control" id="exampleInputName1">
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" id="email-label" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" id="message-label" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        <button type="submit" id="sub-btn" class="btn mt-4">Send</button>
    </form>
  </div>
</template>

<script>
export default {
    mounted: function(){
      this.animateChoices('#name-label', 0.4, '90vh');
      this.animateChoices('#exampleInputName1', 0.5, '90vh');
      this.animateChoices('#email-label', 0.6, '90vh');
      this.animateChoices('#exampleInputEmail1', 0.7, '90vh');
      this.animateChoices('#message-label', 0.8, '90vh');
      this.animateChoices('#exampleFormControlTextarea1', 0.9, '90vh');
      this.animateChoices('#sub-btn', 1, '90vh');
    },
    methods: {
        animateChoices: function(el, scrub, x){
        gsap.from(el, {
         scrollTrigger: {
            trigger: el,
            start: 'center 80%',
            end: 'center bottom',
           // markers: true,
            toggleActions: "restart none none none",
            scrub: scrub,
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

 #form-container{
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-end;
     width:25vw;
     margin: 0 auto;
     margin-top:4vh;
    form{
         z-index: 2;
        input, textarea{
            background-color: rgba($color-svg, 0.3);
        }
        button{
            background-color: $color-primary;
            color: $color-secondary;
            width: 100%;
        }
    }
 }
</style>