<script setup lang="ts">
	import CommentView from "./components/molecules/CommentView.vue";
	import { useUser } from "./stores/store";
	import CommentModal from "./components/molecules/CommentModal.vue";
	import CommentNew from "./components/molecules/CommentNew.vue";

	const store = useUser();
</script>

<template>
	<div class="grid">
		<div class="container">
			<template v-for="comment in store.comments" :key="comment.id">
				<CommentView :comment="comment" />

				<div class="replied-comments" v-if="comment.replies.length > 0">
					<template
						v-for="repliedComment in comment.replies"
						:key="repliedComment.id"
					>
						<CommentView :comment="repliedComment" />
					</template>
				</div>
			</template>
			<CommentNew />
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
		
		max-width: 30rem;

		@media (min-width: 52rem) {
			max-width: 46rem;
		}

		> * + * {
			margin-top: 20px;
		}
		
		
		.replied-comments {
			padding-left: 1rem;
			position: relative;
			
			> * + * {
				margin-top: 20px;
			}

			@media (min-width: 35rem) {
				padding-left: 2rem;
			}

			@media (min-width: 52rem) {
				padding-left: 5.5rem;
			}

			&::before {
				content: '';
				position: absolute;
				inset-block: 0;
				background-color: var(--neutral-200);
				width: 1px;
				left: 0;
				
				@media (min-width: 52rem) {
					left: 2.75rem;
				}
			}
		}
	}
</style>
