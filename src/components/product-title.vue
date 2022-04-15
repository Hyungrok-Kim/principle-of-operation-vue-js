<template>
  <h2 v-show="isShow">{{ title }}</h2>
  <p>
    <button @click="buttonClicked()">Click</button> <!-- @click -> Vue의 click 이벤트 생성을 위한 !-->
  </p>
  <p>
    <input type="text" v-model="textData">
    <!-- 양방향 바인딩 - 위의 textData가 바뀌면 data() 안의 내부적인 textData도 바뀜-->
  </p>
  <p>
    {{ textData }} 
  </p>
</template>

<script>
export default {
  // 자식 컴포넌트에서 props 받는 방법.
  props: {
    // 'textData', // 양방향 데이터는 안 된다. prop으로 못씀
    isShow: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default() {
        return 'no title'; // 부모에서 title을 넘겨줄 때 값이 없으면 default로 "no title"이 들어가게끔.
      }

    },
  },

  methods: {  // Vue 프레임워크의 함수 작성 부분 
    buttonClicked() {
      console.log('Click');
      // this.title = '버튼 클릭이 되었습니다.';
    }
  },

    data() {
      return {
        textData:'Hyungrok'
      };
    }
}
</script>

<style>

</style>