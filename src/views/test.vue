<template>
  <button @click="add1">add1</button>
  <button @click="add2">add2</button>
  <button @click="add3">add3</button>
  <div>{{ num1 }}</div>
  <div>{{ num2 }}</div>
  <div>{{ num3obj.num3 }}</div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  setup(props, context) {
    let num1 = 2
    let num2 = ref(2) //在setup内使用需要.value,给定值返回一个响应式数据对象
    let num3obj = reactive({ num3: 3 })//接收一个普通对象，返回一个响应式的数据对象
    console.log('num', num1, num2, num3obj)
    function add1() {
      num1++
    }
    function add2() {
      num2.value++
    }
    function add3() {
      num3obj.num3++
    }
    return {
      num1,
      num2,
      num3obj,
      add1,
      add2,
      add3
    }
  }
}
</script>

<style>
</style>