<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg" data-spy="affix" >
    <a class="navbar-brand" href="#">
      <img
        src="@/assets/logo/myLogo3.png"
        width="220"
        height="120"
        class="d-inline-block align-top"
        alt=""
      />
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    

    <div class="collapse navbar-collapse ml-lg-5" id="navbarNavAltMarkup">
      <div class="navbar-nav mt-4">
        <router-link :to="{name: 'MainPage'}">
          <a class="nav-item nav-link mt-4">            
            Главная <span class="sr-only"></span>
          </a>
        </router-link>

        <router-link :to="{name: 'Cart'}">         
          <a class="nav-item nav-link ml-2 " >Корзина
            <b-button class="cartButton ml-1"
              pill
              variant="outline-secondary "                    
              >{{cartProducts.length}}
            </b-button>           
          </a>
           
        </router-link>
       
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {},
  data: () => {
    return {};
  },
  computed: {
    cartProducts: function () {
      return this.$store.state.cart;
    }
  }
};

</script>

<style>
#navbarNavAltMarkup {
  font-size: 180%;
}
.navbar {
      position: fixed !important;
      top: 0;
      width: 100%;
      z-index: 1 !important;
  }

  
</style>

