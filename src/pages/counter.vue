<template>
 <div class="num">
  <h3>counter</h3>
  <p>{{count}}</p>
  <button @click="increment">点击</button>
 </div>
</template>

<script type="text/ecmascript-6">
 export default {
 data() {
 return {
 count: 0
 }
 },
 methods: {
   increment() {
   this.count++
   }
 }
 }
</script>

<style>
</style>
