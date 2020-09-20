<template>
  <div class="col col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2 mt-2">
    <div class="card border-dark">
      <div class="card-header">
        <h3 class="card-text">{{ stock.name }}</h3>
        <p class="card-text">
          <small class="text-muted">(Price: ${{stock.price}} | Quantity: {{stock.quantity}})</small>
        </p>
      </div>
      <div class="card-body text-dark">
        <input
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model="quantity"
          :class="{'border-danger': insufficientQuantity || quantity < 0 || Math.floor(quantity) != quantity}"
        />
      </div>
      <div class="card-footer text-dark">
        <button
          class="btn btn-primary"
          @click="sellStock"
          :disabled="quantity <= 0 || Math.floor(quantity) != quantity || insufficientQuantity"
        >{{ insufficientQuantity ? 'Not enough Stocks' : 'Sell' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock",
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    },
  },
  props: {
    stock: {
      type: Object,
    },
  },
};
</script>
