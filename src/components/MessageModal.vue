<script lang="ts" setup>
import { ref } from "vue";
import ReplyButton from "./ReplyButton.vue";
// const count = ref(0);
const props = defineProps({
  openModal: {
    type: Function,
    required: true,
  },
  comments:{
    type: Object,
    required:true
  }
});
</script>
<template>
  <main v-for="comment in props.comments" :key="comment.id">

    <div class="user-info">
      <img class="avatar" :src="comment.user.image.png" alt="profile avatar" />
      <h2 class="name">{{comment.user}}</h2>
      <p class="post-date">{{comment.createdAt}}</p>
      <ReplyButton @click="openModal()" />
    </div>
    <div class="post-container">
      <p class="post-text">
        {{comment.content}}
      </p>
    </div>
    <aside>
      <button @click="comment.score++">+</button>
      <div>{{ comment.score}}</div>
      <button @click="comment.score--">-</button>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 40em;
  background-color: azure;
  display: grid;
  grid-template-columns: 15% 1fr;
  grid-template-rows: 1fr 1fr;
  margin: auto;
  aside {
    grid-row: 1 / span 2;
    grid-column: 1 / span 1;
    width: 5em;
    margin-block: auto;
  }
  .user-info {
    grid-row: 1 / span 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    width: 100%;
    img {
      width: 2em;
    }
    .btn-reply {
      margin-left: auto;

      img {
        width: 1em;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
