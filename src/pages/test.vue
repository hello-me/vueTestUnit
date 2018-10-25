<template>
  <div class="alert">
    <p>{{content}}</p>
    <span>{{Num}}</span>
    <button @click="Click">点击改变文字</button>
    <button @click="ClickAsync" class="btnAsync">异步自增</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        content:  'xxxxxxx',
        Num: 1
      }
    },
    methods: {
      Click() {
        this.content = "内容被改变了"
      },
      ClickAsync() {
      window.setTimeout(() => {
        this.Num++;
      },1000)
      }
    }
  }
</script>

<style>
</style>
