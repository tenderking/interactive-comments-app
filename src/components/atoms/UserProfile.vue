<script setup lang="ts">
	import { ref, computed } from "vue";
	const name = ref(<string>"juliusomod");
	const imgUrl = "/images/avatars/image-amyrobson.png";
	const currentUser = "juliusomo";
	const showUserName = ref(true);
	const showUserPhoto = ref(true);

	const checkUser = computed(() => {
		if (currentUser === name.value) return true;
	});
</script>
<template>
	<div
		class="invisible-container"
		:showNameTag="showUserName"
		:showAvatar="showUserPhoto"
		:name="name"
	>
		<img :src="imgUrl" v-show="showUserPhoto" alt="user avatar" />
		<p class="user-name" v-show="showUserName">{{ name }}</p>
		<p class="user-you" v-show="checkUser">you</p>
	</div>
</template>
<style lang="scss" scoped>
	.invisible-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 16px;

		img {
			width: 32px;
			aspect-ratio: 1;
		}
		.user-name {
			margin: 0;
			color: var(--neutral-700);
			font-size: var(--txt-btn--flat);
			font-weight: 700;
		}
		.user-you {
			margin: 0;
			background-color: var(--primary-500);
			color: var(--white);
			font-size: var(--txt-tag);
			font-weight: 500;
			padding: 1px 6px 4px;
		}
	}
</style>
