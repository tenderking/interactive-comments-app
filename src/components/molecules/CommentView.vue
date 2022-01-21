<script setup lang="ts">
	import UserProfile from "../atoms/UserProfile.vue";
	import LikeButton from "../atoms/buttons/LikeButton.vue";
	import DeleteButton from "../atoms/buttons/flat/DeleteButton.vue";
	import EditButton from "../atoms/buttons/flat/EditButton.vue";
</script>

<template>
	<div class="comment">
		<div class="comment__user-infos">
			<UserProfile :isShown="true" />
			<p class="timestamp">1 day ago</p>
		</div>
		<div class="comment__content">
			<p>
				<span class="replying-to">ramsesmiron</span> I couldn't agree more with
				this. Everything moves so fast and it always seems like everyone knows
				the newest library/framework. But the fundamentals are what stay
				constant.
			</p>
		</div>
		<div class="comment__score">
			<LikeButton />
		</div>
		<div class="comment__actions">
			<DeleteButton />
			<EditButton />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.comment {
		background-color: var(--white);
		padding: 1rem;
		display: grid;
		gap: 1rem;
		border-radius: 0.5rem;
		grid-template-columns: auto 1fr;
		grid-template-areas:
			"user_infos user__infos"
			"content content"
			"score actions";

		@media (min-width: 52rem) {
			align-items: start;
			grid-template-areas:
				"score user_infos actions"
				"score content content";
		}

		&__user-infos {
			grid-area: user_infos;
			grid-column: 1 / -1;
			width: 100%;
			display: grid;
			align-items: center;
			grid-auto-flow: column;
			justify-content: space-between;

			.timestamp {
				color: var(--neutral-600);
			}
		}

		&__content {
			grid-area: content;

			p {
				color: var(--neutral-600);

				.replying-to {
					color: var(--primary-500);
					font-weight: 500;

					&::before {
						content: "@";
					}
				}
			}
		}

		&__actions {
			grid-area: actions;
			justify-self: end;
			display: grid;
			grid-auto-flow: column;
			align-items: center;
		}

		&__score {
			grid-area: score;
			justify-self: start;
		}

		@media (min-width: 52rem) {
			&__user-infos {
				grid-column: initial;
				justify-content: start;
				gap: 1rem;
			}
		}
	}
</style>
