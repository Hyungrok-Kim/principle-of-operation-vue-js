<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <product-header>
    <h3>원리</h3> 
    <!-- 슬롯 개념 -->
  </product-header>
  <product-main></product-main>
  <product-footer></product-footer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProductHeader from './components/product-header.vue'
import ProductMain from './components/product-main.vue'
import ProductFooter from './components/product-footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ProductHeader,
    ProductMain,
    ProductFooter
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
  margin-top: 60px;
}
</style>
