<template>
  <button @click="CustomButtonClick"><slot/></button>
</template>

<script>
export default {
 methods: {
    CustomButtonClick() {
      console.log("전역 버튼 click");
    }
  },
}
</script>

<style>
button {
    background: "black";
}
</style>