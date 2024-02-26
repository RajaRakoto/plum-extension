import { concatJSONsourcesToOneFile } from './utilities/engine.js'
import { plum_animation } from './src/basics/plum-animation.js'
import { plum_box } from './src/basics/plum-box.js'
import { plum_color } from './src/basics/plum-color.js'
import { plum_docs } from './src/basics/plum-docs.js'
import { plum_effect } from './src/basics/plum-effect.js'
import { plum_image } from './src/basics/plum-image.js'
import { plum_import } from './src/basics/plum-import.js'
import { plum_input } from './src/basics/plum-input.js'
import { plum_layout } from './src/basics/plum-layout.js'
import { plum_libraries } from './src/basics/plum-libraries.js'
import { plum_media } from './src/basics/plum-media.js'
import { plum_position } from './src/basics/plum-position.js'
import { plum_spacing } from './src/basics/plum-spacing.js'
import { plum_specs } from './src/basics/plum-specs.js'
import { plum_tools } from './src/basics/plum-tools.js'

// all snippets list
const snippetsList = [
  plum_animation,
  plum_box,
  plum_color,
  plum_docs,
  plum_effect,
  plum_image,
  plum_import,
  plum_input,
  plum_layout,
  plum_libraries,
  plum_media,
  plum_position,
  plum_spacing,
  plum_specs,
  plum_tools,
]

// concat all snippets to one JSON file
concatJSONsourcesToOneFile(snippetsList, './dist/plum.code-snippets')
