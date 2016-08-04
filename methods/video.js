module.exports = function(message, context) {
	var api = context.vkBot.api;

	api.video.search({
		q: context.searchString,
		offset: 1,
		count: 1
	}, function(response) {
		var gif = response.response.items[0];

		var attachment = "video" + gif.owner_id + "_" + gif.id;

		message.send("&#128121;", {
			attachment: attachment,
			forward_messages: message.id
		});
	});
}