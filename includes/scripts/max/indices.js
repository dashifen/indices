var indices = new Vue({
	el: '#cards',
	data: {
		cards: [
			{
				"header": "Purpose/Outline",
				"points": [
					"Basic foundation of neopagan religious witchcraft.",
					"Definition of common terms.",
					"History of the religion/community.",
					"General beliefs and practices.",
					"Ceremonial tools."
				]
			}, {
				"header":  "Defining Wicca",
				"content": "Wicca is a neopagan religion based in reverence for nature as seen in a Goddess and a God.  Its spiritual roots are primarily those of pre-Christian, Celtic tribal religion, European folk magic, and the work of ceremonial magicians."
			}
		]
	}
});

jQuery(document).ready(function() {
	$("#cards").slick({
		arrows: false,
		infinite: false,
		mobileFirst: true
	});
});
