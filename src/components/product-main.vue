<template>
  <main>
      <product-title></product-title>
      <product-list></product-list>
  </main>
</template>


<script>
import ProductTitle from './product-title.vue'
import ProductList from './product-list.vue'

export default {
  name: 'ProductMain',
  components: {
    // HelloWorld,
    ProductTitle,
    ProductList,
  }
}
</script>

<style>

</style>