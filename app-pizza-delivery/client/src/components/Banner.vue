<template>
<div class="banner">
  <carousel :perPage="1" :autoplay="true" :navigationEnabled="true" > 
    <slide v-for="image in images" v-bind:key="image">
      <img :src="image" class="w-100 height-crl">
    </slide>
  </carousel>
</div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'

export default {
    name: 'Banner',
    components: {
      Carousel,
      Slide
    },
    data: function() {
      return {
        images: [
          require('@/assets/banner/banner_1.jpeg'),
          require('@/assets/banner/banner_2.jpeg'),
          require('@/assets/banner/banner_3.jpeg'),        
        ]
      }
    },  
}
</script>

<style> 
  .VueCarousel-navigation-next {
      right: 50px !important;
  }
  .VueCarousel-navigation-prev {
      left: 50px !important;
  }

  .height-crl
  {
      height: 530px;
  }
  .VueCarousel-dot-container {
      display: block !important;
      position: relative !important;
      margin-top: -60px !important;
  }
 
</style>