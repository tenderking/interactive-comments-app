<template>
	<div class="comment-container">
		<TextArea class="text-area" />
		<UserProfile :isShown="false" class="user-profile" />
		<PrimaryButton class="btn" />
	</div>
</template>
<script setup lang="ts">
	import PrimaryButton from "../atoms/buttons/normal/PrimaryButton.vue";
	import UserProfile from "../atoms/UserProfile.vue";
	import TextArea from "../atoms/TextArea.vue";
	import { useUser } from "../../stores/store";
	const store = useUser();
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
