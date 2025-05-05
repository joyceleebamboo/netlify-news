// Import the default theme
import DefaultTheme from 'vitepress/theme'

import { DocBox, DocBoxCube, DocLinks, DocPill } from '@theojs/lumen'

// Import Lumen theme
import '@theojs/lumen/theme'

// Export the theme configuration
export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => { 
    app.component('Box', DocBox) 
    app.component('Pill', DocPill) 
    app.component('Links', DocLinks) 
    app.component('BoxCube', DocBoxCube) 
  }
}
