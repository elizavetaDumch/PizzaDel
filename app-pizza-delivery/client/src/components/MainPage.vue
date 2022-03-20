<template>
   <div>
      <Banner/>
      <Catalog/>
      
   </div>
</template>

<script>

import Catalog from "./Catalog";
import Banner from "./Banner";

export default {
   name: 'MainPage',
   props: {},
   components: {Banner, Catalog},
   data: () =>{
      return {             
      }     
   },   
   methods: {
   }
}
</script>


<style>
</style>