import api from '@/services/api'

export default {
  createOrder(order) {
    return api().post('orders', order)
  }, 
  getOrders () {
    return api().get('orders')
  }
}