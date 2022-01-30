<template>
  <div class="comment-container">
    <TextAreaAtom class="text-area" v-model:content="newContent" />
    <UserProfile
      :isShown="false"
      :user="store.currentUser"
      class="user-profile"
    />
    <PrimaryButton v-if="isReply" class="btn" @click="newReply(), closeReply()">
      Reply
    </PrimaryButton>
    <PrimaryButton v-else class="btn" @click="newMessage">
      Send
    </PrimaryButton>
  </div>
</template>
<script setup lang="ts">
import PrimaryButton from "../atoms/buttons/normal/PrimaryButton.vue";
import UserProfile from "../atoms/UserProfile.vue";
import TextAreaAtom from "../atoms/TextAreaAtom.vue";
import { useUser } from "../../stores/store";
import { ref } from "vue";

/** access store */
const store = useUser();

/** Props */
const props = defineProps({
  replyingTo: { type: String,required:false,default:""},
  isReply: { type: Boolean, default: false },
  commentId: { type: Number, required:false,defaul:0 },
  closeReply: { type: Function,required:false, default: null},
});

/** Sending Message Functionality */
const newContent = ref("");

const newMessage = () => {
  const newComment = {
    id: store.getNewId(),
    content: newContent.value,
    createdAt: "Just now",
    score: 0,
    replyingTo: props.replyingTo!,
    user: store.currentUser,
    replies: [],
  };

  if (newContent.value) {
    store.comments.push(newComment);
    newContent.value = ''
  }
};

const newReply = () => {
  const newReply = {
    id: store.getNewId(),
    content: newContent.value,
    createdAt: "Just now",
    score: 0,
    replyingTo: props.replyingTo!,
    user: store.currentUser,
  };

  if (newContent.value) {
  //  console.log(props.commentId);
    const replyToReply = store.comments.find( el=> el.replies.find(la => la.id === props.commentId));
      
    if (replyToReply) {
      return replyToReply.replies.push(newReply);
    } else {
      const replyToComment = store.comments.find((el) => el.id === props.commentId);
    
      if (replyToComment) {
        return replyToComment.replies.push(newReply);
      }
    }
  }
}
</script>
<style lang="scss">
.comment-container {
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr;
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 0.5rem;

  .text-area {
    grid-column: 1 / span 2;
  }

  .btn {
    width: 105px;
    margin-left: auto;
  }
}

@media (min-width: 35em) {
  .comment-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
    gap: 1em;
    max-width: 730px;

    .user-profile {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }

    .text-area {
      grid-column: 2 / span 1;
      grid-row: 1 / span 2;
      width: 100%;
    }

    .btn {
      grid-column: 3 / span 1;
      grid-row: 1 / span 1;
      margin: auto;
    }
  }
}
</style>
