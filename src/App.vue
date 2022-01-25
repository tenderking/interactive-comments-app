<script setup lang="ts">
import CommentView from "./components/molecules/CommentView.vue";
import { useUser } from "./stores/store";
import CommentModal from "./components/molecules/CommentModal.vue";

const store = useUser();
</script>

<template>
	<div class="grid">
		<div class="container">
			<template v-for="comment in store.comments" :key="comment.id">
				<CommentView :comment="comment" />

				<div
					style="margin-left: 5rem"
					v-for="repliedComment in comment.replies"
					:key="repliedComment.id"
				>
					<CommentView :comment="repliedComment" />
				</div>
			</template>
		</div>
	
		<CommentModal v-if="store.showModal" />
	</div>
</template>

<style lang="scss">
	.grid {
		display: grid;
		place-content: center;
		min-height: 100vh;
		background-color: var(--neutral-100);
		padding-block: 5rem;
	}

	.container {
		padding: 1rem;
		border: 2px dashed dodgerblue;
		max-width: 30rem;

		@media (min-width: 52rem) {
			max-width: 46rem;
		}

		> * + * {
			margin-top: 20px;
		}
	}
</style>
