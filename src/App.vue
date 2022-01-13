<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MessageModal from "./components/MessageModal.vue";
import ReplyModal from "./components/ReplyModal.vue";
  // const modal = ref<InstanceType<typeof ReplyModal>>()
  // const openModal = () => {
  //   modal.value?.open()
  // }
  const isContentShown = ref(false)
 const openModal = () => {isContentShown.value = true}
 const closeModal = () => {isContentShown.value = false}


</script>

<template>
  <main>
    <button @click="isContentShown= !isContentShown">Click Me</button>
   
<MessageModal :openModal="openModal" />
  
    
    <ReplyModal :isContentShown="isContentShown" :closeModal="closeModal"/>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
