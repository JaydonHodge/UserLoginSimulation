import { createHash } from 'crypto'
import { Md5 } from 'ts-md5'

function generateSHA256(input: string): string {
    return createHash('sha256').update(input).digest('hex')
}

const input: string = "steveslist"

const out2 = generateSHA256("steveslist")
const out1 = Md5.hashStr(input)

console.log(`${out1}`)
console.log(`${out2}`)
