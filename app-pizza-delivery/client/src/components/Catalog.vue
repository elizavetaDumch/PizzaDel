<template>
   <div class="container p-3" >
      <h1>Меню</h1>
      <div class="catalog" >
         <Select
                  @select="filterByCategories" 
               />          
          <div class="row" >          
            <div class="col-12 col-lg-3" v-for="product in filteredProducts"  v-bind:key="product.id">               
               <CatalogItem :product='product' /> 
            </div>
         </div> 
      </div>
   </div>
</template>

<script>

import CatalogItem from "./CatalogItem.vue";
import Pizzas from "../_data/pizzas";
import Select from "./Select.vue"

export default {
   name: 'Catalog',
   props: {},
   components: {CatalogItem, Select},
   data: () =>{
      return {
         products: Pizzas,
         filteredProducts: Pizzas,        
      }     
   },   
   methods: {
    filterByCategories: function (filter) {
       if (filter == "Все") {
         this.filteredProducts = this.products
       } else {
         this.filteredProducts = this.products.filter(product => product.filter == filter)
       }
    },
   }
}
</script>


<style>
      .row-catalog {
        display: grid !important;
        column-gap: 30px;
        row-gap: 40px;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }

      .card {
        display: grid !important;
        grid-auto-flow: row;
        grid-template: auto 1fr minmax(100px, auto) / 1fr;
        grid-template-rows: 250px;
        height: 600px;
      }

      .btn {
        margin: 28px;
      }

      .title {
        margin: 100px 0px 0px 0px ;
      }   

    
      
</style>