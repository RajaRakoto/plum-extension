/* engine */
import { reformatSnippets, fsExport } from './engine.js'
/* snippets sources */
import { plum_animation } from '../src/basics/plum-animation.js'
import { plum_basics } from '../src/basics/plum-basics.js'
import { plum_box } from '../src/basics/plum-box.js'
import { plum_colors } from '../src/basics/plum-color.js'
import { plum_docs } from '../src/basics/plum-docs.js'
import { plum_effect } from '../src/basics/plum-effect.js'
import { plum_frameworks } from '../src/basics/plum-frameworks.js'
import { plum_image } from '../src/basics/plum-image.js'
import { plum_input } from '../src/basics/plum-input.js'
import { plum_layout } from '../src/basics/plum-layout.js'
import { plum_libraries } from '../src/basics/plum-libraries.js'
import { plum_loaders } from '../src/basics/plum-loaders.js'
import { plum_magic } from '../src/basics/plum-magic.js'
import { plum_media } from '../src/basics/plum-media.js'
import { plum_position } from '../src/basics/plum-position.js'
import { plum_spacing } from '../src/basics/plum-spacing.js'
import { plum_specs } from '../src/basics/plum-specs.js'
import { plum_tools } from '../src/basics/plum-tools.js'

// ========================================

// all variables string lists
const varStringLists = [
  'plum_animation',
  'plum_basics',
  'plum_box',
  'plum_colors',
  'plum_docs',
  'plum_effect',
  'plum_frameworks',
  'plum_image',
  'plum_input',
  'plum_layout',
  'plum_libraries',
  'plum_loaders',
  'plum_magic',
  'plum_media',
  'plum_position',
  'plum_spacing',
  'plum_specs',
  'plum_tools',
]

// all variables lists
const varLists = [
  plum_animation,
  plum_basics,
  plum_box,
  plum_colors,
  plum_docs,
  plum_effect,
  plum_frameworks,
  plum_image,
  plum_input,
  plum_layout,
  plum_libraries,
  plum_loaders,
  plum_magic,
  plum_media,
  plum_position,
  plum_spacing,
  plum_specs,
  plum_tools,
]

// old snippets reformated output
function getReformatOutput() {
  varLists.forEach((varList, index) => {
    fsExport(
      reformatSnippets(varList, varStringLists[index]),
      `./output/${varStringLists[index].replace('_', '-')}.js`,
    )
  })
}

getReformatOutput()
