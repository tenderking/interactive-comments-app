import { defineStore, acceptHMRUpdate } from "pinia";
import chatData from "../data.json";

import { normalize, schema } from "normalizr";

const { comments } = chatData;
const user = new schema.Entity("users");
const reply = new schema.Entity("replies", {
	replyingTo: user,
});
const comment = new schema.Entity("comments", {
	username: user,
	replies: [reply],
});
const normalizedData = normalize(comments, comment);
console.log(reply);

export const useUser = defineStore({
	id: "user",

	state: () => ({
		showUserPhoto: true,
		nameOfUser: "someUser",
		currentUser: chatData.currentUser,
		imgUrl: "/images/avatars/image-amyrobson.png",
		comments: chatData.comments,
	}),
	getters: {
		// getData: (state) => {
		//   const replies: (object | void)[] = state.comments.comments.replies;
		//   if (replies.length > 0) state.data.push(replies);
		// },
	},
	actions: {
		// upvote(id: number) {
		//   const comment = this.findComment(id) || this.findReply(id);
		//   if (comment) comment.score++;
		// },
		// downvote(id: number) {
		//   const comment = this.findComment(id) || this.findReply(id);
		//   if (comment) comment.score--;
		// },
		// findComment(id: number) {
		//   return this.comments.comments.find((el) => el.id === id);
		// },
		// findReply(id: number) {
		//   return this.comments.comments.find((el) => {
		//     return el.replies.find((comment) => comment.id === id);
		//   });
		// },
	},
});
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
