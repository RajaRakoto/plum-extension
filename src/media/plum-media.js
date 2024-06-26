export const plum_media = {
	"[media]: Breakpoint mixin helps you create scalable media queries and breakpoints using @media CSS rule in SCSS.":
		{
			prefix: "plum-media-breakpoint",
			body: [
				"@include breakpoint($$mode: ${1:only, min, max, beetween}, $$value: ${2:xsmall, small, medium, large, xlarge | pixel});",
			],
			description:
				"[media]: Breakpoint mixin helps you create scalable media queries and breakpoints using @media CSS rule in SCSS.",
		},

	"[media]: Breakpointer mixin is a handy little tool that shows what breakpoint you're at so you can write your styles for that specific screen size.":
		{
			prefix: "plum-media-breakpointer",
			body: ["@include breakpointer($$selector: ${1:id, class, tag});"],
			description:
				"[media]: Breakpointer mixin is a handy little tool that shows what breakpoint you're at so you can write your styles for that specific screen size.",
		},
};
