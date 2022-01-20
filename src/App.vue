<script setup lang="ts">
	import EditButton from "./components/atoms/buttons/flat/EditButton.vue";
	import DeleteButton from "./components/atoms/buttons/flat/DeleteButton.vue";
	import ReplyButton from "./components/atoms/buttons/flat/ReplyButton.vue";
	import TextArea from "./components/atoms/TextArea.vue";
	import UserProfile from "./components/atoms/UserProfile.vue";
	import SendButton from "./components/atoms/buttons/round/SendButton.vue";

	import PrimaryButton from "./components/atoms/buttons/normal/PrimaryButton.vue";
	import SecondaryButton from "./components/atoms/buttons/normal/SecondaryButton.vue";
	import DangerButton from "./components/atoms/buttons/normal/DangerButton.vue";
	import LikeButton from "./components/atoms/buttons/LikeButton.vue";
</script>

<template>
	<div class="grid">
		<div class="container">
			<h1>Place the component here</h1>
			<EditButton />
			<DeleteButton />
			<ReplyButton />
			<TextArea />
			<UserProfile />

			<PrimaryButton />
			<SecondaryButton />
			<DangerButton />
			<LikeButton />

		</div>
	</div>
</template>

<style lang="scss">
	.grid {
		display: grid;
		place-content: center;
		min-height: 100vh;
	}

	.container {
		padding: 1rem;
		text-align: center;
		border: 2px dashed dodgerblue;

		> * + * {
			margin-top: 1.5rem;
		}
	}
</style>
