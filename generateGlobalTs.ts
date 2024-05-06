// vite-plugin-copy-global-components.js
import fs from 'fs'
import path from 'path'

export default function vitePluginCopyGlobalComponents() {
  return {
    name: 'copy-global-components',
    apply: 'build',
    writeBundle() {
      const sourceFile = 'src/globalComponents.d.ts'
      const targetDir = './' // 或者你想要的目标目录

      const sourcePath = path.resolve(sourceFile)
      const targetPath = path.resolve(targetDir, 'global.d.ts')

      // 检查源文件是否存在
      if (!fs.existsSync(sourcePath)) {
        console.error(`Source file ${sourceFile} does not exist.`)
        return
      }

      // 尝试读取源文件内容并替换
      try {
        let content = fs.readFileSync(sourcePath, 'utf-8')
        content = content.replace(/@\/components/g, 'elin-ui')
        content = content.replace("'vue'", "'@vue/runtime-core'")

        // 将替换后的内容写入目标文件
        fs.writeFileSync(targetPath, content)

        console.log(`Copied and modified ${sourceFile} to ${targetPath}`)
      } catch (err) {
        console.error(`Error copying and modifying ${sourceFile} to ${targetPath}:`, err)
      }
    }
  }
}
