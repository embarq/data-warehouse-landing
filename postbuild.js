const Critters = require('critters');
const fs = require('fs/promises');
const path = require('path');

(async () => {
  const filePath = path.resolve(__dirname, 'dist', 'index.html')
  const fileHandle = await fs.open(
    filePath
  )
  const contents = await fileHandle.readFile()
  const critters = new Critters({
    path: path.resolve(__dirname, 'dist')
  })
  const inlined = await critters.process(contents.toString())
  await fs.writeFile(filePath, inlined)
})()
