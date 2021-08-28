import fs from "fs-extra"

import { fileURLToPath } from "url"

import { dirname, join } from "path"

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

//dirName = directory name of file

//fileName =  File name

export const getDataFilePath = (name) => join(__dirname, "../data", name)

// calculated a path
export const readFile = async (name) => {
    
    const filesJSONPath =  getDataFilePath(name)

    const json = await fs.readJSON(filesJSONPath) 

    return json// returns a json array
}

export const writeFile = async (name, content)=>{
    const filesJSONPath =  getDataFilePath(name) //name = files.json
    const json = await readFile(name) 
    json.push(content) //adds content of our request body to pur json
    await fs.writeJSON(filesJSONPath, json) // The writeFileSync function accepts 2-3 parameters: The path of the file to write data to, the data to write, and an optional parameter.


    return json
}
console.log(__filename,__dirname)