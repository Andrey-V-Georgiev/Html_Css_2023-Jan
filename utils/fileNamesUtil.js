import { readFile } from 'fs/promises'

async function example() {
  try {
    const data = await readFile('utils\\exerciseTitles.txt', { encoding: 'utf8' })
    const dataReplaced = data.replace(/[ &]/g, '-').replace(/[.]/g, '')
    const splitedData = dataReplaced.split(/\r?\n/)
    const joinedData = splitedData.join(' ')
    const mkdirCommand = `mkdir ${joinedData}`
    console.log(mkdirCommand)
  } catch (err) {
    console.log(err)
  }
}
example()