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
		// showUserPhoto: true,
		// nameOfUser: "someUser",
		// imgUrl: "/images/avatars/image-amyrobson.png",
		currentUser: chatData.currentUser,
		comments: chatData.comments,
		showModal: false,
		idToDelete: null,
		isRepliedComment: false
	}),
	getters: {
		// getData: (state) => {
		//   const replies: (object | void)[] = state.comments.comments.replies;
		//   if (replies.length > 0) state.data.push(replies);
		// },
	},
	actions: {
		handleModal(show: boolean) {
			this.$patch({showModal: show})

			// Reset the idToDelete state when the modal is closed
			if (!show) this.$patch({ idToDelete: null})
		},
		deleteComment(id: number) {
			this.$patch((state) => {
				if (!this.isRepliedComment) {
					state.comments = state.comments.filter(comment => comment.id !== id)
				} else {
					for (let index = 0; index < this.comments.length; index++) {
						state.comments[index].replies =
							state.comments[index].replies.filter(comment => comment.id !== id)
					}
				}
			})
		}
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
