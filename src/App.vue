<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";

import MessageModal from "./components/MessageModal.vue";
import ReplyModal from "./components/ReplyModal.vue";
// import {UserOrCurrentUser, Image, CommentsEntity, RepliesEntity, ChatModels} from './models'
import ChatData from "./data.json";

const currentUser = ref(ChatData.currentUser);
const comments = ref(ChatData.comments);

const isContentShown = ref(false);
const openModal = () => {
  isContentShown.value = true;
};
const closeModal = () => {
  isContentShown.value = false;
};
</script>

<template>
  <main>
    <MessageModal :comments="comments" :openModal="openModal" />

    <ReplyModal
      :isContentShown="isContentShown"
      :currentUser="currentUser"
      :closeModal="closeModal"
    />
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
