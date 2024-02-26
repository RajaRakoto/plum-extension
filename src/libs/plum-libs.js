export const plum_libs = {
  '[libs]: Import hamburgers module (lib) from plum': {
    prefix: 'plum-import-lib-burgers',
    body: ["@import 'plum-lib-burgers';"],
    description: '[libs]: Import hamburgers module (lib) from plum',
  },

  '[libs]: Import magic module (lib) from plum': {
    prefix: 'plum-import-lib-magic',
    body: ["@import 'plum-lib-magic';"],
    description: '[libs]: Import magic module (lib) from plum',
  },

  '[libs]: Mixin loaders from plum': {
    prefix: 'plum-lib-loaders*1 [4-5-7-8-10-11]',
    body: ['@include loader-${1:index}($$primary: ${2:color});'],
    description: '[libs]: Mixin loaders from plum',
  },

  '[libs]: Mixin loaders from plum': {
    prefix: 'plum-lib-loaders*2 [1-2-3-6-9-12]',
    body: [
      '@include loader-${1:index}($$primary: ${2:color}, $$secondary: ${3:color});',
    ],
    description: '[libs]: Mixin loaders from plum',
  },

  '[libs]: Import module loaders (lib) from plum': {
    prefix: 'plum-import-lib-loaders',
    body: ["@import 'plum-lib-loaders';"],
    description: '[libs]: Import module loaders (lib) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-btn',
    body: ['@include magic-btn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-magic',
    body: ['@include magic-magic($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-twisterInDown',
    body: ['@include magic-twisterInDown($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-twisterInUp',
    body: ['@include magic-twisterInUp($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-swap',
    body: ['@include magic-swap($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-puffIn',
    body: ['@include magic-puffIn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-puffOut',
    body: ['@include magic-puffOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-vanishIn',
    body: ['@include magic-vanishIn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-vanishOut',
    body: ['@include magic-vanishOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openDownLeft',
    body: ['@include magic-openDownLeft($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openDownRight',
    body: ['@include magic-openDownRight($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openUpLeft',
    body: ['@include magic-openUpLeft($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openUpRight',
    body: ['@include magic-openUpRight($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openDownLeftReturn',
    body: ['@include magic-openDownLeftReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openDownRightReturn',
    body: ['@include magic-openDownRightReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openUpLeftReturn',
    body: ['@include magic-openUpLeftReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openUpRightReturn',
    body: ['@include magic-openUpRightReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openDownLeftOut',
    body: ['@include magic-openDownLeftOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openDownRightOut',
    body: ['@include magic-openDownRightOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openUpLeftOut',
    body: ['@include magic-openUpLeftOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-openUpRightOut',
    body: ['@include magic-openUpRightOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-perspectiveDown',
    body: ['@include magic-perspectiveDown($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-perspectiveUp',
    body: ['@include magic-perspectiveUp($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-perspectiveLeft',
    body: ['@include magic-perspectiveLeft($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-perspectiveRight',
    body: ['@include magic-perspectiveRight($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-perspectiveDownReturn',
    body: ['@include magic-perspectiveDownReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-perspectiveUpReturn',
    body: ['@include magic-perspectiveUpReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-perspectiveLeftReturn',
    body: ['@include magic-perspectiveLeftReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-perspectiveRightReturn',
    body: ['@include magic-perspectiveRightReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-rotateDown',
    body: ['@include magic-rotateDown($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-rotateUp',
    body: ['@include magic-rotateUp($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-rotateLeft',
    body: ['@include magic-rotateLeft($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-rotateRight',
    body: ['@include magic-rotateRight($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-slideDown',
    body: ['@include magic-slideDown($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-slideUp',
    body: ['@include magic-slideUp($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-slideLeft',
    body: ['@include magic-slideLeft($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-slideRight',
    body: ['@include magic-slideRight($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-slideDownReturn',
    body: ['@include magic-slideDownReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-slideUpReturn',
    body: ['@include magic-slideUpReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-slideLeftReturn',
    body: ['@include magic-slideLeftReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-slideRightReturn',
    body: ['@include magic-slideRightReturn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-swashOut',
    body: ['@include magic-swashOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-swashIn',
    body: ['@include magic-swashIn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-foolishIn',
    body: ['@include magic-foolishIn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-holeOut',
    body: ['@include magic-holeOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-tinRightOut',
    body: ['@include magic-tinRightOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-tinLeftOut',
    body: ['@include magic-tinLeftOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-tinUpOut',
    body: ['@include magic-tinUpOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-tinDownOut',
    body: ['@include magic-tinDownOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-tinRightIn',
    body: ['@include magic-tinRightIn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-tinLeftIn',
    body: ['@include magic-tinLeftIn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-tinUpIn',
    body: ['@include magic-tinUpIn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-tinDownIn',
    body: ['@include magic-tinDownIn($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-bombRightOut',
    body: ['@include magic-bombRightOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-bombLeftOut',
    body: ['@include magic-bombLeftOut($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-boingInUp',
    body: ['@include magic-boingInUp($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-boingOutDown',
    body: ['@include magic-boingOutDown($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-spaceOutUp',
    body: ['@include magic-spaceOutUp($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-spaceOutRight',
    body: ['@include magic-spaceOutRight($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-spaceOutDown',
    body: ['@include magic-spaceOutDown($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-spaceOutLeft',
    body: ['@include magic-spaceOutLeft($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-spaceInUp',
    body: ['@include magic-spaceInUp($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-spaceInRight',
    body: ['@include magic-spaceInRight($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-spaceInDown',
    body: ['@include magic-spaceInDown($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },

  '[libs]: Mixin magic (animation) from plum': {
    prefix: 'plum-lib-magic-spaceInLeft',
    body: ['@include magic-spaceInLeft($$duration: ${1: second});'],
    description: '[libs]: Mixin magic (animation) from plum',
  },
}
