export const plum_layout = {
  '[layout]: This mixin will be useful whenever you have content floating to the right or left and want to clear the space below the floating element to insert new content below - must be applied to the element parent.':
    {
      prefix: 'plum-layout-clearfix',
      body: ['@include clearfix();'],
      description:
        '[layout]: This mixin will be useful whenever you have content floating to the right or left and want to clear the space below the floating element to insert new content below - must be applied to the element parent.',
    },

  "[layout]: Columnize mixin helps you create hypothetical evenly divided columns (based on flexbox) in a containing element, as much as the value you pass for the $columns argument. So you can display all children at the same time. 'inside parent element as if aligned in a column - [WARNING]: must be applied to parent element to align children inside of it!.":
    {
      prefix: 'plum-layout-columnize',
      body: [
        '@include columnize(${1:$$columns: number}, ${2:$$gutter: :pixel}, ${3:$$fill: boolean->false});',
      ],
      description:
        "[layout]: Columnize mixin helps you create hypothetical evenly divided columns (based on flexbox) in a containing element, as much as the value you pass for the $columns argument. So you can display all children at the same time. 'inside parent element as if aligned in a column - [WARNING]: must be applied to parent element to align children inside of it!.",
    },

  '[layout]: The flex-box value causes an element to generate a block-level flex container box':
    {
      prefix: 'plum-layout-flex-box',
      body: ['@include flex-box();'],
      description:
        '[layout]: The flex-box value causes an element to generate a block-level flex container box',
    },

  '[layout]: The flex-inline value causes an element to generate a inline-level flex container box.':
    {
      prefix: 'plum-layout-flex-inline',
      body: ['@include flex-inline();'],
      description:
        '[layout]: The flex-inline value causes an element to generate a inline-level flex container box.',
    },

  '[layout]: Flex-direction mixin specifies the direction flex items are placed in the flex container.':
    {
      prefix: 'plum-layout-flex-direction',
      body: [
        '@include flex-direction(${1:$$direction: row, row-reverse, column, column-reverse});',
      ],
      description:
        '[layout]: Flex-direction mixin specifies the direction flex items are placed in the flex container.',
    },

  '[layout]: Flex-wrap mixin controls whether the flex container is single or multi-line.':
    {
      prefix: 'plum-layout-flex-wrap',
      body: ['@include flex-wrap(${1:$$value: nowrap, wrap, wrap-reverse});'],
      description:
        '[layout]: Flex-wrap mixin controls whether the flex container is single or multi-line.',
    },

  "[layout]: The flex-flow mixin is a shorthand for setting the flex-direction and flex-wrap properties, which together define the flex container's main and cross axes.":
    {
      prefix: 'plum-layout-flex-flow',
      body: [
        '@include flex-flow(${1:$$value: row, row-reverse, column, column-reverse | nowrap, wrap, wrap-reverse});',
      ],
      description:
        "[layout]: The flex-flow mixin is a shorthand for setting the flex-direction and flex-wrap properties, which together define the flex container's main and cross axes.",
    },

  '[layout]: The flex-order mixin controls the order in which flex items appear within their flex container, by assigning them to ordinal groups.':
    {
      prefix: 'plum-layout-flex-order',
      body: ['@include flex-order(${1:$$int: 0});'],
      description:
        '[layout]: The flex-order mixin controls the order in which flex items appear within their flex container, by assigning them to ordinal groups.',
    },

  '[layout]: The flex-grow mixin sets the flex grow factor. Negative numbers are invalid.':
    {
      prefix: 'plum-layout-flex-grow',
      body: ['@include flex-grow(${1:$$int: 0});'],
      description:
        '[layout]: The flex-grow mixin sets the flex grow factor. Negative numbers are invalid.',
    },

  '[layout]: The flex-shrink mixin sets the flex shrink factor. Negative numbers are invalid.':
    {
      prefix: 'plum-layout-flex-shrink',
      body: ['@include flex-shrink(${1:$$int: 1});'],
      description:
        '[layout]: The flex-shrink mixin sets the flex shrink factor. Negative numbers are invalid.',
    },

  '[layout]: The flex-basis mixin sets the flex basis. Negative lengths are invalid.':
    {
      prefix: 'plum-layout-flex-basis',
      body: ['@include flex-basis(${1:$$width: pixel});'],
      description:
        '[layout]: The flex-basis mixin sets the flex basis. Negative lengths are invalid.',
    },

  '[layout]: Flex-all specifies flex grow, shrink factors, and flex basis.': {
    prefix: 'plum-layout-flex-all',
    body: [
      '@include flex-all(${1:$$fg: 1}, ${2:$$fs: null}, ${3:$$fb: null});',
    ],
    description:
      '[layout]: Flex-all specifies flex grow, shrink factors, and flex basis.',
  },

  '[layout]: Flex-justify-content aligns flex items along the main axis.': {
    prefix: 'plum-layout-flex-justify',
    body: [
      '@include flex-justify-content(${1:$$align: flex-start, flex-end, center, space-between, space-around});',
    ],
    description:
      '[layout]: Flex-justify-content aligns flex items along the main axis.',
  },

  '[layout]: Flex-align-items aligns flex items in the cross axis.': {
    prefix: 'plum-layout-flex-align-items',
    body: [
      '@include flex-align-items(${1:$$align: flex-start, flex-end, center, baseline, stretch});',
    ],
    description:
      '[layout]: Flex-align-items aligns flex items in the cross axis.',
  },

  '[layout]: The flex-align-self mixin allows this default alignment to be overridden for individual flex items.':
    {
      prefix: 'plum-layout-flex-align-self',
      body: [
        '@include flex-align-self(${1:$$align: flex-start, flex-end, center, baseline, stretch});',
      ],
      description:
        '[layout]: The flex-align-self mixin allows this default alignment to be overridden for individual flex items.',
    },

  '[layout]: Flex-align-content aligns lines within flex container when extra space.':
    {
      prefix: 'plum-layout-flex-align-content',
      body: [
        '@include flex-align-content(${1:$$align: flex-start, flex-end, center, space-between, space-around, stretch});',
      ],
      description:
        '[layout]: Flex-align-content aligns lines within flex container when extra space.',
    },
}
