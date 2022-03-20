<template>
  <div class="container p-6">
    <h1>Оформление заказа</h1>
    <h5>Введите ваши данные</h5>
    <div class="orderForm">
      <form>
        <div class="form-row mt-5">
          <div class="form-group col-md-3">
            <label for="firstName">{{ form.firstName.label }}</label>
            <input
              required
              type="text"
              class="form-control"
              id="firstName"
              onkeyup="this.value = this.value.replace (/[^a-zA-ZА-Яа-яЁё]/g, '')"
              v-model="form.firstName.value"
            />
          </div>
          <div class="form-group col-md-3">
            <label for="secondName">{{ form.secondName.label }}</label>
            <input
              type="text"
              class="form-control"
              id="secondName"
              onkeyup="this.value = this.value.replace (/[^a-zA-ZА-Яа-яЁё]/g, '')"
              v-model="form.secondName.value"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="userPhoneNumber">{{
              form.userPhoneNumber.label
            }}</label>
            <input
              required
              type="tel"
              class="form-control"
              id="userPhoneNumber"
              placeholder="+375..."
              maxlength="13"
              onkeyup="this.value = this.value.replace (/[^0-9+]/g, '')"
              v-model="form.userPhoneNumber.value"
            />
          </div>
          <div class="form-group col-md-3">
            <label for="userCity">{{ form.userCity.label }}</label>           
            <select
              required
              id="userCity"
              class="form-control"
              v-model="form.userCity.value">
              <option
                v-for="(city, index) in cities"
                :value="city.value"
                :key="index">
                {{ city.nameOfCity }}
              </option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="street">{{ form.street.label }}</label>
            <input
              required
              type="text"
              class="form-control"
              id="street"
              onkeyup="this.value = this.value.replace (/[^A-Za-z]/g\s, '')"
              v-model="form.street.value"
            />
          </div>
          <div class="form-group col-md-1">
            <label for="numOfHouse">{{ form.numOfHouse.label }}</label>
            <input
              required
              type="text"
              class="form-control"
              id="numOfHouse"
              v-model="form.numOfHouse.value"
            />
          </div>
          <div class="form-group col-md-1">
            <label for="numOfFlat">{{ form.numOfFlat.label }}</label>
            <input
              required
              type="text"
              class="form-control"
              id="numOfFlat"
              onkeyup="this.value = this.value.replace (/[^0-9+]/g, '')"
              v-model="form.numOfFlat.value"
            />
          </div>
        </div>

        <fieldset>
          <div class="payment">
            <div class="form-row">
              <div class="form-group col-md-1">
                <legend class="col-form-label col-sm-2 pt-0">
                  Выберите способ оплаты:
                </legend>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="cashPayment"
                      value="cash"
                      v-model="form.choisePayment.value"
                      checked
                    />
                    <label class="form-check-label" for="form.cashPayment">
                      Наличными
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="byCard"
                      value="card"
                      v-model="form.choisePayment.value"
                    />
                    <label class="form-check-label" for="form.byCard">
                      Картой
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <p class="dopInfo" v-show="form.choisePayment.value === 'card'">
              *Оплата картой курьеру
            </p>            
          </div>
        </fieldset>
        <div>
          <ul>
            <li v-for="(error, key) in errors" v-bind:key="key">
              {{ error }}
            </li>
          </ul>
        </div>
        <div class="py-2 pb-4">
          <button class="shine-button" @click="order">Заказать</button>  
        </div>      
        <ModalAcceptOrder v-if="modalVisible" @closeModal="showModal()" />
      </form>
    </div>
  </div>
</template>

<script>

import ModalAcceptOrder from "./ModalAcceptOrder.vue"
import Validator from "../_util/Validator"
import OrderService from '../services/OrderService'

export default {
  name: "Order",
  props: {},
  components: { ModalAcceptOrder },
  data: () => {
    return {
      form: {
        firstName: {
          value: "",
          label: "Имя",
          validation: {
            required: true,
            min: 3,
          },
        },
        secondName: {
          value: "",
          label: "Фамилия",
          validation: {},
        },
        userPhoneNumber: {
          value: "",
          label: "Телефон",
          validation: {
            required: true,
            min: 3,
          },
        },
        userCity: {
          value: "Витебск",
          label: "Город",
          validation: {
            required: true,
          },
        },
        street: {
          value: "",
          label: "Улица",
          validation: {
            required: true,
            min: 3,
          },
        },
        numOfHouse: {
          value: "",
          label: "Дом",
          validation: {
            required: true,
            min: 3,
          },
        },
        numOfFlat: {
          value: "",
          label: "Квартира",
          validation: {
            required: true,
            min: 3,
          },
        },
        choisePayment: { value: "cash" },
        activeInfo: false,
      },
      
      cities: [
        {
          nameOfCity: "Могилёв",
          value: "Mogilev",
        },
        {
          nameOfCity: "Минск",
          value: "Minsk",
        },
        {
          nameOfCity: "Витебск",
          value: "Vitebsk",
        },
        {
          nameOfCity: "Гомель",
          value: "Gomel",
        },
      ],
      modalVisible: false,
      errors: [],
    };
  },
  methods: {
    showSuccessModal: function () {
      this.modalVisible = !this.modalVisible
    },
    order: function () {
      if (Validator.validate(this.form)) {
        const order = {
          "firstName": this.form.firstName.value,
          "secondName": this.form.secondName.value,
          "userPhoneNumber": this.form.userPhoneNumber.value,
          "userCity": this.form.userCity.value,
          "street": this.form.street.value,
          "numOfHouse": this.form.numOfHouse.value,
          "numOfFlat": this.form.numOfFlat.value,
          "choisePayment": this.form.choisePayment.value,
          "pizzas": this.$store.state.cart
        }
        OrderService
          .createOrder(order)
          .then(() => {  
            this.showSuccessModal()
          })
          .catch(error => {
            alert(error.response.data.error)
          })        
      } else {
        this.errors = Validator.errors
      }
    },
  },
};
</script>


<style scoped>
.orderForm {
  min-height: 500px
}

#userPhoneNumber {
  /* для того, чтобы убрать стрелки с поля*/
  -moz-appearance: textfield;
}
#userPhoneNumber::-webkit-inner-spin-button {
  display: none;
}
#okno {
  position: absolute;
  top: 100px;
  left: 200px;
  right: 200px;
  bottom: 100px;
  outline: 1px solid;
}
.dopInfo {
  /* display: flex;
  flex-direction: row;*/
  margin-left: 15px;
  text-align: left;
  color: gray;
}

body {
  background: #ffbfbe;
}
.shine-button {
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  border: 2px solid #e2552a;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  color: #fe6637;
  transition: 0.2s ease-in-out;
}
.shine-button:before {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 50px;
  width: 50px;
  position: absolute;
  top: -8px;
  left: -75px;
  transform: skewX(-45deg);
}
.shine-button:hover {
  background: #e75b30;
  color: #fff;
}
.shine-button:hover:before {
  left: 150px;
  transition: 0.5s ease-in-out;
}

</style>