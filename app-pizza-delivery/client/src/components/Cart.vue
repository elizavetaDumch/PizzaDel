<template>
  <div class="container p-4">
    <div class="cart">
      <h2>Корзина</h2>
      <div class="cart-item">
        <div v-for="(product, index) in products" v-bind:key="product.id">
          <div class="row">
            <div class="col-auto">
              <img :src="product.img" width="200" class="rounded" />
            </div>
            <div class="col text-left">
              <div class="py-4">
                <h3 :href="product.url">
                  {{ product.name }}
                </h3>
              </div>
              <div>
                <span class="muted">Cтоимость:</span> {{ product.price }} руб
              </div>
              <br />
              <div class="cart-item-quantity">
                <p>Количество:</p>
                <div>
                  <b-button
                    pill
                    variant="outline-secondary "
                    @click="decreaseQuantity(index)"
                    >-</b-button
                  >
                  {{ product.quantity }}
                  <b-button
                    pill
                    variant="outline-secondary"
                    @click="increaseQuantity(index)"
                    >+</b-button
                  >
                </div>
              </div>

              <div>
                <button
                  type="button"
                  class="btn btn-danger ml-5"
                  @click="removeProduct(index)"
                >
                  Удалить
                </button>
              </div>
              <br />

              <div class="dop-ingredients">
                <h5>Дополнительные ингредиенты:</h5>
                <div class="form-check" v-for="(ingredient, index) in dopIngredients" v-bind:key="index">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="product.selectedIngredients"
                    :value="ingredient.price"                    
                    :id="`ing${product.id}${index}`"
                  />
                  <label class="form-check-label" :for="`ing${product.id}${index}`">
                    {{ingredient.name}} ({{ingredient.price}} руб)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group col-md-2 mt-3 ml-3">
        <label for="inputPromokod">Промокод</label>
        <input type="text" class="form-control" v-model="promocode" />
        <button
          type="button"
          class="btn btn-light ml-4"
          @click="checkPromokod()"
        >
          Применить
        </button>
        <p class="trueMessagePromokode ml-1" v-show="truePromokodeMessage">
          Промокод применён
        </p>
        <p class="falseMessagePromokode" v-show="falsePromokodeMessage">
          Промокода не найдено
        </p>
      </div>
      <div class="totalSum">
        <p>Итоговая стоимость:</p>
        <p class="totalCost ml-1">{{ cartTotalCost }} pуб</p>
      </div>

      <router-link v-if="products.length > 0" :to="{ name: 'Order' }">
        <a button type="button" class="btn btn-outline-danger">
          Перейти к оформлению заказа
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
//import { mapState } from 'vuex'
import coupons from "../_data/coupons";

export default {
  name: "Cart",
  props: {},
  data: () => {
    return {      
      coupons: coupons,
      promocode: null,
      acceptedPromocode: {},
      truePromokodeMessage: false,
      falsePromokodeMessage: false,
      dopIngredients: [
        {
          name: "Сыр чеддер",
          value: "Chedder cheese",
          price: 3.80
        },
        {
          name: "Перец халапеньо",
          value: "Jalapeno pepper",
          price: 2.5
        },
        {
          name: "Острая курочка",
          value: "Spicy chicken",
          price:3
        },
        {
          name: "Томат",
          value: "Tomato",
          price: 2
        }
      ],
    };
  },
  watch: {
    acceptedPromocode: {
      handler(newValue) {
        this.$emit("select", newValue);
      },
    },
  },
  computed: {
    products: function () {
      return this.$store.state.cart;
    },
    cartTotalCost: function () {
      let result = [];
      if (this.products.length) {
        for (let product of this.products) {
          result.push(product.price * product.quantity);
        }
        result = result.reduce(function (sum, el, ) {
          return sum + el ;
        });
        result = this.acceptedPromocode.value
          ? (result * (100 - this.acceptedPromocode.value)) / 100
          : result;
        
        for (let product of this.products) {          
          product.selectedIngredients.forEach(ingredientPrice => {
            result += ingredientPrice
          })
        }
        return result;
      } else {
        return 0;
      }
    },   
  },
  methods: {
    removeProduct: function (index) {
      this.$store.commit("removeProduct", index);
      //this.$emit('onAddToCart', this.product.id)
    },
    /*removeProduct: function(index) {
      this.products.splice(index, 1)
    },*/
    decreaseQuantity: function (index) {
      this.$store.commit("decreaseQuantity", index);
    },
    increaseQuantity: function (index) {
      this.$store.commit("increaseQuantity", index);
    },
    checkPromokod: function () {
      let existedCoupon = this.coupons.find(
        (coupon) => this.promocode == coupon.code
      );
      if (existedCoupon) {
        this.acceptedPromocode = existedCoupon;
        this.truePromokodeMessage = true;   
        this.falsePromokodeMessage = false;
      } else {
        this.acceptedPromocode = {};
        this.truePromokodeMessage = false;
        this.falsePromokodeMessage = true;
      }
    },   
  },
};
</script>

<style scoped>
.cart {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: padding * 2;
  margin-bottom: margin * 2;
}
.totalSum {
  display: flex;
  justify-content: center;
  font-size: 20px;
}
.totalCost {
  margin-left: margin * 2;
}
.trueMessagePromokode {
  color: rgb(23, 181, 23);
}
.falseMessagePromokode {
  color: red;
}
</style>
