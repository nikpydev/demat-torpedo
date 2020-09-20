import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

export const routes = [
  {
    path: "/demat-torpedo",
    component: Home,
  },
  {
    path: "/demat-torpedo/portfolio",
    component: Portfolio,
  },
  {
    path: "/demat-torpedo/stocks",
    component: Stocks,
  },
];
