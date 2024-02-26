export const plum_position = {
  '[position]: Position-set mixin provides a one-line method to quickly set both the position and offset properties of a selected element.':
    {
      prefix: 'plum-position-set',
      body: [
        '@include position-set($$position: ${1:static, relative, fixed, absoluteute, sticky}, ${2:$$offsets: list(top, right, bottom, left)->0});',
      ],
      description:
        '[position]: Position-set mixin provides a one-line method to quickly set both the position and offset properties of a selected element.',
    },

  '[position]: Position-center mixin allows you to center elements (elements that have an absolute or fixed position value) on the horizontal and vertical axes - [WARNING]: You must declare position-style rule: absolute or position: fixed to the selected element for this mixin to work correctly. The position value of the parent element, in which you will center, must be something other than static.':
    {
      prefix: 'plum-position-center',
      body: [
        '@include position-center($$axis: ${1:vertical, horizontal, both});',
      ],
      description:
        '[position]: Position-center mixin allows you to center elements (elements that have an absolute or fixed position value) on the horizontal and vertical axes - [WARNING]: You must declare position-style rule: absolute or position: fixed to the selected element for this mixin to work correctly. The position value of the parent element, in which you will center, must be something other than static.',
    },

  '[position]: Quickly center a block.': {
    prefix: 'plum-position-block-center',
    body: ['@include position-block-center();'],
    description: '[position]: Quickly center a block.',
  },

  '[position]: Mixin to define the position of an element as absolute.': {
    prefix: 'plum-position-absolute',
    body: [
      '@include position-absolute($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});',
    ],
    description:
      '[position]: Mixin to define the position of an element as absolute.',
  },

  '[position]: Mixin to define the position of an element as relative.': {
    prefix: 'plum-position-relative',
    body: [
      '@include position-relative($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});',
    ],
    description:
      '[position]: Mixin to define the position of an element as relative.',
  },

  '[position]: Mixin to define the position of an element as fixed.': {
    prefix: 'plum-position-fixed',
    body: [
      '@include position-fixed($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});',
    ],
    description:
      '[position]: Mixin to define the position of an element as fixed.',
  },
}
