const commentIds = (comments) => comments.map((comment) => comment.id);

const replyIds = (comments) =>
	comments.map((element) => {
		if (!element.replies.length) {
			return [];
		}
		return element.replies.map((el) => el.id);
	});

export default { commentIds, replyIds };
