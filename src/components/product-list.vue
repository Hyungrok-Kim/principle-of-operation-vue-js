<template>
  <ul>
    <li v-for="(product, idx) in products" :key="idx">  
      <!-- vue에서는 v-for을 이용해 list의 반복문을 수행할 수 있으나 react에서 map을 사용하는 것처럼 똑같이 key값을 줘야 함  -->
      {{product}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {  // vue 프레임워크에서 data 안에 객체 형태로 데이터를 지정하면 Line 3~ 처럼 데이터 바인딩이 가능하게끔 해뒀음.
    return  {
      products: ['1','2','3','4','5'],
    };
  }
}
</script>

<style>

</style>