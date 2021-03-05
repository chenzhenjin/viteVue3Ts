<template>
  <button @click="add1">add1</button>
  <button @click="add2">add2</button>
  <button @click="add3">add3</button>
  <div>{{ num1 }}</div>
  <div>{{ num2 }}</div>
  <div>{{ num3 }}</div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  setup() {
    let num1 = 2
    let num2 = ref(2)
    let num3 = reactive(2)
    console.log('num', num1, num2, num3)
    function add1() {
      num1++
    }
    function add2() {
      num2.value++
    }
    function add3() {
      num3++
    }
    return {
      num1,
      num2,
      num3,
      add1,
      add2,
      add3
    }
  }
}
</script>

<style>
</style>