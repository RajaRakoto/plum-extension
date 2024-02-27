export const plum_specs = {
  '[specs]: The resizable mixin helps you make an element resizable in the horizontal or vertical directions.':
    {
      prefix: 'plum-specs-resizable',
      body: [
        '@include resizable($$direction: ${1:none, both, vertical, horizontal}, $$overflow: ${2:auto, overflow});',
      ],
      description:
        '[specs]: The resizable mixin helps you make an element resizable in the horizontal or vertical directions.',
    },

  '[specs]: Sizer mixin helps you size items with a statement (or two). Resize items or create square or rectangular shapes very easily.':
    {
      prefix: 'plum-specs-sizer',
      body: ['@include sizer($$width: ${1:pixel}, $$height: ${2:pixel});'],
      description:
        '[specs]: Sizer mixin helps you size items with a statement (or two). Resize items or create square or rectangular shapes very easily.',
    },

  '[specs]: There will be times when you need to style elements only for a particular tablet model. Tablet mixin helps you achieve this.':
    {
      prefix: 'plum-specs-tablet',
      body: [
        '@include tablet($$device: ${1:xx-small, iPadMini, iPad, iPadAir, iPadPro, Nexus7, Nexus9, Nexus10}, $$orientation: ${2: portrait, landscape});',
      ],
      description:
        '[specs]: There will be times when you need to style elements only for a particular tablet model. Tablet mixin helps you achieve this.',
    },

  '[specs]: Normalize allows browsers to render all elements more consistently and in line with modern standards - call once.':
    {
      prefix: 'plum-specs-normalize',
      body: ['@include normalize();'],
      description:
        '[specs]: Normalize allows browsers to render all elements more consistently and in line with modern standards - call once.',
    },

  "[specs]: Only mixin helps you filter out matching elements based on their position among a group of siblings and apply your style rules only to those elements. This mixin uses CSS pseudo-classes :first- of-type, :last-of-type and :nth-of-type (inverse of 'except' mixin).":
    {
      prefix: 'plum-specs-only',
      body: [
        '@include only($$arg: ${1:selector(id, class), first, last, odd, even | number(-n, n)});',
      ],
      description:
        "[specs]: Only mixin helps you filter out matching elements based on their position among a group of siblings and apply your style rules only to those elements. This mixin uses CSS pseudo-classes :first- of-type, :last-of-type and :nth-of-type (inverse of 'except' mixin).",
    },

  '[specs]: Loadify mixin is a handy tool that can help you load page element with crossfade effect during page load.':
    {
      prefix: 'plum-specs-loadify',
      body: [
        '@include loadify($$mode: ${1:init}, $$delay: ${2:second->0.2s}, $$duration: ${3:second->0.5s});',
      ],
      description:
        '[specs]: Loadify mixin is a handy tool that can help you load page element with crossfade effect during page load.',
    },

  '[specs]: The minireset is a technique that consists of resetting the value of certain HTML elements to 0 in order to avoid certain differences.':
    {
      prefix: 'plum-specs-minireset',
      body: ['@include minireset();'],
      description:
        '[specs]: The minireset is a technique that consists of resetting the value of certain HTML elements to 0 in order to avoid certain differences.',
    },

  '[specs]: There will be times when you need to style elements only for a particular smartphone model. mobile mixin helps you achieve this.':
    {
      prefix: 'plum-specs-mobile',
      body: [
        '@include mobile($$device: ${1:iPhone4, iPhone-SE, iPhone5-SE, iPhone6, iPhone6-Plus, iPhone7, iPhone7-Plus, iPhone8, iPhone8-Plus, iPhone11, iPhone11-Pro, iPhone11-Pro -Max, iPhoneX, Galaxy-S7, Galaxy-S8, Galaxy-S8-Plus, Galaxy-S10',
        '}, $$orientation: ${2:portrait, landscape});',
      ],
      description:
        '[specs]: There will be times when you need to style elements only for a particular smartphone model. mobile mixin helps you achieve this.',
    },

  "[specs]: Except mixin helps you target items to which you don't want to apply the style changes you want for other items in the list (opposite of 'only' mixin).":
    {
      prefix: 'plum-specs-except',
      body: [
        '@include except($$arg: ${1:selector(id, class), first, last, odd, even | number(-n, n)});',
      ],
      description:
        "[specs]: Except mixin helps you target items to which you don't want to apply the style changes you want for other items in the list (opposite of 'only' mixin).",
    },

  '[specs]: The Antialias mixin provides smooth font rendering, which means smoothing the font at the pixel level and preventing sub-pixel rendering.':
    {
      prefix: 'plum-specs-antialias',
      body: ['@include antialias($$value: ${1:null, only});'],
      description:
        '[specs]: The Antialias mixin provides smooth font rendering, which means smoothing the font at the pixel level and preventing sub-pixel rendering.',
    },

  '[specs]: The adaptive mixin helps you set the max-width value for containing elements based on the breakpoint values ​​defined in the _map-for-breakpoints.scss file, and also specifies a $gutter value, where the edges of a browser screen can most closely match the edges of the selected element. (Hint: the adaptive mixin works best with percentage values.).':
    {
      prefix: 'plum-specs-adaptive',
      body: ['@include adaptive($$gutter: ${1:pixel->30px});'],
      description:
        '[specs]: The adaptive mixin helps you set the max-width value for containing elements based on the breakpoint values ​​defined in the _map-for-breakpoints.scss file, and also specifies a $gutter value, where the edges of a browser screen can most closely match the edges of the selected element. (Hint: the adaptive mixin works best with percentage values.).',
    },

  '[specs]: A function that converts a pixel value to rem.': {
    prefix: 'plum-specs-convertToRem',
    body: ['__convertToRem($$value: ${1:pixel});'],
    description: '[specs]: A function that converts a pixel value to rem.',
  },

  '[specs]: Add badge with animated linear gradient': {
    prefix: 'plum-specs-badgeLinear',
    body: [
      '@include badge-linear($$type: "${1:gold, silver}", $$height: ${2:pixel->4px}, $$width: ${3:pixel->10px }, $$gradient-speed: ${4:second->3s}, $$gradient-direction: ${5:normal, reverse}, $$gradient-orientation: ${6:60deg, 90deg}, $$border-radius: ${7:pixel->10px}, $$border: ${8:boolean->false}, $$font-size: ${9:pixel->12px}, $$font-color: ${10:color->#444, #eee}, $$font-weight: ${12:bolder, normal, lighter});',
    ],
    description: '[specs]: Add badge with animated linear gradient',
  },

  "[specs]: Customize your webpage's scrollbar.": {
    prefix: 'plum-specs-barScrolling',
    body: [
      '@include bar-scrolling($$bar-color: ${1:color}, $$bar-color-hover: ${2:color}, $$bg-color: ${3:color->#eee });',
    ],
    description: "[specs]: Customize your webpage's scrollbar.",
  },

  '[specs]: Button-all mixin helps you target all HTML button elements in the DOM so you can easily apply your style rules.':
    {
      prefix: 'plum-specs-buttonAll',
      body: [
        '@include button-all($$nickname: ${1:hover, focus, active, disabled});',
      ],
      description:
        '[specs]: Button-all mixin helps you target all HTML button elements in the DOM so you can easily apply your style rules.',
    },

  '[specs]: This mixin performs fast import of external fonts and includes consistent properties.':
    {
      prefix: 'plum-specs-typo-fontface',
      body: [
        '@include typo-fontface($$font-name: ${1:string}, $$path: ${2:url}, $$weight: ${3:normal, lighter, bold, bolder}, $$style: ${4:normal, italic});',
      ],
      description:
        '[specs]: This mixin performs fast import of external fonts and includes consistent properties.',
    },

  '[specs]: The responsive video mixin helps you create responsive containing elements with a fixed aspect ratio that you define. This is especially useful when embedding videos from YouTube or similar sources.':
    {
      prefix: 'plum-specs-video-responsive',
      body: ['@include video-responsive($$ratio: ${1:16/9, 4/3});'],
      description:
        '[specs]: The responsive video mixin helps you create responsive containing elements with a fixed aspect ratio that you define. This is especially useful when embedding videos from YouTube or similar sources.',
    },

  '[specs]: Outputs the overflow-wrap property and its legacy name word-wrap to support browsers that do not yet use "overflow-wrap"':
    {
      prefix: 'plum-specs-overflow',
      body: ['@include overflow-wrap($$wrap: ${1:normal, break-word});'],
      description:
        '[specs]: Outputs the overflow-wrap property and its legacy name word-wrap to support browsers that do not yet use "overflow-wrap"',
    },

  "[specs]: Easily set an element's t = top, r = right, b = bottom, l = left values.":
    {
      prefix: 'plum-specs-trbl',
      body: [
        '@include trbl($$top: ${1:pixel}, $$right: ${2:pixel}, $$bottom: ${3:pixel}, $$left: ${4:pixel});',
      ],
      description:
        "[specs]: Easily set an element's t = top, r = right, b = bottom, l = left values.",
    },
}
