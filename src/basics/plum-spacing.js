export const plum_spacing = {
	"[spacing]: Quickly change an item's padding.": {
		prefix: "plum-spacing-padding",
		body: [
			"@include spacing-padding($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});",
		],
		description: "[spacing]: Quickly change an item's padding.",
	},

	"[spacing]: Quickly change an element's margin.": {
		prefix: "plum-spacing-margin",
		body: [
			"@include spacing-margin($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});",
		],
		description: "[spacing]: Quickly change an element's margin.",
	},

	"[spacing]: Quickly add predefined padding based on template argument.": {
		prefix: "plum-spacing-padding-template",
		body: [
			"@include spacing-padding-size($$size: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});",
		],
		description:
			"[spacing]: Quickly add predefined padding based on template argument.",
	},

	"[spacing]: Quickly add a predefined margin based on the template argument.":
		{
			prefix: "plum-spacing-margin-template",
			body: [
				"@include spacing-margin-size($$size: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});",
			],
			description:
				"[spacing]: Quickly add a predefined margin based on the template argument.",
		},

	"[spacing]: Quickly add a predefined padding|margin based on the template argument.":
		{
			prefix: "plum-spacing-all-template",
			body: [
				"@include spacing-all-size($$size: ${1:xx-small, x-small, smaller, small, medium, large, larger, x-large, xx-large});",
			],
			description:
				"[spacing]: Quickly add a predefined padding|margin based on the template argument.",
		},
};
