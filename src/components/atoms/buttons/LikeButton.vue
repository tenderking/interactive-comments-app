<template>
	<div class="btn-container">
		<div class="like-btn btn__plus">
			<p @click="checkComment(), upvote(id)" class="btn__text">+</p>

			<p class="text">{{ score }}</p>

			<p @click="checkComment(), downvote(id)" class="btn__text">-</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUser } from '../../../stores/store';

defineProps({
	score: { type: Number, required: true },
	id: { type: Number, required: true },
	checkComment: { type: Function, required: true }
});

const { upvote, downvote } = useUser()
</script>

<style lang="scss" scoped>
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
			font-size: 1em; /*var(txt-btn--default); */
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
	@media (min-width: 52rem) {
		.like-btn {
			display: flex;
			flex-direction: column;
			width: 40px;
			height: 100px;
		}
	}
</style>
