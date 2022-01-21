<template>
	<textarea
		name="text-area"
		id=""
		rows="5"
		placeholder="Add comment..."
	></textarea>
</template>

<style lang="scss">
	textarea {
		color: var(--neutral-600);
		width: 100%;
		border: 1px solid var(--primary-300);
		padding: 12px 24px;
		border-radius: 8px;
		&:focus {
			outline: none;
			border: 2px solid var(--primary-500);
		}
	}
	textarea:focus::placeholder {
		color: var(--neutral-700);
	}
</style>
