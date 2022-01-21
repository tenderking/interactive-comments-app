import { defineStore } from "pinia";
import userData from "../data.json";
// import {ChatModels, UserOrCurrentUser, } from "../models";

export const useUser = defineStore({
  id: "user",

  state: () => ({
    likes: 0,
    showUserPhoto: true,
    nameOfUser: "juliusom",
    currentUser: "juliosomo",
    imgUrl: "/images/avatars/image-amyrobson.png",
    comments: userData,
    data: [],
  }),
  getters: {
    checkUser: (state) => {
      if (state.currentUser === state.nameOfUser) return true;
    },
    getData: (state) => {
      const replies: (object | void)[] = state.comments.comments.replies;
      if (replies.length > 0) state.data.push(replies);
    },
  },
  actions: {
    upvote(id: number) {
      const comment = this.findComment(id) || this.findReply(id);

      if (comment) comment.score++;
    },
    downvote(id: number) {
      const comment = this.findComment(id) || this.findReply(id);

      if (comment) comment.score--;
    },
    findComment(id: number) {
      return this.comments.comments.find((el) => el.id === id);
    },
    findReply(id: number) {
      return this.comments.comments.find((el) => {
        return el.replies.find((comment) => comment.id === id);
      });
    },
  },
});
