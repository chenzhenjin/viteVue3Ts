<template>
  <div class="text">home</div>
  <div @click="goTest">goTotest</div>
</template>

<script lang="ts" setup="props">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
const router = useRouter()
const goTest = () => {
  router.push('/test')
}
const state = reactive({
  color: '#ff0000'
})
</script>
<style>
.text {
  color: v-bind('state.color');
}
</style>
