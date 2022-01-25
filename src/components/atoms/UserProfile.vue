<script setup lang="ts">
	/* Before pinia*/
	// import { ref, computed } from "vue";
	// const nameOfUser = ref(<string>"juliusom");
	// const imgUrl = "/images/avatars/image-amyrobson.png";
	// const currentUser = "juliusomo";
	// const showUserName = ref(true);
	// const showUserPhoto = ref(true);
	// const checkUser = computed(() => {
	// 	if (currentUser === nameOfUser.value) return true;
	// });

	import { useUser } from "../../stores/store";

	const store = useUser();
	const props = defineProps({
		isShown: Boolean,
		user: {
			type: Object,
			required: true,
		},
	});
	const isCurrentUser = () =>
		store.currentUser.username === props.user.username;
</script>
<template>
	<div class="invisible-container">
		<img :src="user.image.png" alt="user avatar" />
		<template v-if="isShown">
			<p class="user-name">{{ user.username }}</p>

			<p class="user-you" v-show="isCurrentUser()">you</p>
		</template>
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
