<script setup lang="ts">
	defineProps({
		content: {
			type: String,
			default: "",
		},
	});
	const emit = defineEmits(["update:content"]);

	const updateContent = (e: Event) => {
		emit("update:content", (e.target as HTMLInputElement).value);
	};
</script>
<template>
	<textarea
		name="text-area"
		id=""
		rows="4"
		placeholder="Add comment..."
		:value="content"
		@input="updateContent"
	></textarea>
</template>

<style lang="scss">
	textarea {
		color: var(--neutral-600);
		width: 100%;
		border: 1px solid var(--primary-300);
		padding: 12px 24px;
		border-radius: 8px;
		resize: vertical;
		&:focus {
			outline: none;
			border: 2px solid var(--primary-500);
		}
	}
	textarea:focus::placeholder {
		color: var(--neutral-700);
	}
</style>
