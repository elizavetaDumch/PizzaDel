<template>

<div class="card" style="width: 16rem" >
  <img class="card-img-top" :src="product.img" :alt="product.name">
  <div class="card-body">
    <h5 class="card-title">
      <h4 :href="product.url">
         {{product.name}} 
      </h4>
    </h5>
    <p class="card-text">
      {{product.composition}}
    </p>   
  
  </div>

    <div class="title">
       <h5>{{product.price}} руб </h5>
    </div>
    <p button type="button" class="btn btn-outline-danger" @click="addToCart">Добавить в корзину</p>

</div>
</template>

<script>

export default {
   name: 'CatalogItem',
   props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
   },   
   methods: {      
      addToCart: function () {
         this.$store.commit('addToCart', this.product);       
      },
   },
}

</script>


<style> 
.card-img-top:hover {
    transform:scale(1.15);
    transition: all 1s ease 0s;
}
.card-img-top {   
    display:flex;
    position: relative; 
    transition: all 1s ease 0s;    
}

body {
  background: #ffffff;
}
.shine-button {
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  margin: 10px 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid #fa6e44;
  border-radius: 8px;
  font-family: 'Montserrat', sans-serif;
  color: #fe6637;
  transition: .2s ease-in-out;
  
}
.shine-button:before {
  content: "";
  background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
  height: 50px;
  width: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
.shine-button:hover {
  background: #ff8d6a;
  color: #fff;
}
.shine-button:hover:before {
  left: 150px;
  transition: .5s ease-in-out;
}

</style>