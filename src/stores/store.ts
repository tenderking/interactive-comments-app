import { defineStore, acceptHMRUpdate } from "pinia";
import chatData from "../data.json";
//import { commentIds, replyIds } from "./prepData.js";

export const useUser = defineStore({
	id: "user",

	state: () => ({
		currentUser: chatData.currentUser,
		comments: chatData.comments,
		showModal: false,
		showReply: false,
		idToDelete: null,
		isRepliedComment: false,
		// commentIds: commentIds(chatData.comments),
		// replyIds: replyIds(chatData.comments),
	}),

	getters: {},

	actions: {
		toggleShowReply(show: boolean): void {
			this.$patch({ showReply: show });
		},
		handleModal(show: boolean) {
			this.$patch({ showModal: show });

			// Reset the idToDelete state when the modal is closed
			if (!show) this.$patch({ idToDelete: null });
		},
		deleteComment(id: number) {
			this.$patch((state) => {
				if (!this.isRepliedComment) {
					state.comments = state.comments.filter(
						(comment) => comment.id !== id
					);
				} else {
					for (let index in this.comments) {
						state.comments[index].replies = state.comments[
							index
						].replies.filter((comment) => comment.id !== id);
					}
				}
			});
		},

		getNewId() {
			function randomNumber(min:number, max:number) { 
				return Math.floor(Math.random() * (max - min) + min);
			} 
			const result=randomNumber(10,100)
			return result;
		},

		upvote(id: number) {},

		downvote(id: number) {},
	},
});
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
