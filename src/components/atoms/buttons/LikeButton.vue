<template>
	<div class="btn-container">
		<div class="like-btn btn__plus">
			<p @click="likes++" class="btn__text">+</p>

			<p class="text">{{ likes }}</p>

			<p @click="likes--" class="btn__text">-</p>
		</div>
	</div>
</template>
<script setup lang="ts" scoped>
	import { ref } from "vue";

	const likes = ref(0);
</script>
<style lang="scss">
	.like-btn {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 0;
		background-color: var(--neutral-200);
		border-radius: 5px;
		width: 100px;
		height: 40px;

		cursor: pointer;

		p {
			padding: 5px 10px;
			font-size: var(txt-btn--default);
			font-weight: var(--weight-500);
			color: var(--primary-300);
			transition: color 0.5s;

			&:hover {
				color: var(--primary-500);
				transition: color 0.5s;
			}
		}
		.text {
			color: var(--primary-500);
		}
	}
	@media (min-width: 35rem/*var(--break)*/) {
		.like-btn {
			display: flex;
			flex-direction: column;
			width: 40px;
			height: 100px;
		}
	}
</style>
