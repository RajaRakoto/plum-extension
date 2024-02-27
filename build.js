/* libs */
import fs from 'fs'
/* src snippets sources */
import { plum_animation } from './src/basics/plum-animation.js'
import { plum_box } from './src/basics/plum-box.js'
import { plum_effect } from './src/basics/plum-effect.js'
import { plum_image } from './src/basics/plum-image.js'
import { plum_input } from './src/basics/plum-input.js'
import { plum_position } from './src/basics/plum-position.js'
import { plum_spacing } from './src/basics/plum-spacing.js'
import { plum_layout } from './src/layout/plum-layout.js'
import { plum_media } from './src/media/plum-media.js'
import { plum_specs } from './src/specs/plum-specs.js'
import { plum_import } from './src/plum-import.js'
/* modules snippets sources */
import { plum_animate } from './modules/plum-animate.js'
import { plum_buttons2 } from './modules/plum-buttons2.js'
import { plum_hover2 } from './modules/plum-hover2.js'
import { plum_magic } from './modules/plum-magic.js'
import { plum_oc } from './modules/plum-oc.js'

// ========================================

// all snippets list
const snippetsList = [
  plum_animate,
  plum_buttons2,
  plum_hover2,
  plum_magic,
  plum_oc,
]
// merge all snippets
const concatenedSnippets = Object.assign(
  {},
  ...snippetsList.map((snippet) => {
    return snippet
  }),
)

// convert to JSON
const json = JSON.stringify(concatenedSnippets)

// write to file
fs.writeFileSync('./snippets.json', json)
