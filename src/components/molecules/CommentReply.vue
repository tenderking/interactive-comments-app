<template>
	<div class="comment-container">
		<TextArea class="text-area" />
		<UserProfile class="user-profile" ref="showUserName" />
		<PrimaryButton class="btn" />
	</div>
</template>
<script setup lang="ts">
	import PrimaryButton from "../atoms/buttons/normal/PrimaryButton.vue";

	import UserProfile from "../atoms/UserProfile.vue";
	import TextArea from "../atoms/TextArea.vue";
</script>
<style lang="scss">
	.comment-container {
		display: grid;
		grid-template-rows: 2fr 1fr;
		grid-template-columns: 1fr 1fr;
		.text-area {
			grid-column: 1 / span 2;
		}
	}
	@media (min-width: 35em) {
		.comment-container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			gap: 1em;
			.user-profile {
				grid-column: 1 / span 1;
				grid-row: 1 / span 1;
			}
			.text-area {
				grid-column: 2 / span 1;
				grid-row: 1 / span 2;
			}
			.btn {
				width: 105px;
				grid-column: 3 / span 1;
				grid-row: 1 / span 1;
			}
		}
	}
</style>
