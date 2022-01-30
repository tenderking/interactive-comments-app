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

		vote(id: number, action: string) {
			this.$patch((state) => {
				if (!this.isRepliedComment) {
					const comment = state.comments.find(comment => comment.id === id)
					if (comment) {
						if (action === 'upvote') comment.score++
						else comment.score--
					}
				} else {
					let comment
					
					for (let index in state.comments) {
						comment = state.comments[+index].replies.find((el) => el.id === id);

						if (comment) break // If we find the result we stop the loop
					}

					if (comment) {
						if (action === 'upvote') comment.score++
						else {
							if (comment.score > 0) comment.score--
						}
					}
				}
			});
		},

		upvote(id: number) {
			this.vote(id, 'upvote')
		},
		downvote(id: number) {
			this.vote(id, 'downvote')
		},
	},
});
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
