<template>
   <div class='select'>
      <div class="form-group">
         <select class="form-control col-md-2"  v-model="selectedPizzaType">
            <option v-for="pizzaType in pizzaTypes" v-bind:key="pizzaType" v-bind:value="pizzaType">
               {{ pizzaType }}
            </option> 
         </select>
      </div> 
  </div>
</template>

<script>

export default {
   name: "Select",
   props: {
      options: {
         type: Array,
         default() {
            return []
         }
      },
      selected: {
         type: String,
         default: ''
      }
   },
   data() {
      return {
         areOptionsVisible: false,
         pizzaTypes: [
            "Все",
            "Мясная",
            "Вегетарианская",
         ],
         selectedPizzaType: "Все"
      }  
   },
   watch: {
      selectedPizzaType: {
         handler(newValue) {
            this.$emit('select', newValue)
         }
      }
   },   
}
</script>

<style> 
  .select p {
     margin:0;
     width: 20px;
  }
  .select  {
     position:relative;
  }
  .options {
     border: solid 1px;
     position: absolute 1px;
     top:20px;
  }
  .title2 {
     border: solid 1px;
  }
</style>