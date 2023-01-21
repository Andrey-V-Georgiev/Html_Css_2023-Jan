import { readFile } from 'fs/promises'

async function example() {
  try {
    const data = await readFile('utils\\exerciseTitles.txt', { encoding: 'utf8' })
    
    const replace1 = data.replace(/[ &]/g, '-') 

    const replace2 = replace1.replace(/(?<=[0-9])\.(?=[-])/g, '')
   
    const replace3 = replace2.replace(/(?<=[0-9])-/g, '.')

    const splitedData = replace3.split(/\r?\n/)
    
    const joinedData = splitedData.join(' ')
    
    const mkdirCommand = `mkdir ${joinedData}`
    
    console.log(mkdirCommand)
  } catch (err) {
    console.log(err)
  }
}
example()