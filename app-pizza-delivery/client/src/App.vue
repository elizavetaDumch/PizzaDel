<template>
  <div id="app"> 
    <Header/>    
    <div class="content">
        <transition name="fade" mode="out-in">
          <router-view> </router-view>
        </transition>
    </div> 
    <Footer/>  
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"


export default {
  name: 'App',
  components: {
     Header, Footer
  }, 
  data: function() {
    return {    
    }    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  padding: 146px 0 0;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
  
</style>
