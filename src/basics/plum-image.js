export const plum_image = {
  "[image]: Image-logo mixin helps you create an SEO-optimized logo component for your brand's website using CSS best practices.":
    {
      prefix: 'plum-image-logo',
      body: [
        '@include image-logo($$image: ${1:url}, $$width: ${2:pixel}, $$height: ${3:pixel});',
      ],
      description:
        "[image]: Image-logo mixin helps you create an SEO-optimized logo component for your brand's website using CSS best practices.",
    },

  '[image]: Image-background mixin lets you apply background images to selected items.':
    {
      prefix: 'plum-image-background',
      body: [
        '@include image-background($$image: ${1:url}, $$filter-color: ${2:color list}, $$filter-direction: ${3:top, top-right, right, bottom-right, bottom, bottom-left, left, top-left});',
      ],
      description:
        '[image]: Image-background mixin lets you apply background images to selected items.',
    },

  "[image]: Add high-res images to your site, with a workaround for devices that don't display high-res images when using Retina Image, it's best to compress to the max without destroying image source (https://tinypng.com).":
    {
      prefix: 'plum-image-retina',
      body: [
        '@include image-retina($$image: ${1:url}, $$width: ${2:pixel}, $$height: ${3:pixel});',
      ],
      description:
        "[image]: Add high-res images to your site, with a workaround for devices that don't display high-res images when using Retina Image, it's best to compress to the max without destroying image source (https://tinypng.com).",
    },

  '[image]: The image-resolution mixin helps you target elements to different screen resolutions.':
    {
      prefix: 'plum-image-resolution',
      body: ['@include image-resolution($$resolution: ${1:x1, x2, x3});'],
      description:
        '[image]: The image-resolution mixin helps you target elements to different screen resolutions.',
    },

  '[image]: The image-responsive mixin helps you make images responsive and change the default display CSS property value from inline to block to remove the extra space below.':
    {
      prefix: 'plum-image-responsive',
      body: ['@include image-responsive($$height: ${1:pixel->auto});'],
      description:
        '[image]: The image-responsive mixin helps you make images responsive and change the default display CSS property value from inline to block to remove the extra space below.',
    },

  '[image]: Preload images by setting them to a background-image on the html:after element.':
    {
      prefix: 'plum-image-preload',
      body: [
        '@include image-preload(',
        '  $$preload: ${1:path}',
        ');',
        '@include image-preload();',
      ],
      description:
        '[image]: Preload images by setting them to a background-image on the html:after element.',
    },
  '[image]: Generate image from internet using link': {
    prefix: 'plum-image-random',
    body: ['https://picsum.photos/500/300?random=1'],
    description: '[image]: Generate image from internet using link',
  },
}
