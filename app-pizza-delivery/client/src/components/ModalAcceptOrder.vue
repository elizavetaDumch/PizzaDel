<template>
   <div class="modalAcceptOrder">
      <div class="modal_header">
         <span class="modalName"> <b>Состояние заказа:</b></span>
         <span>
            <i class="material-icons" @click="closeModal">close</i>
         </span>
      </div>
      <div class="modal_content mt-3"></div>
      <slot> Заказ принят! С вами скоро свяжутся</slot>
      <div class="modal_footer"></div>
      <button type="button" class="btn btn-outline-success mt-3 mb-2" @click="closeModal">Ок</button>
   </div>
</template>
 
<script>
    export default {
        name: "ModalAcceptOrder",
        data: function () {
            return {
                show: false
            }
        },
        methods: {
            closeModal: function () {
                this.$router.push({ path: '/' })
            }
        }
    }
</script>
 
<style >
   .modalAcceptOrder {      
      padding: 16px;
      position: fixed;
      top: 50px;
      width: 400px;
      background: #ffffff;
      box-shadow: 0 0 17px 0 #e7e7e7;
      z-index: 10; 
   }
   .modal_header, .modal_footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
    .modal_content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .close_modal {
      padding: 8px;
      color: #ffffff;
      background: rgb(9, 191, 51);
    }
</style> 





