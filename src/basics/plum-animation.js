export const plum_animation = {
	"[animation]: Add rotate X animation.": {
		prefix: "plum-animation-rotateX",
		body: ["@include animation-rotateX($$duration: ${second});"],
		description: "[animation]: Add rotate X animation.",
	},

	"[animation]: Add rotate Y animation.": {
		prefix: "plum-animation-rotateY",
		body: ["@include animation-rotateY($$duration: ${second});"],
		description: "[animation]: Add rotate Y animation.",
	},

	"[animation]: Add scale animation (mini zoom effect).": {
		prefix: "plum-animation-scale",
		body: ["@include animation-scale($$scaleValue: ${1:foat->0.5~1.5});"],
		description: "[animation]: Add scale animation (mini zoom effect).",
	},

	"[animation]: Add a slide animation effect - great for a sidebar.": {
		prefix: "plum-animation-slide",
		body: [
			"@include animation-slide($$in-out: ${1:in, out}, $$direction: ${2:up, down, right, left});",
		],
		description:
			"[animation]: Add a slide animation effect - great for a sidebar.",
	},

	"[animation]: Add fade animation effect (fluid).": {
		prefix: "plum-animation-fade",
		body: ["@include animation-fade($$in-out: ${1:in, out});"],
		description: "[animation]: Add Slide Animation Effect (fluid).",
	},

	"[animation]: Add a temporary zoom animation effect - often used for an animation effect on entry.":
		{
			prefix: "plum-animation-zoom",
			body: ["@include animation-zoom($$in-out: ${1:in, out});"],
			description:
				"[animation]: Add a temporary zoom animation effect - often used for an animation effect on entry.",
		},

	"[animation]: Add flip animation effect.": {
		prefix: "plum-animation-flip",
		body: ["@include animation-flip($$in-out: ${1:in, out});"],
		description: "[animation]: Add flip animation effect.",
	},

	"[animation]: Add rotation animation effect.": {
		prefix: "plum-animation-rotate",
		body: [
			"@include animation-rotate($$in-out: ${1:in, out}, $$yax: ${2:up, down}, $$xax: ${3:left, right});",
		],
		description: "[animation]: Add rotation animation effect.",
	},

	"[animation]: Add notification animation effect.": {
		prefix: "plum-animation-notif",
		body: ["@include animation-notif($$in-out: ${1:in, out});"],
		description: "[animation]: Add notification animation effect.",
	},

	"[animation]: Add pulse animation effect.": {
		prefix: "plum-animation-pulse",
		body: ["@include animation-pulse();"],
		description: "[animation]: Add pulse animation effect.",
	},

	"[animation]: Add bounce animation effect.": {
		prefix: "plum-animation-bounce",
		body: ["@include animation-bounce();"],
		description: "[animation]: Add bounce animation effect.",
	},

	"[animation]: Add flash animation effect.": {
		prefix: "plum-animation-flash",
		body: ["@include animation-flash();"],
		description: "[animation]: Add flash animation effect.",
	},
};
