<template>
  <main v-if="isContentShown">
      <img  class="avatar"
        src="../assets/images/avatars/image-amyrobson.png"
        alt="amy" />
        <textarea name="reply" id="reply-text-area" v-model="message" cols="50" rows="5"></textarea>
        <button @click="submitMessage">Reply</button>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
const message=ref('')
const submitMessage= ()=>{
  props.closeModal()
  console.log(message.value)}
const props = defineProps({
  isContentShown : {
      type: Boolean
    },
    closeModal: {
      type: Function,
      required:true
    }
})

</script>



<style lang="scss" scoped>
main{
     width: 40em;
  background-color: azure;
  margin-inline:auto;
  margin-block: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
  padding:1em;
  img{
      width:2em;
      
  }
}
</style>
