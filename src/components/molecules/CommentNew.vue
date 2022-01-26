<template>
	<div class="comment-container">
		<TextAreaAtom class="text-area" v-model:content="newContent" />
		<UserProfile
			:isShown="false"
			:user="store.currentUser"
			class="user-profile"
		/>
		<PrimaryButton class="btn" @click="newMessage()">{{
			isReply ? "Reply" : "Send"
		}}</PrimaryButton>
	</div>
</template>
<script setup lang="ts">
	import PrimaryButton from "../atoms/buttons/normal/PrimaryButton.vue";
	import UserProfile from "../atoms/UserProfile.vue";
	import TextAreaAtom from "../atoms/TextAreaAtom.vue";
	import { useUser } from "../../stores/store";
	import { ref } from "vue";
	const store = useUser();
	const props = defineProps({
		replyingTo: { type: String },
		isReply: { type: Boolean, default: false },
		commentId: { type: Number },
		index: { type: Number },
		showReply: { type: Boolean },
	});
	const newContent = ref("");
	const newMessage = () => {
		const comment = {
			id: 4,
			content: newContent.value,
			createdAt: "Just now",
			score: 0,
			replyingTo: props.replyingTo!,
			user: store.currentUser,
		};
		if (props.isReply) {
			const result = store.comments.find((el) => el.id === props.commentId);
			if (result) result.replies.push(comment);
		}
	};
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
