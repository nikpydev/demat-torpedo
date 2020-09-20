<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto nav-tabs">
          <router-link to="/portfolio" activeClass="active" tag="li">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link to="/stocks" activeClass="active" tag="li">
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>

        <ul class="navbar-nav">
          <li>
            <a href="#" class="nav-link" @click="endDay">End Day</a>
          </li>
          <li class="dropdown show">
            <a
              href="#"
              class="dropdown-toggle nav-link"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <ul class="dropdown-menu">
              <li>
                <a href="#" class="nav-link" @click="saveData">Save Data</a>
              </li>
              <li>
                <a href="#" class="nav-link" @click="loadData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
        <strong class="navbar-text ml-2">Funds: {{ funds | currency }}</strong>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { writeData } from "../firebase/firebase.utils";
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      writeData(data);
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>