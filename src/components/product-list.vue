<template>
  <p>
    <button @click="getDataFromServer()">데이터 GET</button>
  </p>
  <ul>
    <li v-for="(post, idx) in posts" :key="idx">  
      <!-- vue에서는 v-for을 이용해 list의 반복문을 수행할 수 있으나 react에서 map을 사용하는 것처럼 똑같이 key값을 줘야 함  -->
      <p>글 번호: {{post.id}}</p>
      <p>{{post.title}}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  created() { // vue callback 함수 
    this.getDataFromServer();
  },
  methods: {
    async getDataFromServer() {
      axios.get("https:/jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res.data);
          this.posts = res.data;
        });
    }
  },
  data() {  // vue 프레임워크에서 data 안에 객체 형태로 데이터를 지정하면 Line 3~ 처럼 데이터 바인딩이 가능하게끔 해뒀음.
    return  {
      posts: [],
    };
  }
}
</script>

<style>

</style>