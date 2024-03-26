import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { postcssIsolateStyles } from 'vitepress'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssIsolateStyles({
      includeFiles: [/vp-doc\.css/] // defaults to /base\.css/
    })
  ]
}
