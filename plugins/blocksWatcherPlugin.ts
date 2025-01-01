import { Plugin } from "vite"
import fs from 'fs'
const root = "src"

export function blocksWatcherPlugin(): Plugin {
    return {
      name: 'blocks-watcher',
      handleHotUpdate({ file, server }) {
        if (file.endsWith('.vue')) {
            // 
            if (file.includes(root + '/views/blocks') && !file.includes(root + '/views/blocks/index.vue')) {
                console.log('Vue file changed:', file)
                // 取出views到index.vue之间的内容，作为key
                const key = file.split(root + '/views')[1].split('/index.vue')[0]
                // 读取文件内容
                const fileContent = fs.readFileSync(file, 'utf8')
                
                // 读取json文件
                const jsonFile = fs.readFileSync(root + '/assets/blocks.json', 'utf8')
                const json = JSON.parse(jsonFile)
                json[key] = fileContent
                fs.writeFileSync(root + '/assets/blocks.json', JSON.stringify(json, null, 2))
            }
        }
      },
    }
  }
  